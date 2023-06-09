import { useEffect, useRef, useState } from "react";
import "./home.css";
import RV from "../Assets/myImg.jpeg";
import { useNavigate } from "react-router-dom";

function Home({ setStyle, setPages }) {
  const navigate = useNavigate();

  const animate = useRef({ marginTop: "100vh", opacity: "0" });

  useEffect(() => {
    const handleTimeout = () => {
      setTimeout(() => {
        setStyle(animate.current);
      }, 100);
    };
    window.onloadeddata = handleTimeout();
  }, [setStyle, animate]);

  const [roleArray, setRoleArray] = useState([
    "MERN Stack Developer👀",
    "Code Experimentor🧪",
    "Full Stack Developer👩‍💻",
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentArray = [...roleArray];
      const firstElement = currentArray.shift();
      currentArray.push(firstElement);
      setRoleArray(currentArray);
    }, 3500);

    return () => clearTimeout(timer);
  }, [roleArray]);

  const handleClick = () => {
    const pages = ["/", "/Experience", "/Skills", "/Projects", "/Contact-me"];
    setPages(pages);
    setStyle({ marginTop: "0vh", opacity: "1" });
    return setTimeout(() => {
      navigate(pages[pages.length - 1]);
    }, 820);
  };

  return (
    <div id="home">
      <div className="titleAndImage">
        <div className="image">
          {/* <RVLogo className="myImage"/> */}
          <img className="myImage" loading="eager" src={RV} alt="RV"></img>
        </div>
        <div className="title">
          <h1>Hiii👋,</h1>
          <h1>
            I'm<span>{"<"}</span>
            <span className="name">S</span>
            <span className="name">o</span>
            <span className="name">w</span>
            <span className="name">m</span>
            <span className="name">y</span>
            <span className="name">a</span>
            <span className="name"> </span>
            <span className="name">K</span>
            <span className="name">r</span>
            <span className="name">i</span>
            <span className="name">s</span>
            <span className="name">h</span>
            <span className="name">n</span>
            <span className="name">a</span>
            <span className="name">n</span>
            <span>{"/>"}</span>
          </h1>
          <p className="role">{roleArray[0]}</p>

          <div className="About">
            <h2>
              <span></span>About Me<span></span>
            </h2>
            <p></p>I am a passionate Full Stack Developer👩‍💻 having an experience
            of building web applications with MERN Stack and someother cool
            libraries😎 and frameworks. <span></span>
            <br></br>
            <br></br>
            Developing highly interactive Frontend/Userinterfaces for web
            applications🤩 <span></span>Ability to translate business
            requirements into innovative software solutions😎 <span></span>
            <div>
              <br></br>
              <br></br>
              <button onClick={handleClick} title="contact">
                Contact Me🤵
              </button>
            </div>
          </div>
          {/* <p className="navInfo">
                            {"<-------------Feel Free to use Nav bar and 🏹 keys"}
                        </p> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
