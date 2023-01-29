import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div>
            {props.loc.location !== "JAPAN" && <hr />}
            <div className="card">
                <img src={`../images/${props.loc.imageUrl}`} />
                <div>
                    <div className="card--location">
                        <img src="../images/location.png" />
                        <span>{props.loc.location}</span>
                        <a href={props.loc.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.loc.title}</h1>
                    <p className="dates">{props.loc.startDate} - {props.loc.endDate}</p>
                    <p className="desc">{props.loc.description}</p>
                </div>
            </div>
        </div>            
    )
}