import React from "react"
import LandingSVG from "./Images/landing.svg"
import "./home.css"

export default function Home() {
    return(
              <main>
                  <img src={LandingSVG} alt="Landing Page IMG" className="appPreview"/>
          
                <section className="landingText">
                  <div className="landingTitle">
                    <h1>Imagine if <br/>
                    <span className="auto-type">Snapchat</span> <br/>
                    had events.</h1>
                  </div>
                  <div className="landingDescription">
                    <p>Easily host and share events with your friends<br/>
                    across any social media.</p>
                  </div>
                  
                </section> 

                <a href="./create" className="aBtn">
                    <button className="createBtn">
                    &#127881; Create my event
                    </button>
                </a>
              </main>
    )
}