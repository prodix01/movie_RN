import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";

class Movies extends Component {


    onClick = ({navigation}) => (
        navigation.navigate("Detail")
    );

    render() {
        return (
            <View>
                <Text>movies</Text>
                <TouchableOpacity onPress={this.onClick}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Movies;
