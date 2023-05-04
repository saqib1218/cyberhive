import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CsPolygon1 from './../../../Assets/csPolygon1';
import CsPolygon2 from './../../../Assets/csPolygon2';
import CsPolygon3 from './../../../Assets/csPolygon3';
import CsPolygon4 from './../../../Assets/csPolygon4';
import CsPolygon5 from './../../../Assets/csPolygon5';
import CsPolygon6 from './../../../Assets/csPolygon6';
import CsPolygon7 from '../../../Assets/csPolygon7';
import CsPolygon8 from './../../../Assets/csPolygon8';
import CsPolygon9 from '../../../Assets/csPolygon9';

const cardsToDisplay = [
  {
    icon: <CsPolygon1 />,
    heading: "Quality Assurance",
    desc: "Ensuring that all software products and systems meet established quality standards through rigorous testing and analysis.",

  },
  {
    icon: <CsPolygon2 />,
    heading: "UI/UX Designing",
    desc: "Creating visually appealing and user-friendly interfaces for websites and applications, with a focus on enhancing the user experience (UX).",

  },
  {
    icon: <CsPolygon3 />,
    heading: "Blockchain Development",
    desc: "Developing decentralized applications (dApps), integrating blockchain technology into existing systems, and creating smart contracts.",

  },
  {
    icon: <CsPolygon4 />,
    heading: "Web Development",
    desc: "Building and maintaining websites and web applications using a variety of technologies and programming languages.",

  },
  {
    icon: <CsPolygon5 />,
    heading: "Mobile App Development",
    desc: "Designing and developing custom mobile applications for iOS and Android platforms.",

  },
  {
    icon: <CsPolygon6 />,
    heading: "Digital Marketing",
    desc: "Helping businesses improve their online presence and visibility through targeted advertising, search engine optimization (SEO), and other marketing strategies.",

  },
  {
    icon: <CsPolygon7 />,
    heading: "Cyber Security",
    desc: "Protecting businesses and their data from cyber threats by providing security assessments, vulnerability testing, and implementing robust security measures.",

  },
  {
    icon: <CsPolygon8 />,
    heading: "E-commerce and Marketplace Solutions",
    desc: "Developing online stores and marketplaces for businesses to sell their products and services, with a focus on improving the customer experience.",

  },
  {
    icon: <CsPolygon9 />,
    heading: "DevOps Services",
    desc: "Streamlining software development and deployment processes through automation and collaboration between development and operations teams.",

  },
]

const ServicesSection = () => {

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '20px', color: '#1E293B', lineHeight: "20px", marginBottom: '8px', }


  return (
    <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
      {cardsToDisplay.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }} key={index}>
          <Paper
            style={{
              maxWidth: '625px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '24px',
              backgroundColor: hoveredIndex === index ? '#C22522' : ' #F8FAFC',
              border: '1px solid #E2E8F0',
              boxShadow: 'none',
              borderRadius: '16px'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.icon}
            <Typography
              style={{
                ...typo1,
                color: hoveredIndex === index ? 'white' : '#475569',
                textAlign: 'center'
              }}
              marginTop={'16px'}
            >
              {data.heading}
            </Typography>
            <Typography
              style={{
                font: 'Archivo',
                fontWeight: '400px',
                fontSize: '16px',
                color: hoveredIndex === index ? 'white' : '#475569',
                lineHeight: '24px',
                textAlign: 'center'
              }}
            >
              {data.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default ServicesSection