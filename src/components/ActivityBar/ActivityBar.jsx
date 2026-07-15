import { Blocks, Folder, GitBranch, Play, Search, Settings, User } from "lucide-react"

const ActivityBar = ({ activeTab, setActiveTab }) => {
    const iconStyle = "transition-colors duration-150 size-[22px]";

    const renderTabButton = (tabName, Icon, tooltip) => {
        const isActive = activeTab === tabName;
        return (
            <button
                onClick={() => setActiveTab(tabName)}
                className="relative w-full flex items-center justify-center py-1.5 cursor-pointer group"
                title={tooltip}
            >
                {/* VS Code active bar indicator */}
                <div
                    className={`absolute left-0 w-[2px] h-7 rounded-r bg-[#007acc] transition-all duration-150 ${
                        isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-50"
                    }`}
                />
                <Icon
                    className={`${iconStyle} ${
                        isActive ? "text-[var(--text-main)]" : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                    }`}
                />
            </button>
        );
    };

    return (
        <div className="h-full flex flex-col justify-between items-center py-2 select-none w-full">
            <div className="flex flex-col gap-3 w-full items-center">
                {/* TopIcons  */}
                {renderTabButton("explorer", Folder, "Explorer")}
                {renderTabButton("search", Search, "Search")}
                
                {/* Static/Placeholder Icons */}
                <div className="w-full flex justify-center py-1.5 opacity-40 cursor-not-allowed" title="Source Control (Disabled)">
                    <GitBranch className="text-[var(--text-muted)] size-[22px]" />
                </div>
                <div className="w-full flex justify-center py-1.5 opacity-40 cursor-not-allowed" title="Run and Debug (Disabled)">
                    <Play className="text-[var(--text-muted)] size-[22px]" />
                </div>
                <div className="w-full flex justify-center py-1.5 opacity-40 cursor-not-allowed" title="Extensions (Disabled)">
                    <Blocks className="text-[var(--text-muted)] size-[22px]" />
                </div>
            </div>

            <div className="flex flex-col gap-3 w-full items-center">
                {/* BottomIcons  */}
                <div className="w-full flex justify-center py-1.5 opacity-40 cursor-not-allowed" title="Settings">
                    <Settings className="text-[var(--text-muted)] size-[22px]" />
                </div>
                <div className="w-full flex justify-center py-1.5 opacity-40 cursor-not-allowed" title="Accounts">
                    <User className="text-[var(--text-muted)] size-[22px]" />
                </div>
            </div>
        </div>
    )
}

export default ActivityBar
