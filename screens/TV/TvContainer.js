import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";
import {tvApi} from "../../src/api";

class TvContainer extends Component {

    state = {
        loading: true,
        popular: null,
        topRate: null,
        airingToday: null,
        error: null
    };

    async componentDidMount() {
        try {
            ({data : {results : airingToday}} = await tvApi.airingToday());
            ({data : {results : topRate}} = await tvApi.topRate());
            ({data : {results : popular}} = await tvApi.popular());

            this.setState({
                airingToday,
                topRate,
                popular
            });
        }
        catch {
            this.setState({
                error: "Can't find TV show"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        const {loading, popular, airingToday, topRate, error} = this.state;

        return (
            <TvPresenter
                loading={loading}
                popular={popular}
                airingToday={airingToday}
                topRate={topRate}
                error={error}
            />
        );
    }
}

export default TvContainer;
