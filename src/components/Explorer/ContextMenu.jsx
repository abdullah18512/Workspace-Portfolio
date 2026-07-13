import React, { useEffect } from 'react'

function ContextMenu({x, y, item, onClose}) {

    useEffect(()=>{
        const handleClose = () => onClose();
        window.addEventListener("click", handleClose);
        return () =>window.removeEventListener("click", handleClose);
    }, []);
    return (
        <div
            style={{ top: y, left: x }}
            className="fixed z-50 bg-[#252526] border border-[#454545] shadow-lg text-[#cccccc] text-[13px] w-48"
        >
            <ul>
                <li className="px-4 py-2 hover:bg-[#094771] cursor-pointer">Rename</li>
                <li className="px-4 py-2 hover:bg-[#094771] cursor-pointer">Delete</li>
                <li className="px-4 py-2 hover:bg-[#094771] cursor-pointer">New File</li>
                <li className="px-4 py-2 hover:bg-[#094771] cursor-pointer">New Folder</li>
            </ul>
        </div>
    )
}

export default ContextMenu
