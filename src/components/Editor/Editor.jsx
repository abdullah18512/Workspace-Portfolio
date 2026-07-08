import Tabs from "../Tabs/Tabs"
import ReactMarkdown from 'react-markdown'

const Editor = ({ activeFile }) => {
    return (
        <div>
            <Tabs activeFile={activeFile} />
            <div className="flex-1 flex justify-center items-center flex-col gap-4 p-6">
                {!activeFile ?
                    (
                        <>
                            <h1 className="font-bold text-3xl text-center text-white">
                                Welcome to Abdullah's Workspace.
                            </h1>

                            <p className="text-white">A portfolo disguided as a code editor.</p>
                            <p className=" text-white">Open a file to start exploring</p>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="w-full h-full overflow-auto prose prose-invert max-w-none">
                                <ReactMarkdown>
                                    {activeFile.content}
                                </ReactMarkdown>
                            </div>

                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Editor
