import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { CardComponent } from "../../component/Card";
import Logo from "../../assets/Logo.jpg";
import Doctor from "../../assets/Doctor.png";
import User from "../../assets/User.png";
import Calendar from "../../assets/Calendario.png";
import { Link } from "react-router-dom";
import cards from './tabs.json'

export const Home = () => {
  let img = {Doctor,User,Calendar};
  return (
    <Container sx={{ height: "100%" }}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12}>
          <img style={{width:'215px'}} src={Logo} alt="Logo" />
          <Typography component='h2' variant="h6" >Gerenciando sua clínica</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={2}>
              {cards.map(el=>{
                return(
                    <Grid item xs={4}>
                      <Link style={{textDecoration:'none'}} to={el.path}>
                        <CardComponent {...el} icon={img[el.icon]} />
                      </Link>
                    </Grid>
                )
              })}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};
