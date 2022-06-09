import React from "react"
import MyImage from "../images/my-image.jpg"

export default function Image() {
    return (
        <div className={"image-container"}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className={"my-image"} src={MyImage} alt={"My Image"}/>
        </div>
    )
}