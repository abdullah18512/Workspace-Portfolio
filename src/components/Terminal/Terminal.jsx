import { useState } from "react";

const Terminal = ({ onClose }) => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);

    const handleCommand = (e) => {
        if (e.key !== "Enter") return;
        if (!input.trim()) return;

        const command = input.trim().toLowerCase();
        let output = "";

        if (command === "help") {
            output = `Available commands:
  show linkedin  - display LinkedIn profile
  show github    - display GitHub profile
  show resume    - display resume link
  show contact   - display email
  clear          - clear terminal`;
        } else if (command === "clear") {
            setHistory([]);
            setInput("");
            return;
        } else {
            output = `command not found: ${command}. Type 'help' for available commands.`;
        }

        setHistory([...history, { command, output }]);
        setInput("");
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-1 bg-[#252526] border-b border-neutral-700">
                <span className="text-[#cccccc] text-[13px]">Terminal</span>
                <button
                    onClick={onClose}
                    className="text-[#cccccc] hover:text-white text-lg leading-none"
                >
                    ×
                </button>
            </div>
            <div className="flex-1 p-4 text-[#cccccc] text-[13px] font-mono overflow-y-auto">
                {/* command history will render here */}
                {history.map((entry, index) => (
                    <div key={index} className="mb-2">
                        <div><span className="text-green-400">$ </span>{entry.command}</div>
                        <div className="text-[#cccccc] whitespace-pre">{entry.output}</div>
                    </div>
                ))}
            </div>
            <div className="flex items-center px-4 py-2 border-t border-neutral-700">
                <span className="text-green-400 mr-2">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent text-[#cccccc] text-[13px] font-mono outline-none"
                    placeholder="type 'help' to see available commands"
                />
            </div>
        </div>
    );
};

export default Terminal;