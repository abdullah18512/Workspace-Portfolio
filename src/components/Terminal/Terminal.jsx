import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Terminal = ({ onClose }) => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        {
            command: " ",
            output: `Hey twin!\nType 'help' to see available commands✌️`
        }
    ]);


    const handleCommand = (e) => {
        if (e.key !== "Enter") return;
        if (!input.trim()) return;

        const command = input.trim().toLowerCase();
        let output = "";

        if (command === "help") {
            if (command === "help") {
                output = `Available commands:
  show linkedin  - display LinkedIn profile
  show github    - display GitHub profile
  show resume    - display resume link
  show contact   - display email
  show projects  - how to view projects
  clear          - clear terminal`;
            }
        } else if (command === "show linkedin") {
            output = "linkedin";
        } else if (command === "show github") {
            output = "github";
        } else if (command === "show resume") {
            output = "resume";
        } else if (command === "show contact") {
            output = "contact";
        } else if (command === "show projects") {
            output = "projects";
        }
        else if (command === "clear") {
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
                        <div>
                            <span className="text-green-400">$</span>
                            <span className="text-cyan-500">{entry.command}</span>
                        </div>
                        {entry.output === "linkedin" ? (
                            <a href="https://www.linkedin.com/in/muhammad-abdullah-nadeem-554216379" target="_blank" rel="noreferrer">
                                <TypeAnimation
                                    sequence={["linkedin → www.linkedin.com/in/muhammad-abdullah-nadeem-554216379"]}
                                    speed={80}
                                    className="text-[#9cdcfe] hover:underline cursor-pointer"
                                />
                            </a>
                        ) : entry.output === "github" ? (
                            <a href="https://github.com/abdullah18512" target="_blank" rel="noreferrer">
                                <TypeAnimation
                                    sequence={["github → https://github.com/abdullah18512"]}
                                    speed={80}
                                    className="text-[#9cdcfe] hover:underline cursor-pointer"
                                />
                            </a>
                        ) : entry.output === "resume" ? (
                            <a href="/resume.pdf" target="_blank" rel="noreferrer">
                                <TypeAnimation
                                    sequence={["resume → /resume.pdf (click to open)"]}
                                    speed={80}
                                    className="text-[#9cdcfe] hover:underline cursor-pointer"
                                />
                            </a>
                        ) : entry.output === "contact" ? (
                            <a href="mailto:abdvl.n18@gmail.com">
                                <TypeAnimation
                                    sequence={["contact → abdvl.n18@gmail.com"]}
                                    speed={80}
                                    className="text-[#9cdcfe] hover:underline cursor-pointer"
                                />
                            </a>
                        )
                            : entry.output === "projects" ? (
                                <div className="text-[#9cdcfe]">
                                    projects → Open the 'Projects' folder in the Explorer to see all projects.
                                </div>
                            ) :
                                (
                                    <div className="text-[#cccccc] whitespace-pre">{entry.output}</div>
                                )}
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