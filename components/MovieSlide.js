import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";
import {TINT_COLOR, GREY_COLOR} from "../constants/Colors";
import MovieRating from "./MovieRating";


const Container = styled.View`
    flex: 1;
    position: relative;
`;

const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3};
    opacity: 0.3;
    position: absolute;
`;

const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 30px;
    justify-content: space-between;
`;

const Column = styled.View`
    width: 60%;
    align-items: flex-start;
`;

const Title = styled.Text`
    color: ${TINT_COLOR};
    font-size: 14px;
    font-weight: 600;
`;


const MovieSlide = ({
    id,
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview
}) => (
    <Container>
        <BgImage source={{ uri: makePhotoUrl(backgroundPhoto)}}/>
        <Content>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title>{title}</Title>
            </Column>
        </Content>
    </Container>
);

MovieSlide.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default MovieSlide;
