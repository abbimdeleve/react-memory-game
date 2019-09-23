import React, { Component }from "react";
import Card from "./Card";
import imageArr from "./ImageArr";

class GameContainer extends Component {

    state = {
        userScore: 0,
        imageArr: [],
        imageClicked: []
    }

    componentDidMount() {
        this.setState({
            imageArr: imageArr
        })
    }

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <>
            {this.state.imageArr.map(item => (
                <Card 
                key={item.id}
                img={item.image}/>
            ))}
           </>
        )
    }

}
export default GameContainer;