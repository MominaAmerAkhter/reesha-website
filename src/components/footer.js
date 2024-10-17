import * as React from 'react'
import { Box, Typography, Link } from '@mui/material';
import FooterImage from "../images/footer-element.png"
import logo from '../images/logo.png'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
        sx={{
            backgroundColor: '#073c4f',
            color: 'white',
            background: 'linear-gradient(180deg, rgba(23, 208, 220, 0.17) 0%, rgba(0, 0, 0, 0) 100%)',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '5%',
            paddingTop: '2%',
        }}
    >
        <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <GoogleIcon sx={{ mx: 1 }} />
            <TwitterIcon sx={{ mx: 1 }} />
            <InstagramIcon sx={{ mx: 1 }} />
            <LinkedInIcon sx={{ mx: 1 }} />
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: { xs: '10px', sm: '2%' },
                paddingTop: '2%',
            }}
        >
            <Link href="#" color="inherit" underline="hover" display="block">
                Home
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
                Lesson
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
                About Us
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block">
                Contact Us
            </Link>
        </Box>
        <Box
            sx={{
                paddingTop: '2%',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" sx={{ paddingBottom: '0%' }}>
                Copyright © 2021. Crafted with love.
            </Typography>
            <img style={{ display: { xs: 'none', md: 'block' }, maxWidth: '100%', height: 'auto' }} src={FooterImage} alt="Footer Decoration" />
        </Box>
    </Box>

  );
};

export default Footer;
