import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './sectionThree.css'
import progress from "../../images/progress.png"


const SectionThree = () => {

    return(
        <Box>
            <Box>
                <Typography
                    variant="h2"
                    sx={{
                        background: 'linear-gradient(90deg, #ff5e3a, #ff9900)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 400,
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                        textAlign: 'center',
                        paddingTop: 10,
                        paddingBottom: 5,
                        // fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }, 
                    }}
                    gutterBottom>
                    تابع مسار التعليم
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <img 
                    sizes='small' 
                    src={progress} 
                    alt="Progress" 
                    style={{
                        width: '100%',
                        maxWidth: '80%', // Limit max width
                        height: 'auto',
                    }} 
                />
            </Box>
        </Box>
    )
} 

export default SectionThree