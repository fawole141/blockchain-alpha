import React from "react";
import styles from "./style";
import Card from "@mui/material/Card";
import { createTheme, ThemeProvider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { John, Mobi, Damilola, Victor, Micheal, Blankman, Timilehin } from "../Assets";

const theme  =  createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f33316',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      paper: '#A983F2',
    },
  }
}
);

const Team = () => {
  const teamMembers = [
    {
      name: "John Olamide",
      title: "Founder and Business Development Lead",
      image: John
    },
    {
      name: "Oderinde Damilola",
      title: "Editor and Head of Operations",
      image: Damilola
    },
    {
      name: "Victor Fawole",
      title: "Technical Writer and Crypto Analyst",
      image: Victor
    },
    {
      name: "Edozie Chimaobi",
      title: "Smart-Contract, Frontend Developer and Technical Writer",
      image: Mobi
    },
    {
      name: "Micheal Fawole",
      title: "Full-stack Web Developer and Technical Writer",
      image: Micheal
    },
    {
      name: "Opeyemi Adewole",
      title: "Smart Contract Auditor & Technical Writer",
      image: Blankman
    },
    {
      name: "David Itelli",
      title: "DeFi Analyst and Technical Writer",
      image: Blankman
    },
    {
      name: "Timilehin Okunola",
      title: "Fullstack Developer and Technical Writer",
      image: Timilehin
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <div
      className={`${styles.paddingX} ${styles.paddingY} bg-veryDarkBlue text-testDark`}
      id="team"
    >
      <div className="flex justify-center items-center">
        <header className="font-bold matcha-font xs:text-[48px] text-[40px] xs:leading-[76.8px] text-paleWhite leading-[66.8px] w-full text-center mt-0">
          OUR TEAM
        </header>
      </div>

      <div
        className={`mt-12 mx-4 md:mx-0 duplicate-font flex flex-col gap-y-4 space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-6 md:space-x-6`}
      >
        {teamMembers.map((member) => <div key={member.name} className="md:ml-[24px]">
          <Card  sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={member.image}
                alt="John Image"
              />
              <CardContent sx={{height:"100px"}}>
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {member.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>)}
      </div>
    </div>
    </ThemeProvider>
    
  );
};

export default Team;
