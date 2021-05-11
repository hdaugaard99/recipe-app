import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { styles } from './CardStyles';

// creates list item for list of recipe boxes
const BoxItem = (props) => {
    return (

        <View style={styles.card} on>
            <Text style={styles.boxTitle}>{props.title}</Text>
            <View style={styles.openButton}>
            {/* Button to open box */}
            <Button title="Open Box"
            onPress={props.openBox.bind(this, props.uid)} />

            {/* Button to delete box */}
            <TouchableOpacity style={styles.button} onPress={props.onDelete.bind(this, props.uid)}>
                Delete
            </TouchableOpacity>

            
            </View>
            
        </View>
    );
};

export default BoxItem;