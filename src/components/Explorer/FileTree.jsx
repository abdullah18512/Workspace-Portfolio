import explorerItems from "../../data/explorerItems";
import FileItem from "./FileItem";

const rootFolder = explorerItems[0];


const FileTree = ({ handleOpenFile, activeFile, contextMenu, setContextMenu, handleDeleteFile, items}) => {
    return (
        <div >
            {items.map((item) => (
                <FileItem
                    key={item.id}
                    item={item}
                    handleOpenFile={handleOpenFile}
                    activeFile = {activeFile}
                    contextMenu = {contextMenu}
                    setContextMenu = {setContextMenu}
                    handleDeleteFile = {handleDeleteFile}
                    level={0+1}
                />
            ))}
        </div>
    )
}

export default FileTree;