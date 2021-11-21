import CardList from '../cardlist';
import Card from '../components/card';
import { CardStyle } from '../components/card/styles';
import { HeaderStyle } from '../components/header/styles';
import {RejectedStyle} from './styles';

const Rejected = (props: any) => {
    
    return (
        <RejectedStyle>
            <HeaderStyle>
                <div className="container">
                    <div className="title">Rejected Candidates</div>
                </div> 
            </HeaderStyle>
            <CardStyle>
                {props.location.state && props.location.state.map((item: any,index: any) => (
                    <Card 
                        beerData={item}
                    />
                ))}    
                    </CardStyle>
        </RejectedStyle>
    )
}

export default Rejected
