import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { styles } from './IngredientsStyles';

const IngredientsItem = (props) => {
    return (
        <View style={styles.card} on>
            <Text style={styles.boxTitle}>{props.title}</Text>
            
        </View>
    );
};

export default IngredientsItem;