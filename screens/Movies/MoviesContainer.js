import React, {Component} from 'react';
import MoviePresenter from "./MoviesPresenter";
import {moviesApi} from "../../src/api";

class MoviesContainer extends Component {

    state = {
        loading: true,
        nowPlaying: null,
        upComing:null,
        popular: null,
        error: null
    };

    async componentDidMount() {
        try {
            ({ data: { results: upcoming }} = await moviesApi.upComing());
            ({ data: { results: popular }} = await moviesApi.popular());
            ({ data: { results: nowPlaying }} = await moviesApi.nowPlaying());
            this.setState({ upcoming, popular, nowPlaying })
        } catch {
            this.setState({  error : "Can't get Movies" });

        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const {loading, nowPlaying, upcoming, popular, error} = this.state;

        return (
            <MoviePresenter
                loading={loading}
                nowPlaying={nowPlaying}
                upComing={upcoming}
                popular={popular}
                error={error}
            />
        );
    }
}


export default MoviesContainer;
