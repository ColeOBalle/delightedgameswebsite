import Image from 'next/image';
import styles from './teamMember.module.css'

interface Props{
    name: string;
    role: string;
    email: string;
    portrait?: string;
}

const TeamMember: React.FC<Props> = ({name, role, email, portrait}) => {
    portrait = portrait !== undefined ? portrait : "/pfp.png";

    const altText = name + " portrait";

    return(
        <figure className={styles.figure}>
            <div className={styles.portraitDiv}>
                <Image
                    src={portrait}
                    alt={altText}
                    fill
                    objectFit='cover'
                    style={{borderRadius: '50%'}}
                />
            </div>
            <div className={styles.memberInfo}>
                <h2 className={styles.h2}>{name}</h2>
                <p className={styles.memberInfoP}>{role}</p>
                <p className={styles.memberInfoP}>{email}</p>
            </div>
        </figure>
    )
};

export default TeamMember;