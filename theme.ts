// file that has my customised theme to sanity studio
import { buildLegacyTheme } from "sanity";

// add theme on sanity config
const props = {
  "--mid-whitesmoke": "#f5f5f5",
  "--mid-black": "#000000",
  "--mid-yellow": "#f6c324",
  "--mid-purple": "#4d0679",
  "--mid-white": "#fcfcfc",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors*/
  "--black": props["--mid-black"],
  "--white": props["--mid-whitesmoke"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--mid-whitesmoke"],
  "--component-text-color": props["--mid-black"],

  // Brand
  "--brand-primary": props["--mid-yellow"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--mid-yellow"],
  "--default-button-success-color": "#4BB543",
  "--default-button-danger-color": "#F32013",
  "--default-button-warning-color": "#ff6700",

  // State
  "--state-info-color": props["--mid-purple"],
  "--state-success-color": "#4BB543",
  "--state-warning-color": "#FF6700",
  "--state-danger-color": "#F32013",

  // Navbar
  "--main-navigation-color": props["--mid-purple"],
  "--main-navigation-color--inverted": props["--mid-whitesmoke"],

  "--focus-color": props["--mid-whitesmoke"],
});
