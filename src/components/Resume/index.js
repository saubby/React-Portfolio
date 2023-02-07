import React from "react";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div className="center">
                <a href={require("../../assets/files/Resume of Sauban Hussain Malek.pdf")} download>
                    <h4>Download my Resume</h4>
                </a>
            </div>
            <div class="flex-container">
                <h5>Front-End Proficiencies</h5>
                <ol>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>version control/Git</li>
                    <li>Bootstrap</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>version control/Git</li>
                </ol>
                <br></br>
                <h5>Back-End Proficiencies</h5>
                <ol>
                    <li>APIs</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Model View Controller (MVC)</li>
                    <li>Progressive Web Applications (PWA)</li>
                </ol>

            </div>
        </section>
    );
}

export default Resume;
