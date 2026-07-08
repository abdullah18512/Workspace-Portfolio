import explorerItems from "../../data/explorerItems";
import FileItem from "./FileItem";

const FileTree = ({setActiveFile}) => {
    return (
        <div >
            {
                explorerItems.map((item) => (
                    <FileItem
                        key = {item.id}
                        item = {item}
                        setActiveFile = {setActiveFile}
                    />
                ))
            }
        </div>
    )
}

export default FileTree;