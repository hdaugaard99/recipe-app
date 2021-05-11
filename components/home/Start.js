import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { styles } from './HomeStyles.js';


export default class App extends Component {


    render() {

// heading for home screen
        return (
           <View>
               <View style={styles.heading}>
                   <Text style={styles.headingText}>Recipe Boxes</Text>
               </View>

               
               
           </View> 
           
        );
    }
}