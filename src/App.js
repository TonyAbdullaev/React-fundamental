import React, {useEffect} from 'react';
import './styles/App.css';

import AppRouter from "./components/AppRouter";
import AuthProvider from "./hoc/AuthProvider";

const App = () => {

    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};

export default App;