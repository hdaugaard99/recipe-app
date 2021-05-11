
const recipes = (state=[], action) => {
    switch(action.type){
        case 'ADD_RECIPE':
            return [
                ...state,{
                    id: action.id,
                    title: action.title,
                
                }
            ]
        case 'ADD_BOX':
            return [
                ...state,{
                    id: action.id,
                    title: action.title
                }
            ]
       
        case 'DELETE_RECIPE':
            return {
                recipes: [
                    ...state.recipes.filter(recipe => recipe !== action.payload)
                ]
            }
           
        default:
            return state;

    }
}

export default recipes;