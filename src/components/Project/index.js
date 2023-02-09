import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
    // This imports the information for the current project sent down.
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const techs = currentProject.technologies;
    const gitLink = currentProject.github;

    // This function parses the information from the array and creates a list.
    function getTechs(techArray) {
        let techList = "";

        for (var i = 0; i < techArray.length; i++) {
            if (i === techArray.length - 1) {
                techList += techArray[i];
            } else {
                techList += techArray[i] + ", ";
            }
        }

        return techList;
    }

    return (
        <Card style={{ width: "30rem" }}>
            <Card.Img
                variant="top"
                src={require(`../../assets/images/${image}`)}
                className="card-image"
            />
            <div className="center">
                <Card.Body>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Subtitle className="card-subtitle">Technologies Used:</Card.Subtitle>
                    <Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
                    <Card.Link href={gitLink} target="_blank" className="card-link">
                        <p><button>Github: {name}</button></p>

                    </Card.Link>
                </Card.Body>
            </div>
        </Card>
    );
}

export default Project;
