import Image from 'next/image';
import { MailOutline } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './teamMember.module.css'

interface Props{
    name: string;
    role: string;
    email: string;
    linkedIn?: string;
    portrait?: string;
}

const TeamMember: React.FC<Props> = ({name, role, email, linkedIn, portrait}) => {
    portrait = portrait !== undefined ? portrait : "pfp.png";
    linkedIn = linkedIn !== undefined ? linkedIn : "";

    const altText = name + " portrait";

    function LinkedInInfo({linkedIn}: { linkedIn: string }): React.ReactElement | null {
        if (linkedIn != "") {
            return (<p className={styles.memberInfoP}><LinkedInIcon></LinkedInIcon> <a className={styles.a} href={"https://www.linkedin.com/in/" + linkedIn}>{linkedIn}</a></p>);
        }
        return null;
    }

    return(
        <div className={styles.item}>
            <figure className={styles.figure}>
                <div className={styles.portraitDiv}>
                    <Image
                        src={portrait}
                        alt={altText}
                        fill
                        objectFit='cover'
                        style={{borderRadius: '50%'}}
                        unoptimized
                    />
                </div>
                <div>
                    <h2 className={styles.h2}>{name}</h2>
                    <p className={styles.memberInfoP}>{role}</p>
                    <p className={styles.memberInfoP}><MailOutline></MailOutline> {email}</p>
                    <LinkedInInfo linkedIn={linkedIn}></LinkedInInfo>
                </div>
            </figure>   
        </div>
    )
};

export default TeamMember;