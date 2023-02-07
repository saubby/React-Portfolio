import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Work Day Scheduler',
            description:
                ' a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
            image: 'wds.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',

            ],
            github: 'https://github.com/saubby/Workday-Scheduler',


        },
        {
            name: 'Weather Dashboard',
            description:
                'Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another applications API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.',
            image: 'wd.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',

            ],
            github: 'https://github.com/saubby/Forecast',


        },
        {
            name: 'Team Profile Generator',
            description:
                'Build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
            image: 'tpg.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'jQuery'
            ],
            github: 'https://github.com/saubby/Team-Generator',

        },

        {
            name: 'Note Taker',
            description:
                ' an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
            image: 'nt.png',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Express.js'
            ],
            github: 'https://github.com/saubby/Note-Taker',
        },
        {
            name: 'Password Generator',
            description: 'An application that an employee can use to generate a random password based on criteria they have selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript.',
            image: 'pg.png',
            technologies: ['HTML/CSS', 'JavaScript'],
            github: 'https://github.com/saubby/Password-Initiator',
        },
        {
            name: 'Employee Tracker',
            description:
                'create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS)  build a command-line application from scratch to manage a companys employee database, using Node.js, Inquirer, and MySQL.',
            image: 'et.jpg',
            technologies: [
                'JavaScript',
                'node.js',
                'inquirer',
                'NoSql'
            ],
            github: 'https://github.com/saubby/EmpTracker',
        },
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
