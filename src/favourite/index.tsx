import CardList from '../cardlist';
import Card from '../components/card';
import { CardStyle } from '../components/card/styles';
import { HeaderStyle } from '../components/header/styles';
import {FavouriteStyle} from './styles';

const Favourites = (props: any) => {
    
    return (
        <FavouriteStyle>
            <HeaderStyle>
                <div className="container">
                    <div className="title">Shortlisted Candidates</div>
                </div> 
            </HeaderStyle>
            <CardStyle>
                {props.location.state && props.location.state.map((item: any,index: any) => (
                    <Card 
                        beerData={item}
                    />
                ))}    
                    </CardStyle>
        </FavouriteStyle>
    )
}

export default Favourites
