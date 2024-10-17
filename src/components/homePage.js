import * as React from 'react';
import NavBar from './navBar'
import Footer from './footer'
import '../css/homePage.css'
import ipad from '../images/ipad.png'
import english from "../images/english.png"
import math from "../images/math.png"
import geo from "../images/geo.png"
import islamic from "../images/islamic.png"
import science from "../images/science.png"
import arabic from "../images/arabic.png"
import progress from "../images/progress.png"
import orangeButton from "../images/orangeButton.png"
import backgroundImage from "../images/background.png"
import hero from "../images/hero1.png"
import twoIpads from "../images/two-ipads.png"
import HeroSection from '../images/hero-ipad-background.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch'
import Grid2 from '@mui/material/Grid2'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const HomePage = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };    

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));

    return(
        <div>
            <NavBar/>
            <div className='mainArea'>
                {/* first block */}
                <Box className="background">
                    <Box >
                        <Typography 
                            variant="h1" 
                            sx={{
                                background: 'linear-gradient(90deg, #ff5e3a, #ff9900)', 
                                WebkitBackgroundClip: 'text', 
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 400,
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', 
                                textAlign: { xs: 'center', md: 'right' },
                                marginRight: { xs: 0, md: '50%' },
                                paddingTop: 10,
                                fontSize: { xs: '2rem', md: '4rem' }, 
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
                                top: '-8%',
                                left: "45%",
                                zIndex: 2,
                                maxWidth: '50%'
                            }}
                        />
                    </Box>
                    <Box sx={{display: { xs: 'flex', md: 'none' },}} >
                        <img
                                // className='ipad-img'
                                src={ipad}
                                alt="Avatar"
                                style={{
                                    // position: 'absolute',
                                    marginLeft: '10%',
                                    marginRight: '20%',
                                    marginTop: '2%',
                                    zIndex: 1,
                                    maxWidth: '80%'
                                }}
                            />
                    </Box>
                </Box>

                {/* second block --> alduroos */}
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


                {/* third block --> progress bar */}
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


                {/* fourth block --> subscription */}
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
                                <Typography variant="h4" component="div"> {/* Adjust variant for smaller screens */}
                                    شهر ١
                                </Typography>
                                <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                                <Typography 
                                    variant="subtitle1" 
                                    color="text.secondary"
                                    sx={{ lineHeight: { xs: 2, md: 4 } }}    
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
                                <Typography variant="h4" component="div"> {/* Adjust variant for smaller screens */}
                                    شهر ١
                                </Typography>
                                <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                                <Typography 
                                    variant="subtitle1" 
                                    color="text.secondary"
                                    sx={{ lineHeight: { xs: 2, md: 4 } }}    
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
                                <Typography variant="h4" component="div"> {/* Adjust variant for smaller screens */}
                                    شهر ١
                                </Typography>
                                <hr style={{ borderColor: 'rgba(242, 186, 52, 1)' }} />
                                <Typography 
                                    variant="subtitle1" 
                                    color="text.secondary"
                                    sx={{ lineHeight: { xs: 2, md: 4 } }}    
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
                    </Box>                           
                </Box>
                
                {/* fifth block --> more info */}
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


                {/* sixth block --> footer */}
                <Footer/>

                

            </div>

        </div>
    )
}


export default HomePage;