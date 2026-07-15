import { Braces, ChevronDown, ChevronRight, File, FileText, Folder } from "lucide-react"
import { useEffect, useRef, useState } from "react";

const fileIcons = {
  markdown: FileText,
  pdf: File,
  folder: Folder,
  json: Braces
};

const FileItem = ({ item, handleOpenFile, level, activeFile }) => {
  const Icon = fileIcons[item.type];
  const [isOpen, setIsOpen] = useState(true);

  const itemRef = useRef(null);
  useEffect(() => {
    const hasActiveDescendant = (children) => {
      return children?.some((child) => {
        if (child.id === activeFile?.id) return true;
        return hasActiveDescendant(child.children);
      });
    };

    if (hasActiveDescendant(item.children)) {
      setIsOpen(true);
    }
  }, [activeFile]);

  useEffect(() => {
    if (activeFile?.id === item.id) {
      itemRef.current.scrollIntoView();
    }
  }, [activeFile]);
  return (
    <>

      <div
        style={{ paddingLeft: `${level * 16}px` }}
        className={`flex items-center gap-2 px-2 py-1.5 cursor-pointer text-[13px] transition-colors duration-150 select-none ${activeFile?.id === item.id ? "bg-[var(--bg-item-active)] text-[var(--text-item-active)]" : "text-[var(--text-muted)] hover:bg-[var(--bg-item-hover)] hover:text-[var(--text-main)]"} `}
        ref={itemRef}
        onClick={() => {
          if (item.type === "folder") {
            setIsOpen(!isOpen);
          }
          else {
            handleOpenFile(item);
          }
        }
        }

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
