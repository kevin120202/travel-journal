import React from "react"
import '../index.css'
import pathIcon from "../assets/images/Path.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="Image of travel location" className="location-img" />
            <div className="card-details">
                <div>
                    <h3>Japan</h3>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card