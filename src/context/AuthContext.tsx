import React, {createContext} from 'react'

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
}


//Crear el context
export const AuthContext = createContext( {} as AuthContextProps)

//Componente proveedor del estado
export  const AuthProvider = ({children}: any) => {
    return(
        <AuthContext.Provider value={{
            authState: AuthInitialState,
            signIn: () =>{}
        }}>
            {children}

        </AuthContext.Provider>
    )
}