import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { styles } from './RecipeCardStyles';

const RecipeItem = (props) => {
    return (
        <View style={styles.card} on>
            <Text style={styles.boxTitle}>{props.title}</Text>
            <View style={styles.openButton}>
            <Button 
                
                title="Open Recipe" 
                onPress={props.openRecipe.bind(this, props.uid)}
            />

            <TouchableOpacity style={styles.button} onPress={props.onDelete.bind(this, props.uid)}>
                Delete
            </TouchableOpacity>

            
            </View>
            
        </View>
    );
};

export default RecipeItem;