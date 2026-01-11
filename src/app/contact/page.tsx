import { Button, Icon } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TeamMember from '@/components/teamMember/teamMember';
import styles from './contact.module.css'

export default async function ContactLayout() {
    return (
        <main>
            <h1 className={styles.h1+" "+styles.title}>Follow Us!</h1>
            <section className={styles.socialsLinkGroup}>
                <Button href="https://www.instagram.com/delighted.games/" variant='outlined' size='large' startIcon={<InstagramIcon className={styles.buttonIcon}/>} sx={{
                    fontSize: {
                    sm: "1rem",
                    md: "1.5rem",
                    lg: "1.75rem"
                    },
                    padding: {
                    sm: "10px 15px",
                    md: "10px 20px",
                    lg: "10px 40px"
                    },
                    width: 400,
                    marginBottom: "25px",
                    textTransform: "none"
                    }}>@delighted.games</Button>
                <Button href="https://www.youtube.com/@delightedgames" variant='outlined' size='large' startIcon={<YouTubeIcon className={styles.buttonIcon}/>} sx={{
                    fontSize: {
                    sm: "1rem",
                    md: "1.5rem",
                    lg: "1.75rem"
                    },
                    padding: {
                    sm: "10px 15px",
                    md: "10px 20px",
                    lg: "10px 40px"
                    },
                    width: 400,
                    marginBottom: "25px",
                    textTransform: "none"
                    }}>@delightedgames</Button>
            </section>
            <h1 className={styles.h1+" "+styles.title}>Team Members</h1>
            <div className={styles.teamGrid}>
                <TeamMember name="Amelia Trautman" role="Team Lead" email="ajt51805@gmail.com" portrait="ameliatrautman.jpg"/>
                <TeamMember name="Cole O'Balle" role="Producer" email="cole.oballe@gmail.com" portrait="coleoballe.jpg"/>
                <TeamMember name="Chris Sun" role="Lead Programmer" email="chrisun8@yahoo.com" portrait="chrissun.jpg"/>
                <TeamMember name="Aidan Hart" role="Lead 3D Modeler" email="hartam1@uci.edu" portrait="aidanhart.jpg" />
                <TeamMember name="Solaiman Farooqi" role="Audio" email="solaimaf@uci.edu" portrait="solaimanfarooqi.jpg" />
                <TeamMember name="Luke Sheng" role="Game Design" email="lukesheng1234@gmail.com" portrait="lukesheng.jpg" />
                <TeamMember name="Bella Garza" role="Marketing" email="bellrg13@gmail.com" portrait="bellagarza.jpg" />
                <TeamMember name="Leo" role="2D Artist" email="leo160824@gmail.com" portrait="leo.png"/>
                <TeamMember name="Drew Magro" role="Sound Design" email="drewmagrosound@gmail.com" portrait="drewmagro.jpeg"/>
                <TeamMember name="Grayson Ziegler" role="2D Artist" email="graysonziegler@gmail.com"/>
            </div>
        </main>
    )
}