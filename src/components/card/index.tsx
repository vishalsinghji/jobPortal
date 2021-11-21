import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as filledStar,faTimes as fs ,faTimesCircle as fs1} from '@fortawesome/free-solid-svg-icons'
import { faStar as outlineStar} from '@fortawesome/free-regular-svg-icons'

const Card = (props : any) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
    const handleModal = () => {
        props.onClickModal();
        props.data(props.beerData);
    }
    

    const handleFavourites = () => {
        setIsFavourite(!isFavourite);
        if(!isFavourite)
            props.fav(props.beerData);
    }

    const handleRejections = () => {
        setIsRejected(!isRejected);
        if(!isRejected)
            props.fav(props.beerData);
    }
    
    return (
            <div className="card">
                <div className="card-body">
                
                    <FontAwesomeIcon 
                        className = "icon"
                        onClick = {handleFavourites}
                        icon = {isFavourite ? filledStar : outlineStar}
                        style = {isFavourite ? {color: 'orange'} : {color: 'black'}}
                    />
                    <FontAwesomeIcon 
                        className = "icon"
                        onClick = {handleRejections}
                        icon = {isRejected ? fs : fs1}
                        style = {isRejected ? {color: 'orange'} : {color: 'black'}}
                    />
                    <img src={props.beerData.Image} alt="" onClick={handleModal}/>
                    <p className="title">{props.beerData.name}</p>
                    <p className="subtitle">{props.beerData.id}</p>
                </div>
            </div>
    )
}

export default Card
