const intialState = {
    tasks:[]
}

const taskreducers = (state=intialState, action) =>{
    switch(action.type){
        case 'ADD_Task':
            return{
                ...state,
                tasks: [...state.tasks ,action.payload]
    }
        case 'Delete_Task':
            return{
                ...state,
                tasks: [state.tasks.filter((task) => {task.id !== payload.id})]
            }
    }
}
