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

            ({data : {results: upComing}} = await moviesApi.upComing());
            ({data : {results: nowPlaying}} = await moviesApi.nowPlaying());
            ({data : {results: popular}} = await moviesApi.popular());

            this.setState({
                nowPlaying,
                upComing,
                popular
            });
        }
        catch {
            this.setState({
                error: "Can't find Movies information"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const {loading, nowPlaying, upComing, popular, error} = this.state;

        return (
            <MoviePresenter
                loading={loading}
                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
                error={error}
            />
        );
    }
}


export default MoviesContainer;
