import readme from "../content/README.md?raw";
import about from "../content/About.md?raw";

const explorerItems = [
  {
    id: 1,
    name: "Portfolio",
    type: "folder",
    children: [
      {
        id: 1,
        name: "README.md",
        type: "markdown",
        content: readme
      },
      {
        id: 2,
        name: "About.md",
        type: "markdown",
        content: about
      },
      {
        id: 3,
        name: "Resume.pdf",
        type: "pdf",
        content: '...'
      },
      {
        id: 4,
        name: "Projects",
        type: "folder",
        children: []
      },
      {
        id: 5,
        name: "Contact.json",
        type: "json",
        content: '...'
      },
    ]
  }
];

export default explorerItems;