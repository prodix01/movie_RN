import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"

import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import {BG_COLOR} from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
    {
        Movies: MoviesScreen,
        TV: TVScreen,
        Search: SearchScreen
    },
    {
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);
