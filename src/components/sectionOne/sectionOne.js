import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './sectionOne.css'
import ipad from '../../images/ipad.png'
import hero from "../../images/hero1.png"

const SectionOne = () => {

    return(
            <Box className="background">
                <Box >
                    <Typography 
                        variant="h2" 
                        sx={{
                            background: 'linear-gradient(90deg, #ff5e3a, #ff9900)', 
                            WebkitBackgroundClip: 'text', 
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 400,
                            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', 
                            textAlign: { xs: 'center', md: 'right' },
                            marginRight: { xs: 0, md: '50%' },
                            paddingTop: 10,
                            // fontSize: { xs: '2rem', md: '4rem' }, 
                        }}
                        gutterBottom>
                    متعة ومرح          
                    <br />
                    مع التعليم الالكترني         
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            color: '#fff', // White color for the text
                            fontWeight: 400,
                            textAlign: { xs: 'center', md: 'right' },
                            paddingRight: { xs: 0, md: '50%' },
                            fontSize: { xs: '1rem', md: '1.5rem' },                
                        }}>
                    تعلم بمرح ومتعة مع تطبيق ريشة الالكتروني للمراحل الدراسية من 
                    <br />
                    الصف الأول الى الصف الخامس الابتدائي
                    </Typography>
                    
                </Box>
                <Box sx={{display: { xs: 'none', md: 'flex' },}} >
                    <img
                        // className='ipad-img'
                        src={ipad}
                        alt="Avatar"
                        style={{
                            // position: 'absolute',
                            marginLeft: '10%',
                            marginRight: '20%',
                            marginTop: '2%',
                            zIndex: 1
                        }}
                    />
                    <img
                        // className='hero-img'
                        src={hero}
                        alt="Avatar"
                        style={{
                            position: 'absolute',
                            top: '0%',
                            left: "50%",
                            zIndex: 2,
                            maxWidth: '50%'
                        }}
                    />
                </Box>
                <Box sx={{display: { xs: 'flex', md: 'none' }, flexDirection: "column", alignItems: "center", justifyContent: "center"}} >
                    <img
                            // className='ipad-img'
                            src={ipad}
                            alt="Avatar"
                            style={{
                                marginTop: "2%",
                                maxWidth: '80%'
                            }}
                        />
                    <img
                        // className='hero-img'
                        src={hero}
                        alt="Avatar"
                        style={{
                            maxWidth: '50%'
                        }}
                    />
                </Box>

            </Box>
    )
} 

export default SectionOne