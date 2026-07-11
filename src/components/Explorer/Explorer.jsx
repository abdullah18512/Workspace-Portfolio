import React from 'react'
import ExplorerHeader from './ExplorerHeader'
import FileTree from './FileTree'

const Explorer = ({handleOpenFile, activeFile}) => {
  return (
    <div>
      <ExplorerHeader/>
      <FileTree handleOpenFile={handleOpenFile} activeFile={activeFile}/>
    </div>
  )
}

export default Explorer
