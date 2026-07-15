import { useState, useMemo } from "react";
import { Search, FileText, File, Braces, Folder, ChevronDown, ChevronRight, X } from "lucide-react";
import explorerItems from "../../data/explorerItems";

const fileIcons = {
  markdown: FileText,
  pdf: File,
  folder: Folder,
  json: Braces
};

// Traverse explorerItems to extract flat list of files with paths
const getAllFiles = (items, currentPath = "") => {
  let files = [];
  items.forEach(item => {
    const itemPath = currentPath ? `${currentPath}/${item.name}` : item.name;
    if (item.type === "folder") {
      if (item.children) {
        files = [...files, ...getAllFiles(item.children, itemPath)];
      }
    } else {
      files.push({
        ...item,
        path: itemPath
      });
    }
  });
  return files;
};

// Highlighter helper
const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) return <span>{text}</span>;
  // Escape regex special chars
  const escapedHighlight = highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedHighlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-[#e5c07b]/40 text-[var(--text-main)] rounded-[2px] px-0.5 font-semibold">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

const SearchPanel = ({ handleOpenFile }) => {
  const [query, setQuery] = useState("");
  const [expandedFiles, setExpandedFiles] = useState({});

  const allFiles = useMemo(() => getAllFiles(explorerItems), []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    const results = [];

    allFiles.forEach(file => {
      const fileMatches = [];
      const fileNameMatch = file.name.toLowerCase().includes(lowerQuery);

      if (file.content && typeof file.content === "string") {
        const lines = file.content.split("\n");
        lines.forEach((line, index) => {
          if (line.toLowerCase().includes(lowerQuery)) {
            fileMatches.push({
              lineNumber: index + 1,
              lineContent: line.trim()
            });
          }
        });
      }

      if (fileNameMatch || fileMatches.length > 0) {
        results.push({
          file,
          fileNameMatch,
          matches: fileMatches
        });
      }
    });

    return results;
  }, [query, allFiles]);

  const toggleFileExpand = (fileId) => {
    setExpandedFiles(prev => ({
      ...prev,
      [fileId]: !prev[fileId]
    }));
  };

  const handleClear = () => {
    setQuery("");
  };

  // Helper to count total match lines found
  const totalMatchesCount = useMemo(() => {
    return searchResults.reduce((acc, curr) => acc + (curr.matches.length || 1), 0);
  }, [searchResults]);

  return (
    <div className="h-full flex flex-col bg-[var(--bg-sidebar)] text-[var(--text-main)] select-none">
      {/* Header */}
      <div className="px-4 py-2 border-b border-[var(--border-color)]">
        <h2 className="text-[var(--text-subtle)] text-[11px] font-bold tracking-wider uppercase mb-2">Search</h2>
      </div>

      {/* Input container */}
      <div className="p-3 flex flex-col gap-2">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search files or contents..."
            className="w-full bg-[var(--bg-app)] text-[var(--text-main)] text-[13px] pl-2 pr-8 py-1.5 rounded border border-[var(--border-color)] outline-none focus:border-[#007acc] transition-colors"
          />
          {query ? (
            <button
              onClick={handleClear}
              className="absolute right-2 text-[var(--text-muted)] hover:text-[var(--text-main)] p-0.5 rounded cursor-pointer transition-colors"
            >
              <X size={14} />
            </button>
          ) : (
            <Search size={14} className="absolute right-2.5 text-[var(--text-subtle)]" />
          )}
        </div>

        {query.trim() && (
          <div className="text-[11px] text-[var(--text-subtle)]">
            {searchResults.length === 0 ? (
              <span>No results found</span>
            ) : (
              <span>
                Found {totalMatchesCount} result{totalMatchesCount !== 1 && 's'} in {searchResults.length} file{searchResults.length !== 1 && 's'}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results List */}
      <div className="flex-1 overflow-y-auto px-2">
        {searchResults.map(({ file, matches }) => {
          const Icon = fileIcons[file.type] || File;
          const isExpanded = expandedFiles[file.id] !== false; // expanded by default

          return (
            <div key={file.id} className="mb-2">
              {/* File Header Row */}
              <div
                onClick={() => toggleFileExpand(file.id)}
                className="flex items-center gap-1.5 px-1.5 py-1 hover:bg-[var(--bg-item-hover)] rounded cursor-pointer text-[13px] transition-colors"
              >
                {matches.length > 0 ? (
                  isExpanded ? <ChevronDown size={14} className="text-[var(--text-subtle)]" /> : <ChevronRight size={14} className="text-[var(--text-subtle)]" />
                ) : (
                  <span className="w-3.5" />
                )}
                <Icon size={15} className="shrink-0 text-[var(--text-muted)]" />
                <span className="font-semibold truncate flex-1 text-[var(--text-main)]">
                  <HighlightText text={file.name} highlight={query} />
                </span>
                <span className="text-[10px] text-[var(--text-subtle)] px-1 bg-[var(--bg-item-hover)] rounded border border-[var(--border-color)]">
                  {matches.length || "name"}
                </span>
              </div>

              {/* Matching lines inside the file */}
              {isExpanded && matches.length > 0 && (
                <div className="pl-6 flex flex-col gap-0.5 mt-0.5">
                  {matches.map((match, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleOpenFile(file)}
                      className="flex items-start gap-2 py-0.75 px-1.5 rounded hover:bg-[var(--bg-item-hover)] cursor-pointer text-[12px] font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
                    >
                      <span className="text-[var(--text-subtle)] text-[10px] min-w-[16px] text-right mt-0.5">
                        {match.lineNumber}
                      </span>
                      <span className="truncate flex-1">
                        <HighlightText text={match.lineContent} highlight={query} />
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPanel;
