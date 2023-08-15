import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import GameContainer from "./Components/GameContainer";
import logo from "./puzzle-icon.svg"

function App() {
  return (
    <div>
      <Grid container={true} >
        <Grid item xs={12}>
          <Box sx={{ padding: "16px", display:'flex', justifyContent:'center' }}>
            <Typography variant="h4" align="center" >
              <img src={logo} alt="logo" style={{width:'30px', height:'26px', paddingRight:'2px'}} />
              Memory Card
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
        <Grid item xs={10} md={8} lg={6}>
          <GameContainer />
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
      </Grid>
    </div>
  );
}

export default App;