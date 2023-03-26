import { useContext, createContext, useState } from "react";

export const UiContext = createContext();


export const UiProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);


    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <UiContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </UiContext.Provider>
    );
};

export const useUi = () => {
    const { isDark, toggleTheme } = useContext(UiContext);
    return { isDark, toggleTheme };
}


