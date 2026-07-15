import Tabs from "../Tabs/Tabs"
import ReactMarkdown from 'react-markdown'

const Editor = ({ activeFile, openFile, handleSwitchTab, handleCloseTab, theme }) => {
    return (
        <div className="flex flex-col flex-1 h-full min-h-0">
            <Tabs
                activeFile={activeFile}
                openFile={openFile}
                handleSwitchTab={handleSwitchTab}
                handleCloseTab={handleCloseTab}
            />

            <div className="flex-1 flex justify-center items-center flex-col gap-4 p-6 min-h-0 bg-[var(--bg-app)] transition-colors duration-200">
                {!activeFile ?
                    (
                        <div className="select-none animate-fade-in">
                            <h1 className="font-bold text-3xl text-center text-[var(--text-main)]">
                                Welcome to Abdullah's Workspace
                            </h1>

                            <p className="text-[var(--text-muted)] text-center mt-2">A portfolio disguised as a code editor.</p>
                            <p className="text-[var(--text-subtle)] text-center mt-1 text-sm">Open a file from the explorer to start.</p>
                        </div>

                    )
                    :
                    (
                        <div className="w-full flex-1 overflow-y-auto px-6 py-4">
                            <div className="w-full flex-1 min-h-0 overflow-hidden">
                                {activeFile.type === "pdf" ? (
                                    <iframe
                                        src={activeFile.content}
                                        className="w-full h-[calc(100vh-10rem)] rounded-none border-none bg-white"
                                        title={activeFile.name}
                                    />
                                ) : activeFile.type === "json" ? (
                                    <pre className="text-[var(--text-accent)] text-sm font-mono leading-relaxed bg-[var(--bg-terminal)] p-4 rounded-md border border-[var(--border-color)] overflow-auto max-h-full">
                                        {activeFile.content}
                                    </pre>
                                ) : activeFile.type === "markdown" ? (
                                    <div className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
                                        <ReactMarkdown>
                                            {activeFile.content}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-[var(--text-subtle)] text-sm">Unsupported file type</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Editor
