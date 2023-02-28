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
        dispatch( {type: 'changeFavIcon', payload: iconName})
    }


    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon
        }}>
            {children}

        </AuthContext.Provider>
    )
}