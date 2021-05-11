import {connect} from 'react-redux';
import RecipeList from '../components/RecipeList';
import {toggleRecipe, deleteRecipe} from '../actions';

const mapStateToProps = state => ({
    recipes: state.recipes,
    fluff: state.fluff,
    instructions: state.instructions
})

const mapDispatchToProps = dispatch => ({
    toggleRecipe: id => dispatch(toggleRecipe(id))
    
})


export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);