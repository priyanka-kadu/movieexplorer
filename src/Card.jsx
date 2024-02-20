import React from "react";
import Data from "./cardData";
import './index.css'


function Card() {
    return Data.map((value) => {
        return (
            <>
                <div className="main-card">
                    <div className="card">
                        <img src={value.image} alt="img" className="card-image"></img>
                        <div className="card-info">
                            <span className="card-platform">{value.platform}</span>
                            <h3 className="card-title">{value.title}</h3>
                            <a href={value.link} target="_blank"><button>Watch Now</button></a>
                        </div>
                    </div>
                </div>
            </>
        )
    })

}

export default Card;