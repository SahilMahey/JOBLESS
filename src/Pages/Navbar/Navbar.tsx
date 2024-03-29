import * as React from 'react';
import dayjs from 'dayjs';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DemoContainer} from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DateTimeValidationError } from '@mui/x-date-pickers/models';
import { NavLink, Link } from "react-router-dom";


const pages = ['Home', 'About'];
const start = dayjs('2020-01-01T00:00:00.000');
const tomorrow = dayjs().add(1, 'day');
const Navbar = (props: any) => {
  

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const [error, setError] = React.useState<DateTimeValidationError | null>(null);
    
    const errorMessage = React.useMemo(() => {
      
      switch (error) {
       
        case 'maxDate':{
          return 'You can\'t select a date after today!';
        }
        case 'minDate': {
          return 'Please select a date after 2019';
        }
        case 'invalidDate': {
          return 'The  entered value is not a valid.';
        }
        default: {
          return '';
        }
      }
    }, [error]);

    const handle_name = (event :any)=>
    {
      props.setModaldata(
        {name:event.target.value})
    }
    const handle_company = (event: any)=>
    {
      
      props.setModaldata(
        {company:event.target.value})
    }

    const handle_date = (newDate)=>
    {
      
      props.setModaldata(
        {date:newDate})
    }
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    }
   
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleClickOpen = () => {
      props.setModal(true);
    };
    
    const handleClose = () => {
      props.setModaldata(
        {
          'name': '',
          'company':'',
          'date': new Date()
        })
      props.setModal(false);
      props.setUpdate(false)
    };

   
  
  return (

    <>
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        
        <Link to="/"style={{ 
            textDecoration: 'none' }}><Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
        JOBLESS
        </Typography></Link>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} >
                <NavLink to={page} style={{ 
            textDecoration: 'none' }}><Typography textAlign="center">{page}</Typography></NavLink>
                </MenuItem>
            ))}
          </Menu>
        </Box>
        
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <Link to="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
              textDecoration: 'none' }}>
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOBLESS
          </Typography>
        </Link>
      </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <NavLink to={page} key={page}style={{ 
            textDecoration: 'none' }}><Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block',textDecoration: 'none' }}
            >
              {page}
            </Button></NavLink>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open LinkedIn profile">
        <Link to="https://www.linkedin.com/in/sahil-mahey-029b901ba/" target="_blank" rel="noopener noreferrer" >
          <IconButton  sx={{ p: 0, '& svg': { fontSize: 32 }, '& > *:not(:last-child)': { marginRight: 2 } }}>
            <LinkedInIcon />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="Open GitHub profile">
        <Link to="https://github.com/SahilMahey" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ p: 0, '& svg': { fontSize: 32 }, '& > *:not(:last-child)': { marginRight: 2 } }}>
            <GitHubIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
      </Toolbar>
    </Container>
   
  </AppBar>
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button variant="outlined" sx={{ my: 5, fontSize: 20}} onClick={handleClickOpen}>
      <AddIcon />
      </Button>
      {props.modal &&  <React.Fragment>
      <Dialog
        open={props.modal}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async(event: React.FormEvent<HTMLFormElement>) => {
            
            
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            if (props.update)
            {
              props.change_data(formJson);
            }
            else
            {
              props.add_array(formJson);
            }
            handleClose()
            
           
          },
  }}>
        <DialogTitle>REJECTION INFO</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Name"
            label="Job Name"
            fullWidth
            variant="standard"
            value = {props.modaldata.name|| '' }
            onChange={handle_name}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Company"
            name="Company"
            label="Company Name"
            fullWidth
            variant="standard"
            value = {props.modaldata.company || ''}
            onChange={handle_company}
          />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker','TimePicker']}>
          <DateField required name="Date" label="Date" value = {dayjs(props.modaldata.date)} onChange = {handle_date} onError={(newError) => setError(newError)}
          slotProps={{
            textField: {
              helperText: errorMessage,
            },
          }}
          minDate={start}
          maxDate={tomorrow}
          /> 
          </DemoContainer>
    </LocalizationProvider>
   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {<Button type="submit" disabled={(error ) ? true : false} >Submit</Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>}
    </Box>
  </>
  )
}

export default Navbar