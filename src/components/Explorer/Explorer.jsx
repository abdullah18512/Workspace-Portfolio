import React from 'react'
import ExplorerHeader from './ExplorerHeader'
import FileTree from './FileTree'

const Explorer = ({handleOpenFile, activeFile}) => {
  return (
    <div className='h-full overflow-y-auto bg-[var(--bg-sidebar)] transition-colors duration-200'>
      <ExplorerHeader/>
      <FileTree handleOpenFile={handleOpenFile} activeFile={activeFile}/>
    </div>
  )
}

export default Explorer
