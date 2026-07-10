import explorerItems from "../../data/explorerItems";
import FileItem from "./FileItem";

const rootFolder = explorerItems[0];

const FileTree = ({handleOpenFile}) => {
    return (
        <div >
            <FileItem
                item={rootFolder}
                handleOpenFile={handleOpenFile}
            />

            {rootFolder.children.map((item)=> (
                <FileItem
                    key={item.id}
                    item={item}
                    handleOpenFile={handleOpenFile}
                />
            ))}
        </div>
    )
}

export default FileTree;