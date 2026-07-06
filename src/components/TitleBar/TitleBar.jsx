const TitleBar = () => {
    const buttonStyle =
        "w-10 h-full flex items-center justify-center text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors";
    return (

        <header className="flex items-center h-10 px-4 bg-[#181818]">
            <div className="flex items-center cursor-default gap-1">
                <span className="font-semibold text-blue-400">{"</>"}</span>
                <span className="font-bold text-white ">workspace</span>
            </div>
            <div className="flex-1">

            </div>
            <div className="flex items-center gap-5">
                <div className="flex gap-3 text-white ">
                    {/* Navigation */}
                    <span>Github</span>
                    <span>Resume</span>
                    <span>🌒</span>
                </div>

                <div className="flex gap-1">
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
