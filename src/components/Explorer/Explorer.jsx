import React from 'react'
import ExplorerHeader from './ExplorerHeader'
import FileTree from './FileTree'

const Explorer = ({handleOpenFile}) => {
  return (
    <div>
      <ExplorerHeader/>
      <FileTree handleOpenFile={handleOpenFile}/>
    </div>
  )
}

export default Explorer
