
const fluff = (state=[], action) => {
    switch(action.type){
        case 'ADD_FLUFF':
            return [
                ...state,{
                    id: action.id,
                    ingredients: action.ingredients,
                    instructions: action.instructions,
                    completed: false
                }
            ]
            case 'TOGGLE_RECIPE':
                return state.map(fluff => 
                    (fluff.id === action.id) 
                    ? {...fluff, completed: !fluff.completed} : fluff)
        default:
            return state;

    }
}

export default fluff;