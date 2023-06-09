import { useEffect, useRef, useState } from "react";
import "./projects.css";
import FLIPKARTCLONE from "../images/projectImages/Flipkart.jpg";
import ToDoList from "../images/projectImages/todo.jpg";
//import Calc from "../images/projectImages/Calc.webp";
import Emailapp from "../images/projectImages/email2.png";
//import Admin from "../images/projectImages/Admin.webp";
//import Security from "../images/projectImages/Security.webp";
//import Todo from "../images/projectImages/Todo.webp";
import PettyCash from "../images/projectImages/petty cash.png";

function Projects({ setStyle }) {
  const animate = useRef({
    marginTop: "100vh",
    opacity: "0",
    //  boxShadow:"-4vh -3.25vh 0vh 1.5vh rgb(207, 2, 2)"
  });

  const [stylePop, setStylePop] = useState({});

  const handleResize = () => {
    if (window.innerWidth <= 900) {
      setStylePop({ marginTop: "100vh" });
    } else {
      setStylePop({});
    }
  };
  const handleOpen = () => {
    if (window.innerWidth <= 900) {
      return setStylePop({ marginTop: "0vh" });
    }
  };
  const handleClose = (e) => {
    if (e.target.title === "showCase") {
      if (window.innerWidth <= 900) {
        return setStylePop({ marginTop: "100vh" });
      }
    }
  };

  useEffect(() => {
    const handleTimeOut = () => {
      setTimeout(() => {
        setStyle(animate.current);
      }, 100);
    };

    window.onloadeddata = handleTimeOut();

    if (window.innerWidth <= 900) {
      setStylePop({ marginTop: "100vh" });
    } else {
      setStylePop({});
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [setStyle, animate]);

  const onGoing = [
    [FLIPKARTCLONE, "FLIPKARTCLONE"],
    [Emailapp, "Emailapp"],
  ];
  const completed1 = [
    [PettyCash, "Petty Cash"],
    [ToDoList, "TO-DO List"],
  ];
  const completed2 = [];

  const flipkartclone = {
    head: "Flipkart Clone",
    underDev: true,
    skillsUsed: [
      "React",
      "MUI",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "PayTM payment integration",
    ],
    concepts: [
      "Ecommerce App built with Authentication, JWT, Authorization ,RestAPI-CRUD",
    ],
    site: "https://starlit-begonia-346dd5.netlify.app",
    src: [
      "https://github.com/Sowmya-Krish/flipkart-frontend",
      "https://github.com/Sowmya-Krish/Flipkart--Backend",
    ],
  };
  const EMAILAPP = {
    head: "Email App",
    underDev: true,
    skillsUsed: ["React", "MUI", "NodeJS", "MongoDB", "SMTP.JS", "yopmail"],
    concepts: [
      "We can compose a new e-mail, send real time emails with options of Inbox, Drafts, Starred options etc",
    ],
    site: "https://tranquil-basbousa-492899.netlify.app",
    src: [
      "https://github.com/Sowmya-Krish/Email-app-Frontend",
      "https://github.com/Sowmya-Krish/Email-app-backend",
    ],
  };
  const pettycash = {
    head: "Petty Cash",
    skillsUsed: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    concepts: [
      "App helps to simplify and enables you to keep track of your expenses in real time. Desired Outcomes.",
    ],
    site: "https://rococo-wisp-66ff4f.netlify.app/",
    src: [
      "https://github.com/Sowmya-Krish/PettyCash-Frontend",
      "https://github.com/Sowmya-Krish/PettyCash-Backend",
    ],
  };
  const todolist = {
    head: "TO-DO List",
    skillsUsed: ["React", "MUI", "NodeJS", "MongoDB", "JWT"],
    concepts: [
      "To-do list applications help us organize our list of tasks, manage our projects and keep us sane as we manage our day ahead",
    ],
    site: "https://neon-naiad-27a467.netlify.app/",
    src: [
      "https://github.com/Sowmya-Krish/TODO-frontend",
      "https://github.com/Sowmya-Krish/TODO-Backend",
    ],
  };
  const security = {
    head: "Authentication Flow",
    skillsUsed: ["React", "NodeJS", "ExpressJS", "MongoDB", "Postman"],
    concepts: [
      "Authentication",
      "JWT",
      "Authorization",
      "Hooks🪝",
      "RestAPI-CRUD",
    ],
    site: "https://authentication-work-by-rv.netlify.app/",
    src: [
      "https://github.com/VIGNESHWAR-RV/password-reset-ui",
      "https://github.com/VIGNESHWAR-RV/password-reset",
    ],
  };
  const admin = {
    head: "React Admin Panel",
    skillsUsed: ["React", "MUI"],
    concepts: ["Recharts(chart)", "Hooks🪝", "RestAPI-CRUD"],
    site: "https://sb-admin-2-using-context-by-rv.netlify.app/",
    src: "https://github.com/VIGNESHWAR-RV/sb-admin-2-with-context-api",
  };
  const todo = {
    head: "Todo-List",
    skillsUsed: ["React", "CSS"],
    concepts: ["Hooks🪝", "Components", "Conditional Rendering"],
    site: "https://todo-list-react-rv.netlify.app/",
    src: "https://github.com/VIGNESHWAR-RV/my-todolist",
  };
  const calc = {
    head: "Calculator",
    skillsUsed: ["HTML", "CSS", "Vanilla JS"],
    concepts: ["DOM-Manipulation", "Event Handling"],
    site: "https://calculator-by-rv.netlify.app/",
    src: "https://github.com/VIGNESHWAR-RV/CALCULATOR",
  };

  function Concepts({ index, skill }) {
    if (index % 2 === 1) {
      return (
        <>
          <span key={index}>{skill}</span>
          <br />
          <br />
        </>
      );
    } else {
      return <span key={index}>{skill}</span>;
    }
  }

  const [display, setDisplay] = useState(flipkartclone);
  const [selected, setSelected] = useState("FLIPKARTCLONE");

  const handleDisplay = (e) => {
    if (e.target.title === selected) {
      return;
    }
    setDisplay({});
    let toDisplay;
    if (e.target.title === "FLIPKARTCLONE") {
      toDisplay = flipkartclone;
    } else if (e.target.title === "Emailapp") {
      toDisplay = EMAILAPP;
    } else if (e.target.title === "Petty Cash") {
      toDisplay = pettycash;
    } else if (e.target.title === "Admin") {
      toDisplay = admin;
    } else if (e.target.title === "TO-DO List") {
      toDisplay = todolist;
    } else if (e.target.title === "Todo-List") {
      toDisplay = todo;
    } else if (e.target.title === "Calculator") {
      toDisplay = calc;
    } else if (e.target.title === "Security") {
      toDisplay = security;
    }
    setSelected(e.target.title);
    setTimeout(() => {
      setDisplay(toDisplay);
    }, 100);
  };

  return (
    <div id="projects">
      <div className="showCaseAndGrid">
        <div
          className="showCase"
          title="showCase"
          style={stylePop}
          onClick={handleClose}
        >
          <div className="show">
            <div className="projectInfo">
              {display.head !== undefined ? (
                <>
                  <h1>
                    {"< "}
                    {display.head}
                    {" />"}
                  </h1>
                  {display.underDev ? <h3></h3> : ""}
                  <div className="skillsUsed">
                    <h1>
                      {"<"}Skills Used{"/>"}
                    </h1>
                    {display.skillsUsed.map((skill, index) => (
                      <Concepts key={index} index={index} skill={skill} />
                    ))}
                  </div>
                  <div className="concepts">
                    <h1>
                      {"<"}Concept{"/>"}
                    </h1>
                    {display.concepts.map((skill, index) => (
                      <Concepts key={index} index={index} skill={skill} />
                    ))}
                  </div>
                  <div className="projectLinks">
                    <button>
                      <a href={display.site} rel="noreferrer" target="_blank">
                        Demo
                      </a>
                    </button>
                    <button>
                      <a
                        href={
                          display.src.length === 2
                            ? display.src[0]
                            : display.src
                        }
                        rel="noreferrer"
                        target="_blank"
                      >
                        {display.src.length === 2 ? "FE🎨" : "Source🗃️"}
                      </a>
                    </button>
                    {display.src.length === 2 ? (
                      <button>
                        <a
                          href={display.src[1]}
                          rel="noreferrer"
                          target="_blank"
                        >
                          BE🛠️
                        </a>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="grid">
          <h1 className="skillTitle">
            {"<"}Projects{"/>"}
          </h1>
          <h3 className="fullStack"></h3>
          <div className="onGoing">
            {onGoing.map((project, index) => (
              <img
                className="project"
                key={index}
                src={project[0]}
                alt={project[1]}
                title={project[1]}
                onClick={(e) => {
                  handleOpen();
                  handleDisplay(e);
                }}
                // onMouseEnter={handledisplay}
                loading="eager"
              ></img>
            ))}
          </div>
          <div className="completed1">
            {completed1.map((project, index) => (
              <img
                className="project"
                key={index}
                src={project[0]}
                alt={project[1]}
                title={project[1]}
                onClick={(e) => {
                  handleOpen();
                  handleDisplay(e);
                }}
                // onMouseEnter={handledisplay}
                loading="eager"
              ></img>
            ))}
          </div>
          <h1 className="fullStack"></h1>
          <div className="completed2">
            {completed2.map((project, index) => (
              <img
                className="project"
                key={index}
                src={project[0]}
                alt={project[1]}
                title={project[1]}
                onClick={(e) => {
                  handleOpen();
                  handleDisplay(e);
                }}
                // onMouseEnter={handleDisplay}
                loading="eager"
              ></img>
            ))}
          </div>
          <div className="space"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
