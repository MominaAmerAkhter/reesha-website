import { Outlet, Link } from "react-router-dom";
import * as React from 'react';
import { useState } from 'react';
import "@fontsource/aladin"; 
import logo from '../../images/logo.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import './signUp.css'



const Signup = () => {

    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleSignup = (e) =>{
        e.preventDefault();
    }

    return(
        <div className='mainArea'>
            <div>
                <img  className='logo' src={logo} alt="logo"/>    
            </div>
                <Card class='login-box' >
                    <CardContent sx={{ 
                            height: { xs: 750, md: 620 },
                            width: { xs: 250, md: 450 },  }}>
                        <Typography variant="h2" color='white' component="div">
                            !سجّل الآن مجاناً
                        </Typography>
                        <Typography 
                            variant="h5"
                            color='rgba(144, 144, 144, 1)'
                        >
                            ادخل البيانات التالية لانشاء حساب جديد، ابدء الان انه مجاني 
                        </Typography>
                        <br></br>
                        <form onSubmit={handleSignup}>
                            <div>
                                <Typography 
                                    variant="h6"
                                    color='rgba(152, 152, 152, 1)'
                                    // sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                                >
                                    الاسم الكامل
                                </Typography>
                                <TextField 
                                    class='textfield'
                                    variant="filled"
                                    required
                                    fullWidth
                                    value={username}
                                    size="small"
                                    onChange={(e)=> setUsername(e.target.value)} />
                            </div>
                            <div>
                                <Typography 
                                    variant="h6"
                                    color='rgba(152, 152, 152, 1)'
                                    // sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                                >
                                    البريد الالكتروني
                                </Typography>
                                <TextField 
                                    class='textfield'
                                    variant="filled"
                                    required
                                    fullWidth
                                    type="email"
                                    value={email}
                                    size="small"setEmail
                                    onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                            <div>
                                <Typography 
                                    variant="h6"
                                    color='rgba(152, 152, 152, 1)'
                                    // sx={{ lineHeight: { xs: 2, md: 4 }, fontWeight: "bold" }}    
                                >
                                    كلمة المرور
                                </Typography>
                                <TextField 
                                    class='textfield'
                                    variant="filled"
                                    required
                                    fullWidth
                                    type="password"
                                    value={password}
                                    size="small"
                                    onChange={(e)=> setPassword(e.target.value)} />
                            </div>
                                <Button 
                                    class='signup-button'
                                    fullWidth>
                                        تسجيل مستخدم جديد
                                </Button>
                        </form>
                        <br></br>
                        <Typography 
                            variant="h6"
                            color='rgba(144, 144, 144, 1)'  
                        >
                           بالضغط على تسجيل مستخدم جديد، فانت توافق على سياسة الاستخدام والخصوصية
                        </Typography>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row-reverse' },
                                justifyContent: {xs: 'center', md:'right'},
                                alignItems: {xs: 'center', md:'right'},
                                flexWrap: 'wrap', // Ensure cards wrap on smaller screens
                                gap: '55%'
                            }}>

                            <Typography sx={ {width: 'fit-content', textAlign: 'right'}} class='redirect-login-question' variant="subtitle1" color='white' component="div">
                            لديك حساب بالفعل؟
                            </Typography>

                            {/* <Typography class='redirect-login-question' variant="subtitle1" color='white' component="div">
                            لديك حساب بالفعل؟
                            </Typography> */}

                            <Button class='login-button'
                            >
                                <Link class='link-decor' to="/login"> !سجّل دخول الان</Link>   
                            </Button>
                            
                        </Box>

                    </CardContent>
                </Card>
            <br></br>
        </div>
    )
}


export default Signup;