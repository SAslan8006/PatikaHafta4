//multiple theme
import store from '~/store';

import * as palettes from '~/themes/palettes';

export const getColor = c => palettes[store.getState().theme.theme][c];
export const getColors = () => palettes[store.getState().theme.theme];

//single theme
// import { light } from '~/themes/palettes';

// export const getColor = c => light[c];
// export const getColors = () => light;
