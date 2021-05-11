import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {addRecipe, addFluff, addInstructions} from '../actions';

var width = Dimensions.get('window').width;

// handles text input from add recipe form
class AddRecipe extends Component {
    state = {
        title: '',
        ingredients: '',
        instructions: ''
    }
    
    addRecipe = (title) => {
        //redux store
        this.props.dispatch(addRecipe(title))
        this.setState({title: ''})
    
    }

    addIngredients = (ingredients) => {
        this.props.dispatch(addFluff(ingredients))
        this.setState({ingredients: ''})
    }

    addInstructions = (instructions) => {
        this.props.dispatch(addInstructions(instructions))
        this.setState({instructions: ''})
    }
    
    render() {
        const recipe = () => {
            this.addRecipe(this.state.title); 
            this.addRecipe(this.state.ingredients);
            this.addRecipe(this.state.instructions);
        }
        return (
            <View>
                {/* recipe title input */}
                <View >
                <Text style={styles.label}>Recipe Name</Text>
                <TextInput
                    onChangeText={(title) => this.setState({title})}
                    value = {this.state.title}
                    placeholder='Ex. Chili'
                    style={styles.input}
                />
                </View>
                {/* ingredients input */}
                <View>
                <Text style={styles.label}>Ingredients</Text>
                <TextInput
                    onChangeText={(ingredients) => this.setState({ingredients})}
                    value = {this.state.ingredients}
                    placeholder='Ex. potatoes, cheese, butter'
                    multiline= {true}
                    numberOfLine= {6}
                    style={styles.inputMultiline}
                />
                </View>
                {/* instructions input */}
                <View>
                <Text style={styles.label}>Instructions</Text>
                <TextInput
                    onChangeText={(instructions) => this.setState({instructions})}
                    value = {this.state.instructions}
                    placeholder='Ex. 1. Do stuff  2. Do things'
                    multiline= {true}
                    numberOfLine= {8}
                    style={styles.inputMultiline}
                />
                </View>
                {/* handles text input */}
                <TouchableOpacity onPress={() => {
                    this.addRecipe(this.state.title); 
                    this.addIngredients(this.state.ingredients); 
                    this.addInstructions(this.state.instructions);
                   }}>
                        
                    <View style={styles.addButton}>
                        <Text styles={styles.addButtonText}>Add Recipe</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


export default connect()(AddRecipe);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    label: {
        marginTop: 10
    },

    input: {
        borderWidth: 1, 
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea', 
        height: 50,
        flex: 1, 
        padding: 5,
        
    },

    inputMultiline: {
        borderWidth: 1, 
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea', 
        height: 120,
        flex: 1, 
        padding: 5,
        
    },

    addButton: {
        height: 50, 
        backgroundColor: '#ff8c00',
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 5
    },

    addButtonText: {
        color: '#de9595', 
        padding: 10
    }
});