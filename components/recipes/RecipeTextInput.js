import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, RecyclerViewBackedScrollViewComponent } from 'react-native';
import { styles } from './RecipeCardStyles'; 


const RecipeInput = props => {

    const [enteredRecipe, setEnteredRecipe ] = useState("");
    const recipeInputHandler = (enteredText) => {
        setEnteredRecipe(enteredText)
  };

  const [enteredIngredients, setEnteredIngredients] = useState("");
  const ingredientsInputHandler = (enteredText) => {
      setEnteredIngredients(enteredText)
  };

  const [enteredInstructions, setEnteredInstructions] = useState("");
  const instructionsInputHandler = (enteredText) => {
      setEnteredInstructions(enteredText)

  };


  const handleRecipe = function() {
    props.onAddRecipe.bind(this, enteredRecipe);
    props.onAddIngredients.bind(this, enteredIngredients); 
    props.onAddInstructions.bind(this, enteredInstructions); 
    
}


    return (
        <View>
            <TextInput 
                style={styles.addBox}
                placeholder="Recipe Name" 
                onChangeText={recipeInputHandler}
                value={enteredRecipe}
            />
            <TextInput
                multiline={true}
                numberOfLines={6}
                placeholder="Add Ingredients"
                onChangeText={ingredientsInputHandler}
                value={enteredIngredients}
            />
            <TextInput
                multiline={true}
                numberOfLines={12}
                placeholder="Add Instructions"
                onChangeText={instructionsInputHandler}
                value={enteredInstructions}
            />
        <Button style={styles.addButton} title="ADD" onPress={props.onAddRecipe.bind(this, enteredRecipe)} />
      </View>
    );
};

export default RecipeInput;