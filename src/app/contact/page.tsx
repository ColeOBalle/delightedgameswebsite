import { Button, Icon } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from './contact.module.css'

export default async function ContactLayout() {
    return (
        <main>
            <h1 className={styles.h1+" "+styles.title}>Follow Us!</h1>
            <section className={styles.socialsLinkGroup}>
                <Button variant='outlined' size='large' startIcon={<InstagramIcon className={styles.buttonIcon}/>} sx={{
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
                <Button variant='outlined' size='large' startIcon={<YouTubeIcon className={styles.buttonIcon}/>} sx={{
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
        </main>
    )
}