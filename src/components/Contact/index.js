import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Invalid Email");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleBlank(e) {
        if (e.target.name === "Name" || e.target.name === "Message") {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <section>
            <div className="center">
                <h1 className="page-header">Contact Me</h1>
            </div>
            <div className="center">
                <form class="justify-content-center">

                    <label hrmlFor="Name">Name:</label>
                    <br></br>
                    <input

                        type="text"
                        defaultValue={name}
                        onBlur={handleBlank}
                        name="Name"

                    />

                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input
                        type="email"
                        defaultValue={email}
                        name="email"
                        onBlur={handleChange}
                    />

                    <label htmlFor="Message">Message:</label>
                    <br></br>
                    <textarea
                        name="Message"
                        defaultValue={message}
                        onBlur={handleBlank}
                        rows="5"
                    />

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
