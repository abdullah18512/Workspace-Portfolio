import { Braces, File, FileText, Folder } from "lucide-react"

const fileIcons = {
  markdown: FileText,
  pdf: File,
  folder: Folder,
  json: Braces
};

const FileItem = ({item, handleOpenFile}) => {
  const Icon = fileIcons[item.type];

  return (
    <div className="flex items-center gap-2 px-3 py-1 hover:bg-[#2a2d2e] text-white cursor-pointer"
    onClick={()=> handleOpenFile(item)}
    >
        <Icon size = {15}/>

        <span>{item.name}</span>
    </div>
  )
}

export default FileItem
