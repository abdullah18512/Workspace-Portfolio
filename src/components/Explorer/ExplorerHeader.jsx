import React from 'react'

const ExplorerHeader = () => {
  return (
    <div className='px-4 py-2 select-none border-b border-[var(--border-color)] transition-colors duration-200'>
      <h2 className='text-[var(--text-subtle)] text-[11px] font-bold tracking-wider uppercase mb-1.5'>Explorer</h2>
      <div className='text-[var(--text-main)] text-[11px] font-bold flex items-center gap-1 cursor-pointer'>
        <span className='text-[var(--text-subtle)] text-[9px]'>▼</span> PORTFOLIO
      </div>
    </div>
  )
}

export default ExplorerHeader
