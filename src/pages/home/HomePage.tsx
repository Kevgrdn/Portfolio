import { Stack, Typography } from "@mui/material";


export const HomePage = () => {
  return (
    <Stack height={1} width={1} sx={{}} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h1" sx={{fontWeight: "400"}} >Bienvenue</Typography>
      <Typography variant="h1" >je suis</Typography>
      <Typography variant="h1" sx={{fontWeight: "600"}} >Kévin Grondin,</Typography>
      <Typography variant="h1" sx={{fontWeight: "400", overflow: "hidden"}} className={"typewriter"}>Développeur fullstack</Typography>
    </Stack>
  );
};
