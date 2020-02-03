import React, {Component} from 'react';
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {

    state = {
        loading: true
    };

    render() {

        const {loading} = this.state;

        return (
            <DetailPresenter
                loading={loading}
            />
        );
    }
}

export default DetailContainer;
