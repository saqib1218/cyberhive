import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import myImageSmall from "./services.svg";
import CsPolygon1 from "./../../../Assets/Qasvg1";
import CsPolygon2 from "./../../../Assets/Uiux";
import CsPolygon3 from "./../../../Assets/Blockchain";
import CsPolygon4 from "./../../../Assets/Webdev";
import CsPolygon5 from "./../../../Assets/Mobiledev";
import CsPolygon6 from "./../../../Assets/Digitalmarket";
import CsPolygon7 from "../../../Assets/Cybersec";
import CsPolygon8 from "./../../../Assets/Ecommerce";
import CsPolygon9 from "../../../Assets/Devops";

import axios from "axios";
import CustomDialog from "../../DialogBox/Dialogbox";

const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
const[errorMessage,setErrorMessage]=useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [showDialog, setShowDialog] = useState<boolean>(false);

  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   // handle form submission here
  // };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Reset error messages
    setErrorEmail("");
    setErrorPhone("");
    setErrorSubject("")
setErrorName('')
setErrorMessage('')
    // Validation
    let isValid = true;
    if (!subject.trim()){
      isValid=false;
      setErrorSubject("Enter your subject")
    }
    if (!message.trim()){
      isValid=false;
      setErrorMessage("Enter your message")
    }
    if (!name.trim()) {
      isValid = false;
      setErrorName("Enter your name");
    }
    if (!email) {
      isValid = false;
      setErrorEmail("Enter an Email");
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      setErrorEmail("Enter a valid Email");
    }
    if (!phone.trim()) {
      isValid = false;
      setErrorPhone("Enter your phone number");
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)
    ) {
      isValid = false;
      setErrorPhone("Enter a valid phone number");
    }
    

    if (isValid) {
      try {
        const response = await axios.post("/messages", {
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
        });

        // Handle response as needed
        console.log(response.data);
        setShowDialog(true);
        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const btnwidth = useMediaQuery("(max-width:1500px");

  const fonts = useMediaQuery("(max-width:600px)");

  const [hoveredItem1, setHoveredItem1] = React.useState(false);
  const [hoveredItem2, setHoveredItem2] = React.useState(false);
  const [hoveredItem3, setHoveredItem3] = React.useState(false);
  const [hoveredItem4, setHoveredItem4] = React.useState(false);
  const [hoveredItem5, setHoveredItem5] = React.useState(false);
  const [hoveredItem6, setHoveredItem6] = React.useState(false);
  const [hoveredItem7, setHoveredItem7] = React.useState(false);
  const [hoveredItem8, setHoveredItem8] = React.useState(false);
  const [hoveredItem9, setHoveredItem9] = React.useState(false);
  const typo1 = {
    font: "Archivo",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#1E293B",
    lineHeight: "20px",
    marginBottom: "8px",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
  srcSet={`${myImageSmall} 400w`}
  sizes="(max-width: 600px) 400px, 800px"
  alt="My Image"
  style={{ width:"100%" }}
/>

        <div
          style={{
            position: "absolute",
            top: "40%",
          }}
        >
          <Typography
            style={{
              color: "#FFFF",
              fontSize: fonts ? "30px" : "50px",
              fontWeight: 600,
              font: "Archivo",
              //   maxWidth: "-webkit-fill-available",
            }}
          >
            Our Service
          </Typography>
        </div>
      </div>
      <div
        style={{
          marginTop: btnwidth ? "55px" : "110px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            font: "Archivo",
            fontSize: btnwidth ? "30px" : "36px",
            lineHeight: "100%",
          }}
        >
          Services We Deliver
        </Typography>
        <Typography
          style={{
            color: "#C22522",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "100%",
            font: "Archivo",
            marginTop: "16px",
          }}
        >
          Full Range of End to End Services
        </Typography>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}
      >
        <Grid container spacing={4} xl={10} lg={10} md={11} sm={11} xs={12}>
          ​
          <Grid
          
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem1 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem1(true);
              }}
              onMouseLeave={() => {
                setHoveredItem1(false);
              }}
            >
              <CsPolygon1 />
              <Typography
                style={{ ...typo1, color: hoveredItem1 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                Quality Assurance
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem1 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Ensuring that all software products and systems meet established
                quality standards through rigorous testing and analysis.
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem2 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem2(true);
              }}
              onMouseLeave={() => {
                setHoveredItem2(false);
              }}
            >
              <CsPolygon2 />
              <Typography
                style={{ ...typo1, color: hoveredItem2 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                UI/UX Designing
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem2 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Creating visually appealing and user-friendly interfaces for
                websites and applications, with a focus on enhancing the user
                experience (UX).
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem3 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem3(true);
              }}
              onMouseLeave={() => {
                setHoveredItem3(false);
              }}
            >
              <CsPolygon3 />
              <Typography
                style={{ ...typo1, color: hoveredItem3 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                Blockchain Development
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem3 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Developing decentralized applications (dApps), integrating
                blockchain technology into existing systems, and creating smart
                contracts.
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem4 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem4(true);
              }}
              onMouseLeave={() => {
                setHoveredItem4(false);
              }}
            >
              <CsPolygon4 />
              <Typography
                style={{ ...typo1, color: hoveredItem4 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                Web Development
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem4 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Building and maintaining websites and web applications using a
                variety of technologies and programming languages.
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem5 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem5(true);
              }}
              onMouseLeave={() => {
                setHoveredItem5(false);
              }}
            >
              <CsPolygon5 />
              <Typography
                style={{ ...typo1, color: hoveredItem5 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                Mobile App Development
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem5 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Designing and developing custom mobile applications for iOS and
                Android platforms.
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem6 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem6(true);
              }}
              onMouseLeave={() => {
                setHoveredItem6(false);
              }}
            >
              <CsPolygon6 />
              <Typography
                style={{ ...typo1, color: hoveredItem6 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                Digital Marketing
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem6 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Helping businesses improve their online presence and visibility
                through targeted advertising, search engine optimization (SEO),
                and other marketing strategies.
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem7 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem7(true);
              }}
              onMouseLeave={() => {
                setHoveredItem7(false);
              }}
            >
              <CsPolygon7 />
              <Typography
                style={{ ...typo1, color: hoveredItem7 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                Cyber Security
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem7 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Protecting businesses and their data from cyber threats by
                providing security assessments, vulnerability testing, and
                implementing robust security measures.
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem8 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem8(true);
              }}
              onMouseLeave={() => {
                setHoveredItem8(false);
              }}
            >
              <CsPolygon8 />
              <Typography
                style={{ ...typo1, color: hoveredItem8 ? "white" : "#475569" }}
                marginTop={"16px"}
                sx={{ textAlign: "center" }}
              >
                E-commerce and Marketplace Solutions
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem8 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Developing online stores and marketplaces for businesses to sell
                their products and services, with a focus on improving the
                customer experience.
              </Typography>
            </Paper>
          </Grid>
          ​
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            style={{ display: "grid", justifyItems: "center" }}
          >
            <Paper
              style={{
                maxWidth:"625px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px",
                backgroundColor: hoveredItem9 ? "#C22522" : " #F8FAFC",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                boxShadow: "none",
              }}
              onMouseEnter={() => {
                setHoveredItem9(true);
              }}
              onMouseLeave={() => {
                setHoveredItem9(false);
              }}
            >
              <CsPolygon9 />
              <Typography
                style={{ ...typo1, color: hoveredItem9 ? "white" : "#475569" }}
                marginTop={"16px"}
              >
                DevOps Services
              </Typography>
              <Typography
                style={{
                  font: "Archivo",
                  fontWeight: "400px",
                  fontSize: "16px",
                  color: hoveredItem9 ? "white" : "#475569",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                Streamlining software development and deployment processes
                through automation and collaboration between development and
                operations teams.
              </Typography>
            </Paper>
          </Grid>
          ​
        </Grid>
      </div>

      <div
        style={{
          marginTop: 110,
          flexDirection: "column",
          alignItems: "center ",
          display: "flex",
        }}
      >
        <Typography
          style={{
            font: "Archivo",
            fontWeight: 600,
            fontSize: btnwidth ? "30px" : "36px",
            lineHeight: "100%",
            textAlign: "center",
          }}
        >
          Talk to us and get your project moving
        </Typography>
        <Typography
          style={{
            marginTop: "16px",
            font: "Archivo",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "16px",
            color: "#C22522",
            textAlign: "center",
          }}
        >
          Contact us for free Consultation,time & cost for your Projects
        </Typography>
        <Grid container xs={10.5}style={{ display: "flex", justifyContent: "center"  }}>
          <Grid item lg={8} xl={5} md={8} xs={11} sm={10} sx={{display:"contents"}} >
            <Paper
              style={{
                
                borderRadius: "16px",
                backgroundColor: "#F8FAFC",
                boxShadow: "none",
                border: "2px solid #E2E8F0",
                marginTop: 32,
                maxWidth: 752,
                marginBottom: 64,
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 24,
                }}
              >
                <Typography
                  style={{
                    font: "Archivo",
                    fontWeight: 600,
                    fontSize: 24,
                    textAlign: "center",
                    marginBottom: "24px",
                  }}
                >
                  Drop us a message{" "}
                </Typography>
                <div>
                  {/* <div style={{ display: textdecor ? "initial" : "flex" }}> */}
                  <TextField
                    error={errorName !== ""}

                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      marginRight: "24px",
                      width: "100%",
                    }}
                    label="Your name"
                    variant="outlined"
                    helperText={errorName ? errorName : null}
                    FormHelperTextProps={{
                      style: {
                        background: "#F8FAFC",
                        padding: 0,
                        width: "100%",
                        marginLeft: "-1px",
                      },
                    }}
                    value={name}
                    onChange={(e) => {
                      setErrorName("");
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    error={errorEmail !== ""}
                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      width: "100%",
                    }}
                    label="Email"
                    variant="outlined"
                    helperText={errorEmail ? errorEmail : null}
                    FormHelperTextProps={{
                      style: {
                        background: "#F8FAFC",
                        padding: 0,
                        width: "100%",
                        marginLeft: "-1px",
                      },
                    }}
                    value={email}
                    onChange={(e) => {
                      setErrorEmail("");
                      setEmail(e.target.value);
                    }}
                  />
                  {/* </div> */}
                  {/* <div style={{ display: textdecor ? "initial" : "flex" }}> */}
                  <TextField
                    error={errorPhone !== ""}
                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      marginRight: "24px",
                      width: "100%",
                    }}
                    label="Phone Number"
                    variant="outlined"
                    helperText={errorPhone ? errorPhone : null}
                    FormHelperTextProps={{
                      style: {
                        background: "#F8FAFC",
                        padding: 0,
                        width: "100%",
                        marginLeft: "-1px",
                      },
                    }}
                    value={phone}
                    onChange={(e) => {
                      setErrorPhone("");
                      setPhone(e.target.value);
                    }}
                  />
                  <TextField
                    error={errorSubject !== ""}

                    style={{
                      marginBottom: 24,
                      backgroundColor: "#FFFF",
                      width: "100% ",
                    }}
                    label="Subject"
                    variant="outlined"
                    helperText={errorSubject ? errorSubject : null}
                    FormHelperTextProps={{
                      style: {
                        background: "#F8FAFC",
                        padding: 0,
                        width: "100%",
                        marginLeft: "-1px",
                      },
                    }}
                    value={subject}
                    onChange={(e) => {
                      setErrorSubject("");
                      setSubject(e.target.value);
                    }}
                  />
                  {/* </div> */}
                  <Textarea
                
                error={errorMessage !== ""}
                 minRows={4}
                 
                 placeholder="Lets us now what you are looking for"
                
                 variant="outlined"
                 value={message}
               
                 onChange={(e) => {
                   setErrorMessage("");
                   setMessage(e.target.value);
                 }}
               
                 sx={{ borderRadius: 5, marginBottom: 2,   borderColor: errorMessage ? "#d32f2f" : "",
                 borderWidth: errorMessage ? "2px" : "",     }}
               
               />
{errorMessage && <div style={{ color: "#d32f2f",marginTop:"-10px",fontSize:"0.75rem",marginBottom:20}}>{errorMessage}</div>}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                    <CustomDialog
                      title="Thank you for reaching out!!"
                      content=" Our team will get back to you as soon as possible. In the meantime, feel free to browse our website and learn more about our products/services. Thank you for your interest in our company! "
                      setOpen={setShowDialog}
                      open={showDialog}
                    />
                </div>

                <Button
                  type="submit"
                  //  sx={{ }}
                  variant="contained"
                  color="error"
                >
                  Let's Talk
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Services;
