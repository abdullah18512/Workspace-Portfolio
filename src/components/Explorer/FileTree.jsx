import explorerItems from "../../data/explorerItems";
import FileItem from "./FileItem";

const FileTree = ({handleOpenFile}) => {
    return (
        <div >
            {
                explorerItems.map((item) => (
                    <FileItem
                        key = {item.id}
                        item = {item}
                        handleOpenFile = {handleOpenFile}
                    />
                ))
            }
        </div>
    )
}

export default FileTree;