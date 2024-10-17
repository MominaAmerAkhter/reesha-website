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
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.png'
import "@fontsource/andada-pro/400.css"; // Specify weight

const pages = ['تواصل معنا', 'المراحل', 'عن ريشة', 'الرئيسية'];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
        position="static"
        // className='navBar'
        sx={{
            background: '#002B34',
            // background: 'linear-gradient(90deg, rgba(0, 43, 52, 1) 0%, rgba(0, 127, 154, 0) 100%)',
            filter: 'drop-shadow(0px 3.96694px 53.6529px rgba(0, 0, 0, 0.33))',
            justifyContent: 'space-between',
            }}
            >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            
            {/* Logo */}
            <Box
                sx={{
                    marginTop: 2,
                    display: { xs: 'none', md: 'flex' }, //this line hides the logo for smaller screens
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { xs: '100px', md: '150px' } // Responsive sizing for logo 
                }}>
                <img src={logo} alt="logo"/>    
            </Box>
            {/* Mobile  */}
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
                sx={{display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography 
                            sx={{ 
                                fontFamily: 'Andada Pro',
                                fontSize: { xs: '16px', md: '20px' },
                                fontWeight: 400,
                                textAlign: 'left', 
                                }}>

                            {page}
                        </Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>

            <Box sx={{ justifyContent:"center", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block',fontFamily: 'Andada Pro',fontSize: 20, mx: 3 }}
                >
                    {page}
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Button 
                    variant="contained"
                    size='large'
                    sx={{
                        background: 'linear-gradient(180deg, #FFAB24 0%, #FF6E05 100%)',
                        borderRadius:  '31px',
                        fontFamily: 'Andada Pro',
                        fontSize: { xs: '16px', md: '20px' },
                        fontWeight: 400,
                    }}
                    >!ابدأ اللعب
                </Button>
            </Box>
            </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
