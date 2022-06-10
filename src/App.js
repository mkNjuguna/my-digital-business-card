import React from "react";
import Image from "./components/Image"
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className={"container"}>
            <Image />
            <Info />
            <Footer />
        </div>
    )
}