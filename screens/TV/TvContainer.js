import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";

class TvContainer extends Component {

    state = {
        loading: true
    };

    render() {

        const {loading} = this.state;

        return (
            <TvPresenter
                loading={loading}
            />
        );
    }
}

export default TvContainer;
