import React from 'react'
import ExplorerHeader from './ExplorerHeader'
import FileTree from './FileTree'

const Explorer = ({setActiveFile}) => {
  return (
    <div>
      <ExplorerHeader/>
      <FileTree setActiveFile={setActiveFile}/>
    </div>
  )
}

export default Explorer
