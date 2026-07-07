import explorerItems from "../../data/explorerItems";
import FileItem from "./FileItem";

const FileTree = () => {
    return (
        <div >
            {
                explorerItems.map((item) => (
                    <FileItem
                        key = {item.id}
                        item = {item}
                    />
                ))
            }
        </div>
    )
}

export default FileTree;