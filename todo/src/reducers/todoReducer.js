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
        default:
            return state;
    }
}