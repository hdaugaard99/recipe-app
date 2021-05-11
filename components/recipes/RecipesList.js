import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { styles } from './RecipesListStyles';

export default class App extends Component {
    render() {
        return(
            <View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Recipes</Text>
                </View>
            </View>
        )
    }
}