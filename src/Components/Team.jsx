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
  return (
    <ThemeProvider theme={theme}>
      <div
      className={`${styles.paddingX} ${styles.paddingY} bg-veryDarkBlue text-testDark`}
      id="team"
    >
      <div className="flex justify-center items-center">
        <header className="font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] text-paleWhite leading-[66.8px] w-full text-center mt-0">
          OUR TEAM
        </header>
      </div>

      <div
        className={`mt-12 mx-4 md:mx-0 flex flex-col gap-y-4 space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-6 md:space-x-6`}
      >
        <div className="md:ml-[24px] shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={John}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  John Olamide
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Founder and Business Development Lead
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Damilola}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Oderinde Damilola
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Editor and Head of Operations
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Victor}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Victor Fawole
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Technical Writer and Crypto Analyst
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Mobi}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Edozie Chimaobi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Smart-Contract, Frontend Developer and Technical Writer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Micheal}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Micheal Fawole
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full-stack Web Developer and Technical Writer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Blankman}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Opeyemi Adewole
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Smart Contract Auditor & Technical Writer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Blankman}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  David Itelli
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DeFi Analyst and Technical Writer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="shadow-sm shadow-[#A983F2]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="300"
                image={Timilehin}
                alt="John Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Timilehin Okunola
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fullstack Developer and Technical Writer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
    </ThemeProvider>
    
  );
};

export default Team;
