import { Component } from "react";

import Card from "../card/card";
import "./card-list.css";

class CardList extends Component {

    render() {
        const { monsters } = this.props;
        // console.log(this.props.monsters)
        // console.log('render from Card')
        return(
            <div className="card-list"> 
                {monsters.map((monster, idx) => {
                    return (
                        <Card monster={monster} idx={idx} key={idx}/>
                    );
                })}
            </div>
        )
    }
}

export default CardList;