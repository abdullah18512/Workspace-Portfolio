import { Braces, ChevronDown, ChevronRight, File, FileText, Folder } from "lucide-react"
import { useState } from "react";

const fileIcons = {
  markdown: FileText,
  pdf: File,
  folder: Folder,
  json: Braces
};

const FileItem = ({ item, handleOpenFile, level }) => {
  const Icon = fileIcons[item.type];
  const [isOpen, setIsOpen] = useState(true);
  console.log(item);

  return (
    <>

      <div
        style={{ paddingLeft: `${level * 16}px` }}
        className="flex items-center gap-2 px-3 py-1 hover:bg-[#2a2d2e] text-white cursor-pointer"
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
            level={level + 1}
          />
        ))
      }
    </>
  )
}

export default FileItem
