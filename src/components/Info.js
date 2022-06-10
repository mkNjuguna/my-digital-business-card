import React from "react"
import EmailIcon from "../images/email-icon.png"
import LinkedIn from "../images/linkedin-icon.png"

export default function Info() {
    return (
        <div className={"info-container"}>
            <main>
                <h1 className={"my_name"}>Martin Njuguna</h1>
                <h4 className={"my_role"}>Frontend Developer</h4>
                <p className={"my_github_link"}>https://github.com/mkNjuguna</p>
                <div className={"button-container"}>
                    <button className={"email_button"}>
                        <img className={"email-icon"} src={EmailIcon} alt={"email-icon"}></img>
                        Email
                    </button>
                    <button className={"linkedin-button"}>
                        <img className={"linkedin-icon"} src={LinkedIn} alt={"linkedin-icon"} />
                        LinkedIn
                    </button>
                </div>
                <h1 className={"about-header"}>About</h1>
                <p className={"content"}>I am a frontend developer with a particular interest in making things simple and
                    automating daily tasks. I try to keep up with security and best practices,
                    and am always looking for new things to learn.
                </p>
                <h1 className={"interests-header"}>Interests</h1>
                <p className={"content"}>Food expert. Music scholar. Reader. Internet fanatic.
                    Bacon buff. Entrepreneur. Travel geek.
                    Pop culture ninja. Coffee fanatic.
                </p>
            </main>
        </div>
    )
}