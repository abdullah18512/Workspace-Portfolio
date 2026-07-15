import readme from "../content/README.md?raw";
import about from "../content/About.md?raw";
import resume from "../../public/resume.pdf";
import workspacePortfolio from "../content/WorkspacePortfolio.md?raw";
import calculatorApp from "../content/CalculatorApp.md?raw";
import staticWebsite from "../content/BankingApp.md?raw";
import imageGallery from "../content/ImageGallery.md?raw";
import hrPayroll from "../content/HRandPayroll Sys.md?raw";
import supermarketBillingSys from "../content/SupermarketBillingSys.md?raw";
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
            content: workspacePortfolio
          },
          {
            id: 7,
            name: "Calculator App.md",
            type: "markdown",
            content: calculatorApp
          },
          {
            id: 8,
            name: "Static Website.md",
            type: "markdown",
            content: staticWebsite
          },
          {
            id: 9,
            name: "Image Gallery.md",
            type: "markdown",
            content: imageGallery
          },
          {
            id: 10,
            name: "HR and Payroll Sys.md",
            type: "markdown",
            content: hrPayroll
          },
          {
            id: 11,
            name: "Supermarket Billing Sys.md",
            type: "markdown",
            content: supermarketBillingSys
          },
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
       {
        id: 12,
        name: "Project Links.json",
        type: "json",
        content: JSON.stringify({
          CodeAlpha_Portfolio : "code-alpha-portfolio-nine.vercel.app",
          CodeAlpha_Image_Gallery : "" ,
          CodeAlpha_Calculator : "code-alpha-calculator-sand.vercel.app" ,
          Banking_App_UI : "static-site-teal-five.vercel.app"
        }, null , 2)
      }
    ]
  }
];

export default explorerItems;