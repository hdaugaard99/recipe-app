import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {addFluff, recipePageNav} from '../actions'
import { recipeName } from '../containers/AddRecipe';
import { connect } from 'react-redux';

var width = Dimensions.get('window').width;

// creates item using input from add recipe form
const RecipeList = ({recipes, fluff, toggleRecipe, instructions}) => (
    <View >
        <View style={styles.recipe}>
        {/* information from recipe title input */}
        {recipes.map(recipe => 
                <View  
                style={{
                    fontSize: 24,
                }}>
                    <Text style={styles.title}>{recipe.title}</Text>
                    
                        
                </View>
          
        )}
        {/* information from ingredients input */}
        {fluff.map(fluff =>
            
            <View  
            style={{
                fontSize: 24,
            }}>
                <TouchableOpacity 
                    key={fluff.id}
                    onPress={() => toggleRecipe(fluff.id)}>
                        <Text style={styles.show}>Show Ingredients</Text>
                    </TouchableOpacity>
                <Text style={{display: fluff.completed ? 'block' : 'none'}}>{fluff.ingredients}</Text>
                
            </View>
              
        )}
        {/* information from instructions text input */}
        {instructions.map(instructions =>
            
            <View  
            style={{
                fontSize: 24,
            }}>
                <TouchableOpacity 
                        key={instructions.id}
                        onPress={() => toggleRecipe(instructions.id)}>
                            <Text style={styles.show}>Show Instructions</Text>
                        </TouchableOpacity>
            <Text style={{display: instructions.completed ? 'block' : 'none'}}>{instructions.instructions}</Text>
                
            </View>
              
    )}
        
        </View>
    </View>
)
export default RecipeList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    recipe: {
        backgroundColor: 'white',
        padding: 15,
        width: width,
        marginTop: 15,
    },

    section: {
        marginBottom: 10,
    },

    show: {
        marginTop: 10,
        color: 'blue',
        
    }
})