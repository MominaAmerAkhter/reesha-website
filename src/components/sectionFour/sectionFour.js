import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './sectionFour.css'
import Switch from '@mui/material/Switch'
import Grid2 from '@mui/material/Grid2'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';import orangeButton from "../../images/orangeButton.png"


const SectionFour = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };    
    
    return(
        <Box
            sx={{paddingBottom: '20%'}}>
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
                الاشتراكات   
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
            {/* switch   */}
            <Grid2 component="label" container alignItems="center" spacing={1}>
                <Grid2 item
                    sx={{
                        color:'rgba(20, 115, 122, 1)',
                        fontWeight: 200,
                        fontSize: 25
                    }}
                >
                عضوية واحدة</Grid2>
                <Grid2 item>
                    <Switch
                    checked={checked} e
                    onChange={handleChange} 
                    value="checked" 
                    />
                </Grid2>
                <Grid2 item
                    sx={{
                    color:'rgba(247, 213, 74, 1)',
                    fontWeight: 200,
                    fontSize: 25}}
                    >٣ أعضاء</Grid2>
            </Grid2>
            </Box> 
            <Box
                sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap', // Ensure cards wrap on smaller screens
            }}>
                {/* Card 1 */}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(0deg, #45C2D1 -0.02%, #0E6E79 95.94%)',
                        borderRadius: 10,
                        height: { xs: 400, md: 500 }, 
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <CardContent>
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                            شهر ١
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="subtitle1"
                            color='rgba(247, 213, 74, 1)'
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                        >
                            1 Month Subscription
                            <br/>
                            3 Users Account
                            <br/>
                            Parents Control
                            <br/>
                            Daily Analytics
                        </Typography>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
                {/* Card 2 */}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(180deg, #FFB760 0%, #D84C16 100%)',
                        borderRadius: 10,
                        height: { xs: 400, md: 500 }, 
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <CardContent>
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                        ٣ أشهر
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="subtitle1" 
                            color="white"
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold"  }}    
                        >
                            3 Months subscription
                            <br/>
                            3 Users Account
                            <br/>
                            Parents Control
                            <br/>
                            Daily Analytics
                        </Typography>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
                {/* Card 3*/}
                <Card 
                    sx={{ 
                        my: 2, 
                        mx: 2,
                        background: 'linear-gradient(0deg, #45C2D1 -0.02%, #0E6E79 95.94%)',
                        borderRadius: 10,
                        height: { xs: 400, md: 500 },
                        width: { xs: 300, md: 350 }, 
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                    <CardContent>
                        <Typography variant="h4" color='white' component="div"> {/* Adjust variant for smaller screens */}
                        ٦ أشهر
                        </Typography>
                        <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                        <Typography 
                            variant="subtitle1" 
                            color='rgba(247, 213, 74, 1)'
                            sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                        >
                            6 Months subscription
                            <br/>
                            3 Users Account
                            <br/>
                            Parents Control
                            <br/>
                            Daily Analytics
                        </Typography>
                    </CardContent>

                    {/* Centered Button */}
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button 
                            style={{
                                position: 'absolute',
                                bottom: '-20px', 
                                left: '50%', 
                                transform: 'translateX(-50%)',
                            }}
                        >
                            <img src={orangeButton} alt="Orange Button" />
                        </Button>
                    </CardActions>
                </Card>
            </Box>                           
        </Box>
    )
} 

export default SectionFour