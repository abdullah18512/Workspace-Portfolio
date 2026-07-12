import readme from "../content/README.md?raw";
import about from "../content/About.md?raw";
import resume from "../../public/resume.pdf"
const explorerItems = [
  {
    id: 0,
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
        content: '/resume.pdf'
      },
      {
        id: 4,
        name: "Projects",
        type: "folder",
        children: [
          {
            id: 6,
            name: "Workspace Portfolio.md",
            type: "markdown",
            content: "..."
          },
          {
            id: 7,
            name: "Calculator App.md",
            type: "markdown",
            content: "..."
          }
        ]
      },
      {
        id: 5,
        name: "Contact.json",
        type: "json",
        content: JSON.stringify({
          name: "Muhammad Abdullah Nadeem",
          email: "abdvl.n18@gmail.com",
          linkedin: "www.linkedin.com/in/muhammad-abdullah-nadeem-554216379",
          github: "https://github.com/abdullah18512"
        }, null , 2)
      },
    ]
  }
];

export default explorerItems;