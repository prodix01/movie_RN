import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import MovieSlide from "./MovieSlide";


const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
    background-color: red;
    height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text`

`;

const MovieSlider = ({movies}) =>
    movies ? (
        <Swiper
            showPagenation={false}
            autoplay={true}
            style={{height: SWIPER_HEIGHT}}
            autoPlayTimeout={3}
        >
            {movies
                .filter(movie => movie.backdrop_path !== null)
                .map(movie => (
                    <View key={movie.id}>
                        <MovieSlide
                            voteAvg={movie.vote_average}
                            backgroundPhoto={movie.backdrop_path}
                            posterPhoto={movie.poster_path}
                            overview={movie.overview}
                            title={movie.title}
                        />
                    </View>
                ))}
        </Swiper>
) : null;

MovieSlider.propTypes = {
    movies: Proptypes.array
};

export default MovieSlider;
