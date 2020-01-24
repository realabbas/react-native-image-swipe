import React, { Component } from "react";
import { Image } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

const data = [
  {
    url:
      "https://image.shutterstock.com/image-vector/sale-banner-template-design-260nw-487646614.jpg"
  },
  {
    url:
      "https://img.freepik.com/free-vector/sale-banner-template-design_74379-121.jpg?size=626&ext=jpg"
  },
  {
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfpOj6-pjVbg0rAT-PZ93idqoMGGYn5v7DxbViH3HYix2YFxH&s"
  }
];

class ImageSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: "none",
      backgroundColor: "#fff",
      counter: 0,
      data: []
    };
  }

  onSwipeLeft = gestureState => {
    this.setState({
      myText: "You swiped left!",
      counter:
        this.state.counter < data.length - 1
          ? this.state.counter + 1
          : this.state.counter
    });
  };

  onSwipeRight = gestureState => {
    this.setState({
      myText: "You swiped right!",
      counter:
        this.state.counter > 0 ? this.state.counter - 1 : this.state.counter
    });
  };

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipe={this.onSwipe}
        onSwipeLeft={this.onSwipeLeft}
        onSwipeRight={this.onSwipeRight}
        config={config}
        style={{
          backgroundColor: "#FFF",
          padding: 20
        }}
      >
        <Image
          style={{ height: 120, width: null, borderRadius: 10 }}
          source={{ uri: data[this.state.counter].url }}
        />
      </GestureRecognizer>
    );
  }
}

export default ImageSwiper;
