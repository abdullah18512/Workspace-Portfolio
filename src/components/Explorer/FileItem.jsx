import { Braces, File, FileText, Folder } from "lucide-react"

const fileIcons = {
  markdown: FileText,
  pdf: File,
  folder: Folder,
  json: Braces
};

const FileItem = ({item, setActiveFile}) => {
  const Icon = fileIcons[item.type];

  return (
    <div className="flex items-center gap-2 px-3 py-1 hover:bg-[#2a2d2e] text-white cursor-pointer"
    onClick={()=> setActiveFile(item)}
    >
        <Icon size = {16}/>

        <span>{item.name}</span>
    </div>
  )
}

export default FileItem
