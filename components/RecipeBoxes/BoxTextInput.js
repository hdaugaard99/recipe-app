import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from './CardStyles'; 

const BoxInput = props => {

    const [enteredBox, setEnteredBox ] = useState("");
    const boxInputHandler = (enteredText) => {
        setEnteredBox(enteredText)
  };

  // form for creating a recipe box
    return (
        <View>
            <TextInput 
                style={styles.addBox}
                placeholder="Box Name" 
                onChangeText={boxInputHandler}
                value={enteredBox}
            />
        <Button style={styles.addButton} title="ADD" onPress={props.onAddBox.bind(this, enteredBox)} />
      </View>
    );
};

export default BoxInput;