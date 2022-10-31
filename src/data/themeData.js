/* eslint-disable */
import {
  greenThemeLight,
  greenThemeDark,
  bwThemeLight,
  bwThemeDark,
  blueThemeLight,
  blueThemeDark,
  redThemeLight,
  redThemeDark,
  orangeThemeLight,
  orangeThemeDark,
  purpleThemeLight,
  purpleThemeDark,
  pinkThemeLight,
  pinkThemeDark,
  yellowThemeLight,
  yellowThemeDark,
} from "../theme/theme";
const items = [
  bwThemeLight,
  blueThemeLight,
  blueThemeDark,
  orangeThemeLight,
  orangeThemeDark,
  yellowThemeLight,
  yellowThemeDark,
];
let item = items[Math.floor(Math.random() * items.length)];
export const themeData = {
  theme: item,
};

// Choose theme from above
