import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import {GREY_COLOR} from "../constants/Colors";


const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const HContainer = styled.View`
    margin-bottom: 20px;
    flex-direction: row;
`;

const Title = styled.Text`
    color: white;
    font-size: ${props => props.big ? "15px" : "17px"};
    margin-vertical: 5px;
`;

const Column = styled.View`
    margin-left: 20px;
    wideth: 60%
`;

const OverView = styled.View`
    color: ${GREY_COLOR};
    font-size: 14px;
    margin-vertical: 7px;
`;

const MovieItem = ({
    id,
    posterPhoto,
    title,
    voteAvg,
    overview,
    horizontal = false
}) =>
    horizontal ? (
        <HContainer>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title>{title}</Title>
                <MovieRating votes={voteAvg}/>
                {overview ? (
                    <OverView>
                        {overview}
                    </OverView>
                ) : null}
            </Column>
        </HContainer>
    ) : (
        <Container>
            <MoviePoster path={posterPhoto}/>
            <Title>{title}</Title>
            <MovieRating votes={voteAvg}/>
        </Container>
    );

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string
};

export default MovieItem;
