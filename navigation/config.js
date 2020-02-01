import {createStackNavigator} from "react-navigation-stack";
import {BG_COLOR, TINT_COLOR} from "../constants/Colors";

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomColor: 0
    },
    headerTitleStyle: {
        color: TINT_COLOR
    },
    headerTintColor: TINT_COLOR
};

export const createStack = (screen, title) =>
    createStackNavigator({
        Scrren: {
            screen,
            navigationOptions: {
                title,
                ...headerStyles
            }
        }
    });
