import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box, Divider} from '@mui/material';
import './sectionThree.css'
import progress from "../../images/progress.png"
import '../../css/parentClass.css'


const SectionThree = () => {

    return(
        <Box>
            <Box class="header">
                <Divider 
                    sx={{
                    borderColor: 'rgba(255, 171, 36, 1)',
                    borderWidth: '1px',
                    width: '100%',
                    marginBottom: 2,
                    opacity: 0.9,
                    }} 
                />
                <Typography
                    variant="h2"
                    sx={{
                        background: 'linear-gradient(90deg, #ff5e3a, #ff9900)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 400,
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                        textAlign: 'center',
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