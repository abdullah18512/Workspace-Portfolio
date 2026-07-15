const TitleBar = ({ theme, onToggleTheme }) => {
    const buttonStyle =
        "w-10 h-full flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--bg-item-hover)] hover:text-[var(--text-main)] transition-colors duration-150";
    return (

        <header className="flex items-center h-10 px-4 bg-[var(--bg-titlebar)] border-b border-[var(--border-color)] transition-colors duration-200">
            <div className="flex items-center cursor-default gap-1">
                <span className="font-semibold text-blue-500">{"</>"}</span>
                <span className="font-bold text-[var(--text-main)]">workspace</span>
            </div>
            <div className="flex-1">

            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-4 text-[var(--text-muted)] text-sm">
                    {/* Navigation */}
                    <a
                        href="https://github.com/abdullah18512"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
                    >
                        Github
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
                    >
                        Resume
                    </a>
                    <button
                        onClick={onToggleTheme}
                        className="p-1 rounded-md hover:bg-[var(--bg-item-hover)] text-lg leading-none transition-all duration-150 active:scale-95 cursor-pointer"
                        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {theme === "dark" ? "🌒" : "☀️"}
                    </button>
                </div>

                <div className="flex gap-1 h-10 py-1">
                    {/* WindowControls  */}
                    <button className={buttonStyle}>—</button>
                    <button className={buttonStyle}>□</button>
                    <button className={buttonStyle}>✕</button>
                </div>
            </div>
        </header>

    )
}

export default TitleBar
