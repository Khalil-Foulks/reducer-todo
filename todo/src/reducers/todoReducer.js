export const initialState = {
    toDoList: [
        {
        item: 'Learn about Reducers',
        completed: false,
        id: 1
        }, 
        {
        item: 'Organize Garage',
        completed: false,
        id: 2,
        }
    ],
}

console.log(initialState)


export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
            return {
                toDoList: [...state.toDoList, newItem]
            }

        case "TOGGLE":
            return{
                toDoList: state.toDoList.map(item => {
                    if(item.id === action.payload){
                        return{
                            ...item, completed:!item.completed
                        } 
                    } else {
                        return item
                    }
                })
            }
        default:
            return state;
    }
}