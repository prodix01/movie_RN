import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";


export default ({navigation}) => (
    <>
        <Text>Movies</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
            <Text>Go to Detail</Text>
        </TouchableOpacity>
    </>
);
