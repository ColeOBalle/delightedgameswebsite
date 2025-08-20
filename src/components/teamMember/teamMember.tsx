import Image from 'next/image';
import './teamMember.css'

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
        <figure>
            <div id="portraitDiv">
                <Image
                    src={portrait}
                    alt={altText}
                    fill
                    objectFit='cover'
                    style={{borderRadius: '50%'}}
                />
            </div>
            <div id="memberInfo">
                <h2>{name}</h2>
                <p className='memberInfoP'>{role}</p>
                <p className='memberInfoP'>{email}</p>
            </div>
        </figure>
    )
};

export default TeamMember;