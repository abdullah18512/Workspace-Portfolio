import Tabs from "../Tabs/Tabs"
import ReactMarkdown from 'react-markdown'

const Editor = ({ activeFile, openFile, handleSwitchTab, handleCloseTab }) => {
    return (
        <div className="flex flex-col flex-1 h-full min-h-0">
            <Tabs
                activeFile={activeFile}
                openFile={openFile}
                handleSwitchTab={handleSwitchTab}
                handleCloseTab={handleCloseTab}
            />

            <div className="flex-1 flex justify-center items-center flex-col gap-4 p-6 min-h-0">
                {!activeFile ?
                    (
                        <div>
                            <h1 className="font-bold text-3xl text-center text-white">
                                Welcome to Abdullah's Workspace.
                            </h1>

                            <p className="text-white">A portfolo disguided as a code editor.</p>
                            <p className=" text-white">Open a file to start exploring</p>
                        </div>

                    )
                    :
                    (
                        <div className="w-full flex-1 overflow-y-auto px-6 py-4">
                            <div className="w-full flex-1 min-h-0 overflow-hidden">
                                {activeFile.type === "pdf" ? (
                                    <iframe
                                        src={activeFile.content}
                                        className="w-full h-[calc(100vh-10rem)] rounded-none border-none"
                                        title={activeFile.name}
                                    />
                                ) : activeFile.type === "json" ? (
                                    <pre className="text-[#9cdcfe] text-sm font-mono leading-relaxed">
                                        {activeFile.content}
                                    </pre>
                                ) : activeFile.type === "markdown" ? (
                                    <div className="prose prose-invert max-w-none">
                                        <ReactMarkdown>
                                            {activeFile.content}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-[#6e7681] text-sm">Unsupported file type</p>
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
