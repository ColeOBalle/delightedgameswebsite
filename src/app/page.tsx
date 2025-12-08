'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Icon from '@mui/material/Icon'
import TeamMember from "@/components/teamMember/teamMember";
import { Button, createTheme } from "@mui/material";

export default function Home() {
  return (
    <main>

      <section className={styles.aboutUs}>
        <div className={styles.titleDiv}>
          <h1 className={styles.homeTitle + " " + styles.h1}><Icon fontSize="inherit">flare</Icon> About Us <Icon fontSize="inherit">flare</Icon></h1>
          <h2 className={styles.introParagraph}>We’re a small team of indie developers passionate about creating story-driven games that inspire players to make a difference in the world.</h2>
        </div>
        <div className={styles.imgDiv + " " + styles.logo}>
          <Image
            src='/delightedgameswebsite/logo.png'
            alt="Delighted Games Logo"
            fill
            objectFit="contain"
            unoptimized
          />
        </div>
      </section>

      <h1 className={styles.h1}>What We Are Working On:</h1>

      <section className={styles.projSection}>
        <div className={styles.imgDiv + " " + styles.gameImg}>
          <Image
            src='/delightedgameswebsite/Landed Updated Logo.png'
            alt="Landed logo"
            fill
            objectFit="contain"
            unoptimized
          />
        </div>
        <div className={styles.descDiv}>
          <h3 className={styles.h3}>Landed</h3>
          <p className={styles.p}>Our first major project, Landed, invites you to navigate a world on the brink of demise—where every choice shapes the fate of those around you.</p>
          <Button href="https://store.steampowered.com/app/3871950/LANDED/" variant="contained" sx={{
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
            },
            textTransform: "none"
          }}>Learn More
          </Button>
          <div></div>
        </div>
      </section>

      <section className={styles.meetTheTeam}>
        <h1 className={styles.h1}>Meet the Team</h1>
        <div className={styles.teamGrid}>
            <TeamMember name="Amelia Trautman" role="Team Lead" email="ajt51805@gmail.com" portrait="/ameliatrautman.jpg"/>
            <TeamMember name="Cole O'Balle" role="Producer" email="cole.oballe@gmail.com" portrait="/coleoballe.jpg"/>
            <TeamMember name="Chris Sun" role="Lead Programmer" email="chrisun8@yahoo.com" portrait="/chrissun.jpg"/>
            <TeamMember name="Aidan Hart" role="Lead 3D Modeler" email="hartam1@uci.edu" portrait="/aidanhart.jpg" />
            <TeamMember name="Solaiman Farooqi" role="Audio" email="solaimaf@uci.edu" portrait="/solaimanfarooqi.jpg" />
            <TeamMember name="Luke Sheng" role="Game Design" email="lukesheng1234@gmail.com" portrait="/lukesheng.jpg" />
            <TeamMember name="Bella Garza" role="Marketing" email="bellrg13@gmail.com" portrait="/bellagarza.jpg" />
            <TeamMember name="Leo" role="2D Artist" email="leo160824@gmail.com" portrait="/leo.png"/>
            <TeamMember name="Drew Magro" role="Sound Design" email="drewmagrosound@gmail.com" portrait="/drewmagro.jpeg"/>
            <TeamMember name="Grayson Ziegler" role="2D Artist" email="graysonziegler@gmail.com"/>
        </div>
        <h2 className={styles.meetTheTeamH2}>With Some Extra Help From:</h2>
        <div className={styles.teamGrid}>
          <TeamMember name="Mateo Fernandez" role="Writing" email="profernandezmf@gmail.com" />
          <TeamMember name="Dylan Truong" role="3D Modeling" email="dylantruong03@gmail.com" />
          <TeamMember name="Justin Dawn" role="3D Modeling" email="justindawn321@gmail.com" portrait="/justindawn.jpg" />
        </div>
      </section>
    </main>
  )
}
