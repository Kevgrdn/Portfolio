import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { Navbar } from "./layout/navbar/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  //   const theme = useTheme();

  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#A2D2FF", // Couleur principale
        dark: "#415a77",
        light: "#d5dee8",
      },
      secondary: {
        main: "#eff0ee",
        dark: "#e0e1dd",
        light: "#f9f9f8",
        // Couleur secondaire
      },
      background: {
        default: mode === "dark" ? "#CDB4DB" : "#CDB4DB",
      },
      mode,

      // Autres options de la palette comme error, warning, etc.
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      // Autres configurations de la typographie
    },
    // Vous pouvez ajouter d'autres configurations comme shadows, spacing, etc.
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar setMode={setMode} />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
