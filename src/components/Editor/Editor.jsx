const Editor = ({activeFile}) => {
  if(!activeFile){
      return (
        <div className="text-white flex justify-center items-center text flex-col gap-4">
            <h1 className="font-bold text-3xl text-center">
                Welcome to Abdullah's Workspace.
            </h1>
            <p>
                A portfolio disguised as a code editor.
            </p>
            <p>
                Open a file to start exploring.
            </p>
        </div>
    )
  }
  return(
    <div className="text-white p-6">
        <h1>{activeFile.name}</h1>
    </div>
  )
}

export default Editor
