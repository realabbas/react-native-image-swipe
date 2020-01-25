import React, { Component } from "react";
import { Image } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

class ImageSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    onSwipeLeft = () => {
        this.setState({
            counter:
                this.state.counter < data.length - 1
                    ? this.state.counter + 1
                    : this.state.counter
        });
    };

    onSwipeRight = () => {
        this.setState({
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
                    backgroundColor: this.props.backgroundColor,
                    padding: this.props.padding
                }}
            >
                <Image
                    style={{ height: this.props.imageHeight, width: typeof this.props.width === 'undefined' ? null : this.props.width, borderRadius: this.props.borderRadius }}
                    source={{ uri: this.props.data[this.state.counter].url }}
                />

            </GestureRecognizer>
        );
    }
}

export default ImageSwiper;
