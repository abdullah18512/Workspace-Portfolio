import React from 'react'
import ExplorerHeader from './ExplorerHeader'
import FileTree from './FileTree'

const Explorer = ({handleOpenFile, activeFile, contextMenu, setContextMenu, handleDeleteFile, items}) => {
  return (
    <div className='h-full overflow-y-auto bg-[#252526]'>
      <ExplorerHeader/>
      <FileTree 
      handleOpenFile={handleOpenFile} 
      activeFile={activeFile} 
      contextMenu={contextMenu} 
      setContextMenu={setContextMenu} 
      handleDeleteFile = {handleDeleteFile}
      items = {items}
      />
    </div>
  )
}

export default Explorer
