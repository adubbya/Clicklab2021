import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

 // create random friends cards
 function randomize(friends) {
  for (let i = friends.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = friends[i];
    friends[i] = friends[j];
    friends[j] = temp;
  }
  return friends;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    gameText: "Click all 12 images only once to save the lab from Pod 6!",
    topScore: 0,
    userScore: 0,
    unselected: friends
  };

  clickScore = image => {
    const findImage = this.state.unselected.find(item => item.image === image);
    if (findImage === undefined) {
      this.setState({
        gameText: "They blew up the lab! Pod 6 is jerks...",
        userScore: 0,
        topScore: (this.state.userScore > this.state.topScore) ? this.state.userScore : this.state.topScore,
        friends: friends,
        unselected: friends
      });
      this.shiftImage();
    }
    else {
      const newFriends = this.state.unselected.filter(item => item.image !== image);
      this.setState({
        gameText: "Good job, Cap'n!",
        userScore: this.state.userScore + 1,
        friends: friends,
        unselected: newFriends
      });
      this.shiftImage();
    }

  };

  // shifts cards for each score change
  shiftImage = () => {
    const shuffledFriends = randomize(this.state.friends);
    this.setState({
      friends: shuffledFriends
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          userScore={this.state.userScore}
          gameText={this.state.gameText}
          topScore={this.state.topScore} />

        {this.state.friends.map(friend => (
          <FriendCard
            clickScore={this.clickScore}
            shiftImage={this.shiftImage}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
