export function addToFavListReducer(state = [], action) {
    switch (action.type) {
        case "ADD_TO_FAVLIST":
            return [...state, action.payload]
        default:
            return state;
    }
}

/*
case "REMOVE_FROM_FAVLIST":
            return state.filter(rent => rent.id !== action.payload)*/ 