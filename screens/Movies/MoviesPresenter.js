import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";


const MoviePresenter = ({loading, nowPlaying, upComing, popular, error}) =>
    loading ? <Loader/> : <Text>movie</Text>;



MoviePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string
};

export default MoviePresenter;
