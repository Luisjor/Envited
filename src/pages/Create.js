import React from "react"
import BirthdayIMG from "./Images/Birthdaycake.png"
import "./create.css"

export default function Create() {
    return(
        <section className="createEvent">
            <h1>Create your event</h1>
            <img src={BirthdayIMG} alt="Birthday Cake"/>
            <form className="eventData">
                <label>&#127881; My event is called</label>
                <input type="text" required></input>
                <label>&#128197; It starts at</label>
                <input type="datetime-local" required></input>
                <label>&#127937; It ends at <small>(optional)</small></label>
                <input type="datetime-local"></input>
                <label>&#128205; It's happening at <small>(optional)</small></label>
                <input type="text" placeholder="Location"></input>
                <label>&#128279; Add a URL link <small>(optional)</small></label>
                <input type="text" placeholder="URL"></input>
                <label>&#9999;&#65039; Description <small>(optional)</small></label>
                <input type="text"></input>
                <br/>
            </form>
            <a href="./event" className="aSubmit">
                <button className="submitBtn">Create Event</button>
            </a>
        </section>
    )
}