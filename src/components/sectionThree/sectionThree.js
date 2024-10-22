import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box, Divider} from '@mui/material';
import './sectionThree.css'
import progress from "../../images/progress.png"
import '../../css/parentClass.css'


const SectionThree = () => {

    return(
        <Box class="bottom-margin-of-body">
            <Box class="header">
                <Divider class="divider"/>
                <Box class='background-wrapper'>
                    <Typography
                        variant="h2"
                        sx={{
                            background: 'linear-gradient(90deg, #ff5e3a, #ff9900)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 400,
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                            textAlign: 'center',
                        }}
                        gutterBottom>
                        تابع مسار التعليم
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5
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