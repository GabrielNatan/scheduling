import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ChevronIcon from "@mui/icons-material/ChevronLeft";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

export const TopBar = ({ path, text, options }) => {
  const [open,setOpen] = useState(false)
  const [anchorEl,setAnchorEl] = useState(false)
  const [selected,setSelected] = useState('')
  const navigation = useNavigate()
  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget)
  };

  function handleClose(){
    setOpen(!open)
  }

  function goTo(){
    navigation(path)
  }

  return (
    <AppBar position="fixed">
      <Container>

        <Box
          sx={{display:'flex',justifyContent:'space-between', alignItems:'center',py:1}}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item alignItems="center">
              <IconButton onClick={goTo} sx={{ p: "5px" }} aria-label="menu">
                <ChevronIcon sx={{ color: "#FFF", fontSize: "40px" }} />
              </IconButton>
            </Grid>

            <Grid item alignItems="center">
              <Typography component="h6" variant="h5">
                {text}
              </Typography>
            </Grid>
          </Grid>
        
          
          <Grid item>
            <IconButton onClick={handleClick} sx={{ p: "5px" }} aria-label="menu">
              <MoreVertIcon sx={{ color: "#FFF", fontSize: "40px" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 30 * 4.5,
                  width: '20ch',
                },
              }}
            >
              {options.map((option) => (
                <Link to={option.path}>
                  <MenuItem key={option.label} selected={option.label === selected} onClick={()=>{setSelected(option.label);handleClose()}}>
                    {option.label}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Grid>
        
        </Box>

      </Container>
    </AppBar>
  );
};
