import React from 'react'
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
// @ts-ignore 
import { A } from 'hookrouter';
import Polygon1 from '../../../Assets/polygon1';
import Ploygon2 from '../../../Assets/polygon2';
import Ploygon3 from '../../../Assets/polygon3';
import Polygon4 from '../../../Assets/polygon4';
import Polygon5 from '../../../Assets/polygon5';
import Polygon1red from '../../../Assets/polygon1red';
import Polygon2red from '../../../Assets/polygon2red';
import Polygon3red from '../../../Assets/polygon3red';
import Polygon4red from '../../../Assets/polygon4red';
import Polygon5red from '../../../Assets/polygon5red';




const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '24px', color: '#1E293B', lineHeight: "24px", marginBottom: '16px' }
const typo2 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', marginBottom: '16px' }
const typo3 = { font: 'Archivo', fontWeight: '600px', fontSize: '24px', color: '#C22522', lineHeight: '24px', }
const typo4 = { font: 'Archivo', fontWeight: '400px', fontSize: '16px', color: '#475569', lineHeight: '24px', }

const badgesToDisplay = [
   {
      icon: { normal: <Polygon1 />, hover: <Polygon1red /> },
      heading: "12+",
      desc: "Years of Experience",

   },
   {
      icon: { normal: <Ploygon2 />, hover: <Polygon2red /> },
      heading: "100%",
      desc: "Client Satisfaction",

   },
   {
      icon: { normal: <Ploygon3 />, hover: <Polygon3red /> },
      heading: "50+",
      desc: "Countries we Served",

   },
   {
      icon: { normal: <Polygon4 />, hover: <Polygon4red /> },
      heading: "40+",
      desc: "Dedicated employees",

   },
   {
      icon: { normal: <Polygon5 />, hover: <Polygon5red /> },
      heading: "100% ",
      desc: "Minimal Timelines",

   },

]


const AboutSection = () => {
   const [hoveredItem, setHoveredItem] = React.useState(-1);

   const isScreenSmall = useMediaQuery('(max-width:500px)');

   return (
      <Grid container spacing={2} style={{ justifyContent: 'center', }}>

         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ alignItems: isScreenSmall ? 'center' : 'normal', display: 'flex', flexDirection: 'column' }}>
            <Typography style={typo1} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               Transforming your vision into a viable digital solution.
            </Typography>
            <Typography style={typo2} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               Kryptohive is a renowned company that specializes in providing advanced information technology solutions to clients worldwide. Our team of experts is dedicated to developing innovative and creative products and services that cater to the unique needs of our clients.
            </Typography>
            <Typography style={typo2} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               Our web 2.0 has wide range of services includes web design and development, tailor-made applications, ERPs,CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting, and internet portal management. Our web 3.0 also has wide range of services includes Decentralized aplication development, Blockchain development and integration. Smart contract development, IoT integration, web 3.0 project management and implementation and web 3.0 consulting and strategy development.
            </Typography>
            <Typography style={typo2} sx={{ textAlign: isScreenSmall ? "center" : 'normal' }}>
               We take pride in the quality of our work, and our satisfied clients around the world are a testament to our commitment to delivering exceptional services. As a technology leader, we are constant ly exploring new avenues to expand our expertise and export quality software worldwide
            </Typography>

            <Button variant="contained" size='large' component={A} href={'/contact-us'} sx={{
               width: isScreenSmall ? "100%" : "30%", borderRadius: '6px', textTransform: 'none', backgroundColor: "#C22522", marginTop: '24px', '&:hover': {
                  backgroundColor: '#C22522',
                  borderColor: '#C22522',
               }
            }}  >
               Get&nbsp;in&nbsp;touch
            </Button>

         </Grid>

         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>

               {badgesToDisplay.map((data, index) => (
                  <Grid item xs={6} sm={2.4} md={4} lg={4} xl={4}
                     style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}>

                     <div onMouseEnter={() => { setHoveredItem(index) }} onMouseLeave={() => { setHoveredItem(-1) }}>
                        {hoveredItem === index ? data.icon.hover : data.icon.normal}
                     </div>

                     <Typography style={{ ...typo3, cursor: 'pointer' }}>{data.heading}</Typography>
                     <Typography style={{ ...typo4, cursor: 'pointer' }}>{data.desc}</Typography>

                  </Grid>
               ))}


            </Grid>
         </Grid>
      </Grid >
   )
}

export default AboutSection