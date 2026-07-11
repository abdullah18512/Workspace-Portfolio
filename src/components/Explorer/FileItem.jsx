import { Braces, ChevronDown, ChevronRight, File, FileText, Folder } from "lucide-react"
import { useEffect, useState } from "react";

const fileIcons = {
  markdown: FileText,
  pdf: File,
  folder: Folder,
  json: Braces
};

const FileItem = ({ item, handleOpenFile, level, activeFile }) => {
  const Icon = fileIcons[item.type];
  const [isOpen, setIsOpen] = useState(true);
  useEffect(()=>{
    const hasActiveChild = item.children?.some((child)=>child.id === activeFile?.id);
  }, [activeFile]);

  return (
    <>

      <div
        style={{ paddingLeft: `${level * 16}px` }}
        className={`
        flex items-center gap-2 px-3 py-1 text-white cursor-pointer transition-colors duration-100
           ${activeFile?.id === item.id ? "bg-[#37373d]" : "hover:bg-[#2a2d2e]"}`
        }
        onClick={() => {
          if (item.type === "folder") {
            setIsOpen(!isOpen);
          }
          else {
            handleOpenFile(item);
          }
        }}
      >

        <>
          {item.type === "folder" && (isOpen ? (<ChevronDown size={14} />) : (<ChevronRight size={14} />))}
          <Icon size={15} />
        </>

        <span>{item.name}</span>
      </div>

      {
        item.type === "folder" && isOpen && item.children?.map((child) => (
          <FileItem
            key={child.id}
            item={child}
            handleOpenFile={handleOpenFile}
            activeFile={activeFile}
            level={level + 1}
          />
        ))
      }
    </>
  )
}

export default FileItem
