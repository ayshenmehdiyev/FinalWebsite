export const addToFavListReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_FAVLIST":
            if(!state.find(car=> car.id === action.payload.id))
                {
                return [...state, action.payload]
           }
        case "REMOVE_FROM_FAVLIST":
              return state.filter(car => car.id !== action.payload)
        default:
            return state;
    }
}

/*
case "REMOVE_FROM_FAVLIST":
            return state.filter(rent => rent.id !== action.payload)*/ 