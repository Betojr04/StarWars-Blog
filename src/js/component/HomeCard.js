import React, {useContext} from "react";
import '../../styles/homecard.css'
import { Context } from "../store/appContext";
import {useNavigate} from 'react-router-dom';

 export const HomeCard = (props) => {
    const {store, actions} = useContext(Context)
    const history = useNavigate()
    console.log(props)

console.log(store.item)
const learnMoreDescription = () => {
    if(props.character) {
    actions.setItem(props.character.url)
    history(`/description/${props.character.uid}`)
    } else if (props.planet) {
        actions.setItem(props.planet.url)
        history(`description/${props.planet.uid}`)
    } else if (props.vehicle) {
        actions.setItem(props.vehicle.url)
        history(`/description/${props.vehicle.uid}`)
    }
}

    return(
        <div className="card-container">
            {props.character ? <h5 className="card-name">{props.character.name}</h5> : props.planet ? <h5 className="card-name">{props.planet.name}</h5> : props.vehicle ? <h5 className="card-name">{props.vehicle.name}</h5> : null}
            {props.character ? <img className="card-image">{props.character.image}</img> : props.planet ? <img className="card-image">{props.planet.image}</img> : props.vehicle ? <img className="card-image">{props.vehicle.image}</img> : null}
            <button onClick={learnMoreDescription} className="learn-more-button">Learn More</button>
        </div>
    );
};
export default HomeCard