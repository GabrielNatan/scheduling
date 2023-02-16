import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const FormDoctor = ()=>{
    const currencies = [{value:'um',label:'Um'},{value:'dois',label:'Dois'}]
    return(
        <form style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <Box sx={{display:'flex', flexDirection:'column',gap:2}}>
                <Typography component='h2' variant="h5">Profissional</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            defaultValue="EUR"
                            helperText="Please select your currency"
                            >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic3" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column',gap:2}}>
                <Typography component='h2' variant="h5">Contatos</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic2" label="Outlined" variant="outlined" />
            </Box>
            
            <Box sx={{display:'flex', flexDirection:'column',gap:2}}>
                <Typography component='h2' variant="h5">Endereço profissional</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic2" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic3" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            defaultValue="EUR"
                            helperText="Please select your currency"
                            >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic3" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>
                <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
                    <Button sx={{height:50}} variant="contained">Concluir cadastro</Button>
                    <Button sx={{height:50}} variant="outlined">Cancelar</Button>
                </Box>
            </Box>
        </form>
    )
}