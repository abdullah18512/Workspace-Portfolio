import { Braces, File, FileText, Folder } from "lucide-react";

const fileIcons = {
    markdown: FileText,
    pdf: File,
    folder: Folder,
    json: Braces
};

const Tabs = ({ activeFile }) => {
    if (!activeFile) return null;
    const Icon = fileIcons[activeFile.type];

    return (
        <div>
            <div className="flex items-center gap-2 px-4 h-full border-r border-neutral-700 bg-[#1e1e1e]">
                <Icon size={16} className="text-blue-400" />
                <span className="text-sm text-white">
                    {activeFile.name}
                </span>
            </div>

        </div>
    )
}

export default Tabs
