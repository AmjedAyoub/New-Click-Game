import React, { Component } from "react";
import FriendCard from "../components/FriendCard";
import friends from "../friends.json";
import Containerf from "../components/Containerf";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import { Transform } from "react-animation-components";
import posed from "react-pose";
import "../index.css";

let randomArray;

function random() {
    let randomState={
        friends
    };
        randomArray=[];
        for (let i = 0; i < 12; i++) {
        const item =  Math.floor((Math.random() * 12));
        if (randomArray.indexOf(randomState.friends[item])===-1) {
            randomArray.push(randomState.friends[item])
        }else{
            i--;
        }
    }
}
   
random();

const ShakePose = posed.div({
    shake: {
      applyAtEnd: { x: 0 },
      applyAtStart: { x: -40 },
      x: 0,
      transition: {
        type: "spring",
        stiffness: 1000,
        damping: 10,
        duration: 4
      }
    }
  });

    class Main extends Component {
        // Setting this.state.friends to the friends json array
        state = {
          randomArray,
          score:0,
          topScore: 0,
          lose: 0,
          title: "Click on an image to start the game"
        };

        randomAgain = ()=>{
            let randomA=[];
            for (let i = 0; i < 12; i++) {
            const item =  Math.floor((Math.random() * 12));
            if (randomA.indexOf(this.state.randomArray[item])===-1) {
                randomA.push(this.state.randomArray[item])
            }else{
                i--;
            }
        }
        this.setState({randomArray:randomA});
    }

        selectedArray=[];
    handleClick = id => {
            // We always use the setState method to update a component's state
            
            if (this.selectedArray.indexOf(id)===-1) {
                this.selectedArray.push(id);
                let max=this.state.score+1;
                this.setState({ score: this.state.score + 1 });
                this.setState({ title: "You guessed correctly!" });
                if(this.state.topScore<=max){
                    this.setState({topScore:max});
                }
            }else{
                this.setState({score:0});
                this.setState({ lose: this.state.lose + 1 });
                this.setState({ title: "You guessed incorrectly!" });
                this.selectedArray=[];

            }
            this.randomAgain();
          };

    removeFriend = id => {
          // Filter this.state.friends for friends with an id not equal to the id being removed
          const friends = this.state.randomArray.filter(friend => friend.id !== id);
          // Set this.state.friends equal to the new friends array
          this.setState({ friends });
        };
        
        render(){            
    return (  
        <div>
        <Navbar 
        score={this.state.score}
        topScore={this.state.topScore}
        title={this.state.title} />
        <Containerf>
            <Row>
            <Col size="md-2" id="instruction">
                <h3>instructions:</h3>
                <ul>
                    <li>Using your mouse, click each of the 12 images in whatever order you chose</li><br></br>
                    <li>You lose when you click the same image twice!</li><br></br>
                    <li>After 12 correct answers the game will restart</li><br></br>
                </ul> 
            </Col>     
            <Col size="md-10">
                <Transform enterTransform="rotate(360deg)" in>
                    <ShakePose pose={["shake"]} poseKey={this.state.lose}>
                <Wrapper>
                { this.state.randomArray.map(friend => (
                <FriendCard
                //   removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                handleClick={this.handleClick}
                image={friend.image}
                />
                ))} 
                </Wrapper>
                </ShakePose>
                </Transform>
            </Col> 
            </Row>        
        </Containerf>
        </div>
    );
        }
    }

export default Main;