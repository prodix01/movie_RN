import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import {BG_COLOR} from "../../constants/Colors";
import MovieSlider from "../../components/MovieSlider";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;



const MoviePresenter = ({loading, nowPlaying, upComing, popular, error}) =>
    loading
        ? <Loader/>
        : <Container>
            {nowPlaying ? <MovieSlider movies={nowPlaying}/> : null}
            {upComing ? (
                <Section title="Upcoming Movies">
                    {upComing
                        .filter(movie => movie.poster_path !== null)
                        .map(movie =>(
                            <MovieItem
                                voteAvg={movie.vote_average}
                                posterPhoto={movie.poster_path}
                                id={movie.id}
                                title={movie.title}
                                key={movie.id}
                            />
                        ))
                    }
                </Section>
            ):null}
            {popular ? (
                <Section title="Popular">
                    {popular
                        .filter(movie => movie.poster_path !== null)
                        .map(movie => (
                            <MovieItem
                                voteAvg={movie.vote_average}
                                posterPhoto={movie.poster_path}
                                id={movie.id}
                                title={movie.title}
                                key={movie.id}
                            />
                        ))
                    }
                </Section>
            ): null}
        </Container>;



MoviePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    nowPlaying: PropTypes.array,
    upComing: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string
};

export default MoviePresenter;
