import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import {BG_COLOR} from "../../constants/Colors";
import MovieSlider from "../../components/MovieSlider";
import {Text} from "react-native";

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;



const MoviePresenter = ({loading, nowPlaying, upComing, popular, error}) =>
    loading
        ? <Loader/>
        : <Container>
            {nowPlaying ? <MovieSlider source={nowPlaying}/> : <Text>111</Text> }
        </Container>;



MoviePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string
};

export default MoviePresenter;
