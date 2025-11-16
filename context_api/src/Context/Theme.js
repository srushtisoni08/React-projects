import { createContext, useContext } from 'react';

const ThemeContext  = createContext(
    {
        theme: "light",
        LightMode: () =>{},
        DarkMode: () => {},
        
    }
)
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}