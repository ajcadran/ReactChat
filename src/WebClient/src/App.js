import React, { createContext } from 'react';
import ChatDisplay from './Components/ChatDisplay/ChatDisplay';

export const AppContext = createContext();

export default function App() {
    return (
        <>
            <AppContext.Provider value={{ currentUsername: 'User1' }}>
                <ChatDisplay/>
            </AppContext.Provider>
        </>
    );
}