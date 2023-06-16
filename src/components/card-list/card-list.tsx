// import { Component } from "react";
import { Monster } from "../../App";
import Card from "../card/card";
import "./card-list.css";

type CardListProps = {
    monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => { //forwardRef (2-4% of the time, MAX)
        
    return(
        <div className="card-list"> 
            {monsters.map((monster) => {
                return (
                    <Card monster={monster} key={monster.id}/>
                );
            })}
        </div>
    );
};

// class CardList extends Component {

//     render() {
//         const { monsters } = this.props;
//         // console.log(this.props.monsters)
//         // console.log('render from Card')
//         return(
//             <div className="card-list"> 
//                 {monsters.map((monster, idx) => {
//                     return (
//                         <Card monster={monster} idx={idx} key={idx}/>
//                     );
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;