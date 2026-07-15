import { useState, useEffect, useRef, useCallback } from "react";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import Editor from "../components/Editor/Editor";
import Explorer from "../components/Explorer/Explorer";
import TitleBar from "../components/TitleBar/TitleBar";
import Terminal from "../components/Terminal/Terminal";


function Layout() {
  const [activeFile, setActiveFile] = useState(null);
  const [openFile, setOpenFile] = useState([]);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(192); // 12rem = 192px (h-48)
  const isDraggingRef = useRef(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    // Calculate new height: distance from the bottom of the viewport
    // minus the status bar height (24px)
    const newHeight = window.innerHeight - e.clientY - 24;
    const minHeight = 80;
    const maxHeight = window.innerHeight * 0.8;
    setTerminalHeight(Math.max(minHeight, Math.min(maxHeight, newHeight)));
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleResizeStart = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    document.body.style.cursor = "ns-resize";
    document.body.style.userSelect = "none";
  };

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
    <div className="h-screen w-screen bg-[var(--bg-app)] text-[var(--text-main)] transition-colors duration-200 flex flex-col">
      {/* Title Bar */}
      <TitleBar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />

      {/* Main Content */}
      <div className="flex flex-1 min-h-0">

        <div className="w-12 h-full bg-[var(--bg-activitybar)] border-r border-[var(--border-color)] transition-colors duration-200">
          {/* Activity Bar */}
          <ActivityBar />
        </div>

        {/* Explorer */}
        <div className="w-64 bg-[var(--bg-sidebar)] border-r border-[var(--border-color)] transition-colors duration-200">
          <Explorer
            handleOpenFile={handleOpenFile}
            activeFile={activeFile}
          />
        </div>

        {/* Editor */}
        <div className="flex flex-1 min-h-0 bg-[var(--bg-app)] transition-colors duration-200">
          <Editor
            activeFile={activeFile}
            openFile={openFile}
            handleSwitchTab={handleSwitchTab}
            handleCloseTab={handleCloseTab}
            theme={theme}
          />
        </div>
      </div>

      {/* Terminal */}
      {isTerminalOpen && (
        <div
          className="bg-[var(--bg-terminal)] border-t border-[var(--border-color)] transition-colors duration-200 flex flex-col"
          style={{ height: terminalHeight }}
        >
          {/* Resize Handle */}
          <div
            onMouseDown={handleResizeStart}
            className="h-[4px] cursor-ns-resize hover:bg-[#007acc] transition-colors duration-150 shrink-0"
          />
          <Terminal onClose={() => setIsTerminalOpen(false)} />
        </div>
      )}

      {/* Status Bar */}
      <div className="h-6 bg-[var(--bg-statusbar)] transition-colors duration-200 flex items-center px-3 gap-4">
        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="text-white text-[12px] hover:bg-[#1f8ad2] px-2 py-0.5 rounded"
        >
          Terminal
        </button>
      </div>
    </div>
  );
}

export default Layout;