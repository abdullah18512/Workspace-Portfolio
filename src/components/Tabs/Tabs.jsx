import { Braces, File, FileText, Folder, X } from "lucide-react";

const fileIcons = {
    markdown: FileText,
    pdf: File,
    folder: Folder,
    json: Braces,
};

const Tabs = ({ openFile, activeFile, handleSwitchTab, handleCloseTab }) => {

    if (openFile.length === 0) return null;

    return (
        <div className="flex h-10 bg-[#252526] border-b border-neutral-700">

            {openFile.map((file) => {

                const Icon = fileIcons[file.type];

                return (
                    <div
                        key={file.id}
                        onClick={() => handleSwitchTab(file)}
                        className={`
                            flex items-center gap-2
                            px-4
                            border-r border-neutral-700
                            cursor-pointer
                            ${activeFile?.id === file.id
                                ? "bg-[#1e1e1e] text-white"
                                : "bg-[#2d2d2d] text-neutral-400"
                            }
                        `}
                    >
                        <Icon size={14} />

                        <span className="text-sm">
                            {file.name}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCloseTab(file);
                                }}
                                className="ml-2 text-neutral-400 hover:text-white"
                            >
                                <X size={16} />
                            </button>
                        </span>
                    </div>
                );
            })}

        </div>
    );
};

export default Tabs;