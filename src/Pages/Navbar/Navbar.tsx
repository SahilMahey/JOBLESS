import * as React from 'react';
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
import { NavLink, Link } from "react-router-dom";

const pages = ['Home', 'About'];
const Navbar = (props: any) => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    }
   
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
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
      <Button variant="outlined" sx={{ my: 5, fontSize: 20}} onClick={() => props.add_array()}>
      <AddIcon />
      </Button>
    </Box>
  </>
  )
}

export default Navbar