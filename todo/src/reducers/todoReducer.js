// STEP 1 - Build a simple reducer and initial state

// In a folder called reducers add a reducer file and build out a simple reducer with just a default return for now
// In the same file, build your initial state object that has a list of todos with the following shape:
// Export both the reducer and the initial state object

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

// console.log(initialState)


export const reducer = (state, action) => {
    switch (action.type) {
        // STEP 3 - Adding todos

        // Build a form to add todos to your list
        // Build a function that will dispatch an action to add a new todo
        // Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)
        case "ADD":
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
            return {
                toDoList: [...state.toDoList, newItem]
            }

        //STEP 4 - Toggle the completed field

        // Build a function that will dispatch an action to toggle a todo's completed field
        // Invoke this new function when you click on a todo
        // Style your todo to somehow show that it is completed (be creative here!)
        // Write the `case` in your reducer for toggling the completed property
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
        // STEP 5 - Clearing completed todos

        // Build a function that will dispatch an action to filter out any completed todos
        // Invoke this new function when you click on a "Clear completed" button
        // Write the `case` in your reducer for filtering completed todos
        case "CLEAR":
            return{
                toDoList:state.toDoList.filter(task => {
                    return task.completed !== true;
                })
            }
        default:
            return state;
    }
}