import { NavigationActions, StackActions } from 'react-navigation';


export const navigateTo = (navigation, routeName, params={}, resetStack = false) => {
    if(routeName) {
        if(resetStack) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName, params})]
            });
            return navigation.dispatch(resetAction);
        } else {
            navigation.navigate(routeName, params)
        }
    } else {
        return navigation.goBack();
    }

};