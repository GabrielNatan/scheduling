import { ControlledAccordions } from '../../component/List'
import { Box, Button, Modal, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { TopBar } from "../../component/Topbar";
import { useState } from 'react';
import { FormDoctor } from '../../component/FormDoctor';
import { useLocation } from 'react-router-dom';

export const Default = () => {
  const [openModal,setOpenModal] = useState(false)
  const { pathname } = useLocation()
  const options = [{label:'Medicos',path:'/doctor'}, {label:'Pacientes',path:'/user'}, {label:'Marcar',path:'consultas'}];
  const handleClickModal = () => {
    setOpenModal(true);
  };
  
  function handleClose(){
    setOpenModal(!openModal)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFF',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal 
        keepMounted 
        open={openModal} 
        onClose={handleClose} 
        aria-labelledby="keep-mounted-modal-title" 
        aria-describedby="keep-mounted-modal-description"
      >
          
        <Box sx={style}>
          <FormDoctor/>
        </Box>

      </Modal>
      
      <TopBar path="/" text={pathname.replace('/','')} options={options}/>

      <Container sx={{mt:10,display:'flex',flexDirection:'column',gap:2}}>
        
        <Box sx={{py:1, display:'flex',justifyContent:'flex-end'}}>
            <Button 
              onClick={handleClickModal} 
              variant="contained">
                Cadastrar novo perfil
            </Button>
        </Box>
      
        <TextField fullWidth  placeholder="Pesquisar" id="fullWidth" />

        <ControlledAccordions/>

      </Container>
      
    </>
  );
};
