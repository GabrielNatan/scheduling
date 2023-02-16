import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export const CardComponent = ({color, icon,text})=>{
    return(
        <Box
            sx={{
                width: 300,
                height: 150,
                borderRadius:5,
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                fontWeight:'bold',
                textDecoration:'none',
                backgroundColor: color,
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <img src={icon} alt="icon"/>
            <Typography 
                variant='h4' 
                component='p' 
                sx={{color:'#FFF', textDecoration:'none'}}
            >
                {text}
            </Typography>
        </Box>
    )
}