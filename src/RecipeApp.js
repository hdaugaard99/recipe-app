import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import AddRecipe from './containers/AddRecipe';
import VisibleTodos from './containers/VisibleTodos';


class RecipeApp extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <AddRecipe />
            </View>
        );
    }
}

export default RecipeApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
      },
    });