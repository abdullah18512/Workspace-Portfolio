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
        <div className="flex flex-col h-full bg-[var(--bg-terminal)] transition-colors duration-200">
            <div className="flex items-center justify-between px-4 py-1.5 bg-[var(--bg-sidebar)] border-b border-[var(--border-color)] transition-colors duration-200">
                <span className="text-[var(--text-muted)] text-[13px] font-semibold">Terminal</span>
                <button
                    onClick={onClose}
                    className="text-[var(--text-muted)] hover:text-[var(--text-main)] text-lg leading-none cursor-pointer p-0.5 hover:bg-[var(--bg-item-hover)] rounded transition-colors"
                >
                    ×
                </button>
            </div>
            <div className="flex-1 p-4 text-[var(--text-muted)] text-[13px] font-mono overflow-y-auto">
                {/* command history will render here */}
                {history.map((entry, index) => (
                    <div key={index} className="mb-2">
                        <div>
                            <span className="text-[var(--text-terminal-prompt)] mr-2">$</span>
                            <span className="text-[var(--text-terminal-command)] font-semibold">{entry.command}</span>
                        </div>
                        {entry.output === "linkedin" ? (
                            <a href="https://www.linkedin.com/in/muhammad-abdullah-nadeem-554216379" target="_blank" rel="noreferrer">
                                <TypeAnimation
                                    sequence={["linkedin → www.linkedin.com/in/muhammad-abdullah-nadeem-554216379"]}
                                    speed={80}
                                    className="text-[var(--text-accent)] hover:underline cursor-pointer"
                                />
                            </a>
                        ) : entry.output === "github" ? (
                            <a href="https://github.com/abdullah18512" target="_blank" rel="noreferrer">
                                <TypeAnimation
                                    sequence={["github → https://github.com/abdullah18512"]}
                                    speed={80}
                                    className="text-[var(--text-accent)] hover:underline cursor-pointer"
                                />
                            </a>
                        ) : entry.output === "resume" ? (
                            <a href="/resume.pdf" target="_blank" rel="noreferrer">
                                <TypeAnimation
                                    sequence={["resume → /resume.pdf (click to open)"]}
                                    speed={80}
                                    className="text-[var(--text-accent)] hover:underline cursor-pointer"
                                />
                            </a>
                        ) : entry.output === "contact" ? (
                            <a href="mailto:abdvl.n18@gmail.com">
                                <TypeAnimation
                                    sequence={["contact → abdvl.n18@gmail.com"]}
                                    speed={80}
                                    className="text-[var(--text-accent)] hover:underline cursor-pointer"
                                />
                            </a>
                        )
                            : entry.output === "projects" ? (
                                <div className="text-[var(--text-accent)]">
                                    projects → Open the 'Projects' folder in the Explorer to see all projects.
                                </div>
                            ) :
                                (
                                    <div className="text-[var(--text-muted)] whitespace-pre">{entry.output}</div>
                                )}
                    </div>
                ))}
            </div>
            <div className="flex items-center px-4 py-2 border-t border-[var(--border-color)] bg-[var(--bg-terminal)] transition-colors duration-200">
                <span className="text-[var(--text-terminal-prompt)] mr-2 select-none">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent text-[var(--text-main)] text-[13px] font-mono outline-none"
                    placeholder="type 'help' to see available commands"
                />
            </div>
        </div>
    );
};

export default Terminal;