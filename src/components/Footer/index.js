import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/saubby"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/github.png")}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/saubby/?originalSubdomain=ca"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/linkedin.png")}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.facebook.com/saubby/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/facebook.png")}
                        alt="Facebook"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
