import React, {useState, createContext} from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const signIn = (newUser, callback) => {
        setUser(newUser);
        callback();
    }

    const signOut = (callback) => {
        setUser(null);
        callback();
    }

    const valueProvider = {user, setUser, signIn, signOut}

    return (
        <AuthContext.Provider value={valueProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;