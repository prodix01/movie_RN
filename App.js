import React, {Component} from 'react';

import {AppLoading} from "expo";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";


import TabNavigation from "./navigation/TabNavigation";

class App extends Component {

    state = {
        loaded: false
    };

    handleError = error => console.log(error);
    handleLoaded = () => this.setState({loaded: true});

    loadAssets = async () => {
        await Font.loadAsync({
            ...Ionicons.font
        });
    };


    render() {

        const {loaded} = this.state;

        if (loaded) {
            return (
                <TabNavigation/>
            );
        }
        else {
            return (
                <AppLoading
                    startAsync={this.loadAssets}
                    onFinish={this.handleLoaded}
                    onError={this.handleError}
                />
            );
        }

    }
}

export default App;
