import { Blocks, Folder, GitBranch, Play, Search, Settings, User } from "lucide-react"

const ActivityBar = () => {
    return (
        <div className="h-full flex flex-col justify-between items-center text-gray-400">
            <div className="flex flex-col gap-4">
                {/* TopIcons  */}
                <Folder />
                <Search />
                <GitBranch />
                <Play />
                <Blocks />

            </div>

            <div className="flex flex-col gap-4">
                {/* BottomIcons  */}
                <Settings />
                <User />
            </div>
        </div>
    )
}

export default ActivityBar
