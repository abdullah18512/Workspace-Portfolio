import { Blocks, Folder, GitBranch, Play, Search, Settings, User } from "lucide-react"

const ActivityBar = () => {
    const iconStyle = "cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-150";

    return (
        <div className="h-full flex flex-col justify-between items-center py-4 select-none">
            <div className="flex flex-col gap-6">
                {/* TopIcons  */}
                <Folder className={iconStyle} size={22} />
                <Search className={iconStyle} size={22} />
                <GitBranch className={iconStyle} size={22} />
                <Play className={iconStyle} size={22} />
                <Blocks className={iconStyle} size={22} />
            </div>

            <div className="flex flex-col gap-6">
                {/* BottomIcons  */}
                <Settings className={iconStyle} size={22} />
                <User className={iconStyle} size={22} />
            </div>
        </div>
    )
}

export default ActivityBar
