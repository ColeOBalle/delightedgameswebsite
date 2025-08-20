import Image from "next/image";
import styles from "./page.module.css";
import Icon from '@mui/material/Icon'
import TeamMember from "@/components/teamMember/teamMember";
import { Button, createTheme } from "@mui/material";
import './page.css'

const buttonTheme = createTheme({
  typography: {

  }
});

export default function Home() 
{
  return (
    <main>

      <section id="aboutUs">
        <div id="titleDiv">
          <h1 id="homeTitle"><Icon fontSize="inherit">flare</Icon> About Us <Icon fontSize="inherit">flare</Icon></h1>
          <h2 id="introParagraph">We’re a small team of college students passionate about creating story-driven games that inspire players to make a difference in the world.</h2>
        </div>
        <div className="imgDiv logo">
          <Image
            src="/logo.png"
            alt="DelightedGames Logo"
            fill
            objectFit="contain"
          />
        </div>
      </section>

      <h1>What We're Working On:</h1>

      <section id="projSection">
        <div className="imgDiv gameImg">
          <Image
            src="/Landed Updated Logo.png"
            alt="Landed logo"
            fill
            objectFit="contain"
          />
        </div>
        <div className="descDiv">
          <h3>Landed</h3>
          <p>Our first major project, Landed, invites you to navigate a world on the brink of demise—where every choice shapes the fate of those around you.</p>
          <Button variant="contained" sx={{
            fontSize: {
              xs: "0.75rem",
              sm: "1rem",
              md: "1.5rem",
              lg: "1.75rem"
            },
            padding: {
              xs: "10px",
              sm: "10px 15px",
              md: "10px 20px",
              lg: "10px 40px"
            }
            }}>Learn More
          </Button>
          <div></div>
        </div>
      </section>

      <section id="meetTheTeam">
        <h1>Meet the Team</h1>
        <div className="teamGrid">
            <TeamMember name="Amelia Trautman" role="Team Lead" email="ajt51805@gmail.com" portrait="/ameliatrautman.jpg"/>
            <TeamMember name="Cole O'Balle" role="Producer" email="cole.oballe@gmail.com" portrait="/coleoballe.jpg"/>
            <TeamMember name="Chris Sun" role="Lead Programmer" email="chrisun8@yahoo.com" portrait="/chrissun.jpg"/>
            <TeamMember name="Aidan Hart" role="Lead 3D Modeler" email="hartam1@uci.edu" portrait="/aidanhart.jpg" />
            <TeamMember name="Solaiman Farooqi" role="Audio" email="solaimaf@uci.edu" portrait="/solaimanfarooqi.jpg" />
            <TeamMember name="Luke Sheng" role="Game Design" email="lukesheng1234@gmail.com" portrait="/lukesheng.jpg" />
            <TeamMember name="Bella Garza" role="Marketing" email="bellrg13@gmail.com" portrait="/bellagarza.jpg" />
            <TeamMember name="Leo" role="2D Artist" email="leo160824@gmail.com"/>
        </div>
        <h2 className="meetTheTeamH2">With Some Extra Help From:</h2>
        <div className="teamGrid">
            <TeamMember name="Mateo Fernandez" role="Writing" email="profernandezmf@gmail.com"/>
            <TeamMember name="Dylan Truong" role="3D Modeling" email="dylantruong03@gmail.com"/>
            <TeamMember name="Justin Dawn" role="3D Modeling" email="justindawn321@gmail.com" portrait="/justindawn.jpg"/>
        </div>
      </section>
    </main>
  )
}
