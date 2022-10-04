import React from "react"
import BirthdayIMG from "./Images/Birthdaycake.png"
import "./event.css"

export default function Event() {
    return(
        <section className="showEvent">
            <h1>_Event Name_</h1>
            <div className="partyData">
                <h2>&#128075; Hosted by _Host Name_</h2>
                <p>&#128197; Date: _Start Date_</p>
                <p>&#127937; Ends: _End Date_</p>
                <p>&#128205; Where: _Location_</p>
                <p>&#128279; URL: _URL Link_</p>
                <p>&#9999;&#65039; Description: _Description_</p>
            </div>
            
            <img src={BirthdayIMG} alt="Birthday Cake"/>
        
        </section>
    )
}