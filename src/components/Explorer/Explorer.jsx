import React from 'react'
import ExplorerHeader from './ExplorerHeader'
import FileTree from './FileTree'

const Explorer = ({handleOpenFile, activeFile}) => {
  return (
    <div className='h-full overflow-y-auto bg-[#252526]'>
      <ExplorerHeader/>
      <FileTree handleOpenFile={handleOpenFile} activeFile={activeFile}/>
    </div>
  )
}

export default Explorer
