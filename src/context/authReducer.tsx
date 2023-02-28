import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'signIn'}     //al signo | se le dice "tuberia"
    | { type: 'changeFavIcon', payload:string}     // payload = informacion adicional que se le da a la accion
    | { type: 'logOut'}
    | { type: 'changeUsername', payload:string}

//Genera Estado
export const authReducer = (state:AuthState, action:AuthAction):AuthState => {
    switch (action.type) {
        case "signIn":
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        case "changeFavIcon":
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case "logOut":
            return{
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case 'changeUsername':
            return{
                ...state,
                username: action.payload
            }

        default:
            return state;
    }
}