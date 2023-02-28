import React, {createContext, useReducer} from 'react'
import { authReducer } from './authReducer';

//Define como luce ... Que informacion tendre
export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const AuthInitialState: AuthState = {
    isLoggedIn : false,
    username: undefined,
    favoriteIcon: undefined,
}

//Se usara para decirle a React como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    changeUsername: (username: string) => void;
}


//Crear el context
export const AuthContext = createContext( {} as AuthContextProps)

//Componente proveedor del estado
export  const AuthProvider = ({children}: any) => {
    const [authState, dispatch] = useReducer(authReducer, AuthInitialState)

    const signIn = () =>{
        dispatch({ type: 'signIn'})
    }

    const changeFavoriteIcon = ( iconName:string) => {
        dispatch( {type: 'changeFavIcon', payload: iconName}) // payload = informacion adicional que se le da a la accion
    }

    const logOut = () =>{
        dispatch({type: 'logOut'})
    }

    const changeUsername = (username:string) => {
        dispatch( {type: 'changeUsername', payload: username})
    }


    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUsername
        }}>
            {children}

        </AuthContext.Provider>
    )
}