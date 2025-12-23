import { useState } from 'react';
import { AuthenticationContext } from './AuthenticationContect';
import type { AuthenticationProviderProps, User } from '../../types';

export default function AuthenticationProvider({children}: AuthenticationProviderProps) {
    const [user , setUser] = useState<User | undefined>()

    const login = (userData: User) => {
        setUser(userData)
    }    
    const logout = () => {
        setUser(undefined)
        console.log(user)
    }    


    return (
        <AuthenticationContext.Provider value={{user , login , logout}}>
            {children}
        </AuthenticationContext.Provider>
    );
}

