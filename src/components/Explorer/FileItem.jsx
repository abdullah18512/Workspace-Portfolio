import { Braces, File, FileText, Folder } from "lucide-react"

const fileIcons = {
  markdown: FileText,
  pdf: File,
  folder: Folder,
  json: Braces
};

const FileItem = ({item}) => {
  const Icon = fileIcons[item.type];

  return (
    <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
        <Icon size = {16}/>

        <span>{item.name}</span>
    </div>
  )
}

export default FileItem
