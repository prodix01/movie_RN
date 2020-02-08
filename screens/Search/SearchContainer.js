import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {

    state = {
        loading: false
    };

    render() {

        const {loading} = this.state;

        return (
            <SearchPresenter
                loading={loading}
            />
        );
    }
}

export default SearchContainer;
