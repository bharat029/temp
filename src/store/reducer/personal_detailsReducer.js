import personal_details from '../../pages/personal_details'

const initState = { personal_details }

const personal_detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_PERSONAL_DETAILS":
            if(action.details){
                return {
                    personal_details: action.details
                }
            }
            return state
        default: return state
    }
}

export default personal_detailsReducer