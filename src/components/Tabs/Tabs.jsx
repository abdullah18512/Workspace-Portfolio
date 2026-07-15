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
        <div className="flex h-10 bg-[var(--bg-sidebar)] border-b border-[var(--border-color)] transition-colors duration-200">

            {openFile.map((file) => {

                const Icon = fileIcons[file.type];

                return (
                    <div
                        key={file.id}
                        onClick={() => handleSwitchTab(file)}
                        className={`
                            
                            flex items-center gap-2
                            px-4
                            border-r border-[var(--border-color)]
                            cursor-pointer
                            transition-colors duration-150
                            ${activeFile?.id === file.id
                                ? "bg-[var(--bg-tab-active)] text-[var(--text-main)]"
                                : "bg-[var(--bg-tab-inactive)] text-[var(--text-muted)] hover:bg-[var(--bg-item-hover)] hover:text-[var(--text-main)]"
                            }
                        `}
                    >
                        <Icon size={14} />

                        <span className="text-sm flex items-center gap-2">
                            {file.name}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCloseTab(file);
                                }}
                                className="ml-1 text-[var(--text-subtle)] hover:text-[var(--text-main)] p-0.5 rounded hover:bg-[var(--bg-item-hover)] transition-colors"
                            >
                                <X size={13} />
                            </button>
                        </span>
                    </div>
                );
            })}

        </div>
    );
};

export default Tabs;