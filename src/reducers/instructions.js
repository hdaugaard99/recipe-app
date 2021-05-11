const instructions = (state=[], action) => {
    switch(action.type){
        case 'ADD_INSTRUCTIONS':
            return [
                ...state,{
                    id: action.id,
                    
                    instructions: action.instructions,
                    completed: false
                }
            ]
            case 'TOGGLE_RECIPE':
                return state.map(instructions => 
                    (instructions.id === action.id) 
                    ? {...instructions, completed: !instructions.completed} : instructions)
        default:
            return state;

    }
}

export default instructions;