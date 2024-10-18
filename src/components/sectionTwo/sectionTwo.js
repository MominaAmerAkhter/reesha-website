import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './sectionTwo.css'
import english from "../../images/english.png"
import math from "../../images/math.png"
import geo from "../../images/geo.png"
import islamic from "../../images/islamic.png"
import science from "../../images/science.png"
import arabic from "../../images/arabic.png"

const SectionTwo = () => {

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
                        paddingBottom: 5
                    }}
                    gutterBottom>
                    الدروس
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    columnGap: 10,
                    flexWrap: 'wrap',
                }}>
                <Button
                    size='small'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: { xs: '10px', sm: '15px', md: '20px' }, // for responsivess
                    }}>
                    <img
                        src={english} 
                        alt="icon"
                        style={{ marginBottom: '8px' }} // Space between image and text
                    />
                    <Typography variant="h4" sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' } }}>انجليزي</Typography>
                </Button>
                <Button
                    size='small'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: { xs: '10px', sm: '15px', md: '20px' },
                    }}>
                    <img
                        src={math} 
                        alt="icon"
                        style={{ marginBottom: '8px' }}
                    />
                    <Typography variant="h4" sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' } }}>رياضيات</Typography>
                </Button>
                <Button
                    size='small'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: { xs: '10px', sm: '15px', md: '20px' },
                    }}>
                    <img
                        src={arabic}
                        alt="icon"
                        style={{ marginBottom: '8px' }}
                    />
                    <Typography variant="h4" sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' } }}>عربي</Typography>
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    columnGap: 10,
                    flexWrap: 'wrap',
                }}>
                <Button
                    size='small'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: { xs: '10px', sm: '15px', md: '20px' },
                    }}>
                    <img
                        src={science} 
                        alt="icon"
                        style={{ marginBottom: '8px' }}
                    />
                    <Typography variant="h4" sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' } }}>علوم</Typography>
                </Button>
                <Button
                    size='small'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: { xs: '10px', sm: '15px', md: '20px' },
                    }}>
                    <img
                        src={islamic} 
                        alt="icon"
                        style={{ marginBottom: '8px' }}
                    />
                    <Typography variant="h4" sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' } }}>اسلامية</Typography>
                </Button>
                <Button
                    size='small'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: { xs: '10px', sm: '15px', md: '20px' },
                    }}>
                    <img
                        src={geo} 
                        alt="icon"
                        style={{ marginBottom: '8px' }}
                    />
                    <Typography variant="h4" sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' } }}>معرفة</Typography>
                </Button>
            </Box>
        </Box>
    )
} 

export default SectionTwo