import explorerItems from "../../data/explorerItems";
import FileItem from "./FileItem";

const rootFolder = explorerItems[0];

const FileTree = ({ handleOpenFile }) => {
    return (
        <div >
            {explorerItems.map((item) => (
                <FileItem
                    key={item.id}
                    item={item}
                    handleOpenFile={handleOpenFile}
                    level={0}
                />
            ))}
        </div>
    )
}

export default FileTree;