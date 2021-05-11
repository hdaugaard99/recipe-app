import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, RecyclerViewBackedScrollViewComponent } from 'react-native';
import { styles } from './IngredientsStyles'; 


const IngredientsInput = props => {


  const [enteredIngredients, setEnteredIngredients] = useState("");
  const ingredientsInputHandler = (enteredText) => {
      setEnteredIngredients(enteredText)
  };


    return (
        <View>
            
            <TextInput
                multiline={true}
                numberOfLines={6}
                placeholder="Add Ingredients"
                onChangeText={ingredientsInputHandler}
                value={enteredIngredients}
            />
        <Button style={styles.addButton} title="ADD" onPress={ props.onAddIngredients.bind(this, enteredIngredients)} />
      </View>
    );
};

export default IngredientsInput;