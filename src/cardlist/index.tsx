import React, {useState} from 'react'
import Card from '../components/card'
import { CardStyle } from '../components/card/styles'

const CardList = (props : any) => {

    return (
        <>
            <CardStyle>
                {props.beerlist && props.beerlist.map((beer: { name: React.ReactChild , image_url: React.ReactChild}, index: React.Key)=> (
                    <Card
                        key={index} 
                        beerData={beer}
                        onClickModal={props.onClickModal} 
                        data={props.data}
                        fav={props.fav}
                    />
                ))}
            </CardStyle>
        </>
    )
}

export default CardList
