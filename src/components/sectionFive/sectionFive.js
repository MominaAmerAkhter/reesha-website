import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './sectionFive.css'
import twoIpads from "../../images/two-ipads.png"

const SectionFive = () => {

    return(
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'row', flexWrap: { xs: 'wrap', md: 'nowrap' }, paddingBottom: '50px', justifyContent: { xs: 'center', md: 'space-between' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: { xs: '0%', sm: '5%' } }}>
                <Typography
                    variant="h2"
                    sx={{
                        background: 'linear-gradient(90deg, #ff5e3a, #ff9900)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 400,
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                        textAlign: 'left',
                        paddingTop: 10,
                        paddingBottom: 5,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    }}
                    gutterBottom>
                    تواصل معنا
                </Typography>
                <Box sx={{ display: 'flex', paddingBottom: 5, alignItems: 'center' }}>
                    <Box sx={{ height: '50px', width: '4px', backgroundColor: 'white', marginRight: 2 }} />
                    <Box>
                        <Typography variant="h6" sx={{ color: '#39b5e0' }}>For More Info Call</Typography>
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>+1234567890</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', paddingBottom: 5, alignItems: 'center' }}>
                    <Box sx={{ height: '50px', width: '4px', backgroundColor: 'white', marginRight: 2 }} />
                    <Box>
                        <Typography variant="h6" sx={{ color: '#39b5e0' }}>Email Address</Typography>
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>resha@gmail.com</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', paddingBottom: 5, alignItems: 'center' }}>
                    <Box sx={{ height: '50px', width: '4px', backgroundColor: 'white', marginRight: 2 }} />
                    <Box>
                        <Typography variant="h6" sx={{ color: '#39b5e0' }}>Website</Typography>
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>resha.com</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ position: { xs: 'relative', md: 'absolute' }, right: 0, bottom: 0, margin: { xs: '20px 0px 20px 20px', md: '0' } }}>
                <img size="small" src={twoIpads} alt="Two iPads" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
        </Box>
    )
} 

export default SectionFive