import * as React from 'react';
import NavBar from '../navbar/navBar'
import Footer from '../footer/footer'
import './homePage.css'
import twoIpads from "../../images/two-ipads.png"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SectionOne from '../sectionOne/sectionOne';
import SectionTwo from '../sectionTwo/sectionTwo';
import SectionThree from '../sectionThree/sectionThree';
import SectionFour from '../sectionFour/sectionFour';
import SectionFive from '../sectionFive/sectionFive';

const HomePage = () => {

    return(
        <div>
            <NavBar/>
            <div className='mainArea'>
                {/* first block */}
                <SectionOne/>

                {/* second block --> alduroos */}
                <SectionTwo/>

                {/* third block --> progress bar */}
                <SectionThree/>                
                
                {/* fourth block --> subscription */}
                <SectionFour/>
                
                {/* fifth block --> more info */}
                <SectionFive/>

                <Footer/>
            </div>

        </div>
    )
}


export default HomePage;