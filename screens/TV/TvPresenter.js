import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const TvPresenter = ({loading}) =>
    loading ? <Loader/> : <Text>TV</Text>;

TvPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default TvPresenter;
