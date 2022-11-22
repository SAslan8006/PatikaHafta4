import React from 'react';
import { colors } from '~/themes/theme/colors';
import { typography } from '~/themes/theme/typography';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [isLightTheme, setLightTheme] = useState(true);
    const toggleTheme = () => setLightTheme(previousState => !previousState);

    const theme = {
        colors: isLightTheme ? colors.light : colors.dark,
        typography,
        toggleTheme,
        isLightTheme,
    };

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;