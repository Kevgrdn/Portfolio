import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MoonIcon, SunIcon } from "lucide-react";
import { Link, Stack, Switch, useTheme } from "@mui/material";

type Props = {
  setMode: (mode: "light" | "dark") => void;
};

export const Navbar: React.FC<Props> = ({ setMode }) => {
  const [checked, setChecked] = React.useState(true);

  const theme = useTheme();

  const handleChangeThemeMode = () => {
    theme.palette.mode === "light"
      ? (theme.palette.mode = "dark")
      : (theme.palette.mode = "light");

    setMode(theme.palette.mode);
  };


  return (
    <AppBar
      sx={{
        bgcolor: theme.palette.background.default,
        border: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack>
            <Typography variant="h6">Portfolio</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Link  sx={{textDecoration: "none"}} href="/">
              <Typography variant="subtitle1" color={"initial"}>
                Home
              </Typography>
            </Link>
            <Link sx={{textDecoration: "none"}} href="/about">
              <Typography variant="subtitle1" color={"initial"}>
                A propos
              </Typography>
            </Link>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems={"center"}>
            <MoonIcon size={16} />
            <Switch
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
                handleChangeThemeMode();
              }}
            />
            <SunIcon color="yellow" size={16} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
