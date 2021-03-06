import React from "react";
import logo from "./logo.svg";
import "./App.css";
import githubImg from "./images/GitHub-Mark-64px.png";
import youtubeImg from "./images/icons8-play-button-50.png";
import emailImg from "./images/icons8-new-post-100.png";
import linkedInImg from "./images/icons8-linkedin-96.png";
import documentImg from "./images/icons8-new-document-90.png";

function App() {
  return (
    <div>
      <header class="header">
        <div class="header-text-box">
          <div class="header-primary-box">
            <span class="header-primary-text">Johnathan</span>
            <br />
            <span class="header-middle-text">Pruitt</span>
            <br />
            <span class="header-bottom-text">•Software Developer•</span>
            <br />
          </div>
          <a href="#aboutme" class="btn header-btn">
            Learn More
          </a>
        </div>
      </header>
      <div class="blank"></div>
      <div id="aboutme" class="about">
        <div class="about-left-column">
          <div class="about-img"></div>
          <div class="about-left-column-textbox">
            <div class="about-left-column-textbox-subtext">
              "I will not die until I achieve something.
            </div>
            <div class="about-left-column-textbox-subtext">
              Even though the ideal is high, <br />I never give in.
            </div>
            <div class="about-left-column-textbox-subtext">
              Therefore, I never die with regrets."
            </div>
            <div class="about-left-column-textbox-subtext">-Ikaruga</div>
          </div>
        </div>
        <div class="about-right-column">
          <div class="about-right-column-textbox">
            <br />
            <h1 class="shake-slow">"Hello, World!"</h1>
            <text>My name is Johnathan Pruitt.</text>
            <br />
            <br />
            <div class="about-right-column-subtext">
              I am a passionate software developer that is always striving to
              push their own boundaries of programming and is currently trying
              to find their next adventure.
            </div>
            <br />
            <div class="about-right-column-subtext">
              Mostly working with a React/Node.js stack, but also dabble in
              Python, C++, and Ruby.
              <br />
              W/ Experience with: REST, SCRUM, MySQL, SQLite, Sockets, and
              constantly learning more.
            </div>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="projects">
        <h1>Project Showcase</h1>
        <div class="projects-container">
          <div class="project project1">
            <img class="thumbnail1" />
            <div class="project-text">
              <h6>Good Samaritan</h6>
              <p>
                A real-time Q/A application where travelers are able to ask any
                question around the world, and only nearby local users are only
                able to answer their question
                <br />
              </p>
              <div class="sources-block">
                <a href="https://www.youtube.com/watch?v=Y6qF6vsMC04&feature=youtu.be">
                  <img class="youtube-icon" src={youtubeImg} />
                  <h5>Youtube Demo</h5>{" "}
                </a>
                <a href="https://github.com/Linxerz/good-samaritan">
                  <img class="github-icon-small" src={githubImg} />{" "}
                  <h5>Github</h5>
                </a>
              </div>
            </div>
          </div>
          <div class="project project2">
            <img class="thumbnail2" />
            <div class="project-text">
              <h6>Mars Weather App</h6>
              <p>
                A weather app where users are able to view the weather on Mars
                and Earth and see a comparison side-by-side.
                <br />
                <br />
                <br />
              </p>
              <div class="sources-block">
                <a href="https://youtu.be/Ih81c7z28Oo">
                  <img class="youtube-icon" src={youtubeImg} />
                  <h5>Youtube Demo</h5>{" "}
                </a>
                <a href="https://github.com/angeloxenakis/mars-weather-app">
                  <img class="github-icon-small" src={githubImg} />{" "}
                  <h5>Github</h5>
                </a>
              </div>
            </div>
          </div>
          <div class="project project3">
            <img class="thumbnail3" />
            <div class="project-text">
              <h6>Curated</h6>
              <p>
                A social media website inspired from Dribbble, where users are
                able to showcase their creative works and interact with others.
                <br />
                <br />
              </p>
              <div class="sources-block">
                <a href="https://youtu.be/FfdnUmnv8Y8">
                  <img class="youtube-icon" src={youtubeImg} />
                  <h5>Youtube Demo</h5>{" "}
                </a>
                <a href="https://github.com/willfbren/curated-app">
                  <img class="github-icon-small" src={githubImg} />{" "}
                  <h5>Github</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="contact-page">
        <div class="contact-page-textbox">
          <div class="contact-page-textbox-main">
            <h1>Contact Me @:</h1>
            <br />

            <div class="contact-info shake-slow">
              <a href="https://www.github.com/linxerz" target="_blank">
                <p>
                  <img class="github-icon" src={githubImg} /> Github
                </p>
              </a>
            </div>
            <br />
            <div class="contact-info shake-slow">
              <a href="https://www.linkedin.com/in/jakirap" target="_blank">
                <p>
                  <img class="linkedin-icon" src={linkedInImg} /> LinkedIn
                </p>
              </a>
            </div>
            <br />
            <div class="contact-info shake-slow">
              <a
                href="https://docs.google.com/document/d/1GDa4ikTgYlVHL44rvwgP3OMeQPWDGdXzaJvkba0mdj4/edit?usp=sharing"
                target="_blank"
              >
                <p>
                  <img class="email-icon" src={documentImg} /> Resume
                </p>
              </a>
            </div>
            <br />
            <div class="contact-info shake-slow">
              <p>
                <img class="email-icon" src={emailImg} /> :
                pruittj1998@gmail.com
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
