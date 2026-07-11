import { useState } from "react";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import Editor from "../components/Editor/Editor";
import Explorer from "../components/Explorer/Explorer";
import TitleBar from "../components/TitleBar/TitleBar";


function Layout() {
  const [activeFile, setActiveFile] = useState(null);
  const [openFile, setOpenFile] = useState([]);

  const handleOpenFile = (file) => {
    const alreadyOpen = openFile.some(
      (openFile) => openFile.id === file.id
    );

    if (!alreadyOpen) {
      setOpenFile([...openFile, file])
    }

    setActiveFile(file);
  };

  const handleSwitchTab = (file) => {
    setActiveFile(file);
  }

  const handleCloseTab = (file) => {
    const closingIndex = openFile.findIndex(
      (openFile) => openFile.id === file.id
    )

    const updatedOpenFiles = openFile.filter(
      (openFile) => openFile.id !== file.id
    );

    if (activeFile.id === file.id) {

      if (updatedOpenFiles.length === 0) {
        setActiveFile(null);

      } else if (closingIndex > 0) {
        setActiveFile(updatedOpenFiles[closingIndex - 1]);

      } else {
        setActiveFile(updatedOpenFiles[0]);
      }

    }

    setOpenFile(updatedOpenFiles);
  }

  return (
    <div className="h-screen w-screen bg-[#1e1e1e] flex flex-col">
      {/* Title Bar */}
      <TitleBar />

      {/* Main Content */}
      <div className="flex flex-1 min-h-0">

        <div className="w-12 h-full bg-[#181818] border-r border-neutral-700">
          {/* Activity Bar */}
          <ActivityBar />
        </div>

        {/* Explorer */}
        <div className="w-64 bg-[#252526] border-r border-neutral-700">
          <Explorer 
          handleOpenFile={handleOpenFile} 
          activeFile={activeFile}
          />
        </div>

        {/* Editor */}
        <div className="flex flex-1 min-h-0 bg-[#1e1e1e]">
          <Editor
            activeFile={activeFile}
            openFile={openFile}
            handleSwitchTab={handleSwitchTab}
            handleCloseTab={handleCloseTab}
          />
        </div>
      </div>

      {/* Terminal */}
      <div className="h-48 bg-[#181818] border-t border-neutral-700 text-white">
        Terminal
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc]">
        Status Bar
      </div>
    </div>
  );
}

export default Layout;