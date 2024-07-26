import { createTheme } from "@mui/material/styles";

// Définir les couleurs et autres styles
export const theme = createTheme({
  palette: {
    primary: {
      main: "#415a77", // Couleur principale
      dark: "#415a77",
      light: "#d5dee8",
    },
    secondary: {
      main: "#eff0ee",
      dark: "#e0e1dd",
      light: "#f9f9f8"
       // Couleur secondaire
    },
    background: {
      default: "#1B263B",
    },
    mode: "dark",

    // Autres options de la palette comme error, warning, etc.
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    // Autres configurations de la typographie
  },
  // Vous pouvez ajouter d'autres configurations comme shadows, spacing, etc.
});



