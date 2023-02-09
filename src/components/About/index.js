import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="left">
				<img

					src={require('../../assets/images/mypicture.jpg')}
					alt="about-me"
					className="photo" />
			</div>
			<div >
				<p>
					An Enthusiastic & Highly Motivated individual who has clear understanding of
					role and responsibility associated with frontend and backend.Being Software
					Engineer eager to learn new technologies and methodologies, always willing to
					innovate the new things which can improve the existing technology.
					Worked on various technologies like react, javascript, redux, etc at ACME.
					Website and dashboard development using the following technologies: echnologies:
					Javascript, PHP, MySQL, Bootstrap, HTML5, CSS.Full stack development with front end
					focus of new functionalities and writing highly maintainable code.
					Creation and implementation of unit test suites using Jest and Cypress.
					Technologies and frameworks:JavaScript, React Hooks and Next.js.
					Converting high high-fidelity mockups into usable websites with HTML,
					JavaScript, AJAX, and JSON coding.
				</p>

			</div>
		</section>
	);
}

export default About;
