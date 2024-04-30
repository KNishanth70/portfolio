import React from "react";
import Navbar from "./Navbar";
import "./App.css";



function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a final year student specializing in
          Full Stack development, proficient in Python, Java, and MERN (MongoDB,
          Express.js, React, Node.js) technology stack.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Smart Street Light</h3>
          <p>
            These lights are designed to illuminate based on the condition of
            the atmosphere, to reduce the loss of electricity, and to maintain
            the efficiency of the streetlight.{" "}
          </p>
          {/* <p></p> */}
        </div>
        <div className="project">
          <h3>Smart Pole</h3>
          <p>
            Smart Pole is the new model of street light, where various devices
            like wifi modems, cameras, LED Displays, and Emergency SOS are
            integrated to improve the safety of the public.
          </p>
          {/* <p>Technologies used: Java, Spring Boot, MySQL</p> */}
        </div>
        <div className="project">
          <h3>Fault Detection in Street Lights</h3>
          <p>
            The fault in the street lights will be identified automatically, and
            an alert notification will be sent to the control room to resolve
            the fault. This reduces the time delay in finding out the fault
            manually.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to get in touch!</p>
        <ul>
          <li>OutLook: nishanthkumar2003@outlook.com</li>
          <li>Email: nishanthkumar1363@gmail.com</li>
          <li>Phone: +91 9342559603</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nishanth--k/"
              target="_blank"
              rel="noopener noreferrer"
            >
              K.Nishanth
            </a>
          </li>
        </ul>
      </section>
      <section id="coCircular">
        <h2>Co-Circular Activities</h2>
        <p>First Prize in Paper Presentation on "Internet of Things" at Hindusthan Institute of Technology</p>
        <p>Secured First Place in Paper Presentation on "Smart Home Automation" at Hindusthan Institution</p>
        <p>Presented Automatic Seeding & Weeding Robot in IFERP</p>
        <p>Completed Two Phases of AR/VR by Metaverse</p>
        <p>Attended 5 Days Workshop on Designing and Modelling of IoT, AI System</p>
        <p>Attended 2 days workshop on Design Thinking at TNSI, Nehru Groups</p>
      </section>
      <section id="photos">
      <h2>Photos</h2>
        <div className="photo-grid">
          <img src="assets/photo1.jpg" alt="Photo 1" />
          <img src="images/photo2.jpg" alt="Photo 2" />
          <img src="images/photo3.jpg" alt="Photo 3" />
        </div>
      </section>
    </div>
  );
}

export default App;
