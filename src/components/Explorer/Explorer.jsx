import React from 'react'
import ExplorerHeader from './ExplorerHeader'
import FileTree from './FileTree'

const Explorer = ({handleOpenFile, activeFile, contextMenu, setContextMenu}) => {
  return (
    <div className='h-full overflow-y-auto bg-[#252526]'>
      <ExplorerHeader/>
      <FileTree handleOpenFile={handleOpenFile} activeFile={activeFile} contextMenu={contextMenu} setContextMenu={setContextMenu} />
    </div>
  )
}

export default Explorer
