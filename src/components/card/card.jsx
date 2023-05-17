// import { Component } from "react";
import "./card.css";


const Card = ({monster, idx}) => {
    const {name, email} = monster;
    
    return (
        <div className="card-container" key={idx}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${idx}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};
// class Card extends Component {
    
//     render() {
//         const {name, email} = this.props.monster;
        

//         return(
//             <div className="card-container" key={this.props.idx}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${this.props.idx}?set=set2&size=180x180`}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;