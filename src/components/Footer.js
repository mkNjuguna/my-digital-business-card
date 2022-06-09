import React from "react"
import TwitterIcon from "../images/twitter-icon.png"
import FacebookIcon from "../images/facebook-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
import GithubIcon from "../images/github-icon.png"


export default function Footer() {
    return (
        <div className={"footer-container"}>
            <div className={"socials-icons"}>
                <img className={"icon-size"} src={TwitterIcon} alt={""}/>
                <img className={"icon-size"} src={FacebookIcon} alt={""}/>
                <img className={"icon-size"} src={InstagramIcon} alt={""}/>
                <img className={"icon-size"} src={GithubIcon} alt={""}/>
            </div>
        </div>
    )
}