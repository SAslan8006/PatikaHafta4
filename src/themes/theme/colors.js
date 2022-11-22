// Colors palette source https://flatuicolors.com/palette/defo

const SUN_FLOWER = '#f1c40f';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';

const common = {
    PRIMARY: SUN_FLOWER,
    SUCCESS: EMERALD,
    ERROR: ALIZARIN,
};

const light = {
    ...common,
    BACKGROUND: CLOUDS,
    TEXT: MIDNIGHT_BLUE,
    TEXT_SECONDARY: ASBESTOS,
};

const dark = {
    ...common,
    BACKGROUND: MIDNIGHT_BLUE,
    TEXT: CLOUDS,
    TEXT_SECONDARY: SILVER,
};
export const LightTheme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    }
}

export const DarkTheme = {
    dark: true,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(0, 0, 0)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
export const colors = { light, dark };