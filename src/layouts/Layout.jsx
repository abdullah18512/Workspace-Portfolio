import ActivityBar from "../components/ActivityBar/ActivityBar";
import Explorer from "../components/Explorer/Explorer";
import TitleBar from "../components/TitleBar/TitleBar";

function Layout() {
  return (
    <div className="h-screen w-screen bg-[#1e1e1e] flex flex-col">
      {/* Title Bar */}
      <TitleBar />

      {/* Main Content */}
      <div className="flex flex-1">

        <div className="w-12 h-full bg-[#181818] border-r border-neutral-700">
          {/* Activity Bar */}
          <ActivityBar />
        </div>

        {/* Explorer */}
        <div className="w-64 bg-[#252526] border-r border-neutral-700">
          <Explorer/>
        </div>

        {/* Editor */}
        <div className="flex-1 bg-[#1e1e1e]">
          Editor
        </div>
      </div>

      {/* Terminal */}
      <div className="h-48 bg-[#181818] border-t border-neutral-700">
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