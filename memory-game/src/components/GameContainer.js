import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import imageArrFile from "./ImageArr";

class GameContainer extends Component {

    state = {
        userScore: 0,
        imageArr: [],
        imageClicked: [],
        won: true
    }

    componentDidMount() {
        this.setState({
            imageArr: imageArrFile
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }


    shufflePictures = () => {

        let j = 0
        let tempVar = null
        let tempArray = this.state.imageArr;

        for (let i = this.state.imageArr.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            tempVar = tempArray[i]
            tempArray[i] = tempArray[j]
            tempArray[j] = tempVar
        }
        this.setState({ imageArr: tempArray }, () => console.log("hey", this.state.imageArr))

    }

    clickHandler = event => {
        event.preventDefault();
        const clickedID = parseInt(event.target.id);
        const newImageArr = this.state.imageArr.map(item => {
            if (item.id === clickedID) {

                if (item.clicked === true) {
                    alert("You looose");
                    this.setState({
                        won: false
                    })
                    
                }
                else {
                    item.clicked = true;
                    const newScore = this.state.userScore+1;
                    this.setState({
                        userScore: newScore
                    })
                }
            }
            return item;
        })
        if(this.state.won===true){
            this.setState({
                imageArr: newImageArr
            }, () => { console.log(this.state.imageArr) 
            this.shufflePictures() })
            
        } else {alert("You looose")
        const newGameArr = this.state.imageArr.map(item  => item.clicked = false)
        this.setState({
            won: true,
            userScore: 0,
            imageArr: newGameArr
        }, () => this.shufflePictures())
        }
       
    }

    render() {
        return (
            <>
                <Header />
                <p>userScore: {this.state.userScore}</p>
                <div className="row">
                    {this.state.imageArr.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            img={item.image}
                            clickHandler={this.clickHandler} />
                    ))}
                </div>
            </>
        )
    }

}
export default GameContainer;