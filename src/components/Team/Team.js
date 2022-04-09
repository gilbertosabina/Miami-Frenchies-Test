import React from 'react';
import './Team.scss';
import teamMember1 from '../../assets/IMG_5687.jpg';
import teamMember2 from '../../assets/dog2.png';
import teamMember3 from '../../assets/image1.jpeg';
import teamMember4 from '../../assets/dog5.png';
import teamMember5 from '../../assets/dog6.png';
import teamMember6 from '../../assets/image0.jpeg';

const team = [
    { id: 0, memberName: 'William Apespeare', img: teamMember6, rol: 'Advisor Ape', description: 'Bored ape #8180\'s owner / Helping the Miami Frenchie Club become a great community' },
    { id: 1, memberName: 'Alejandro Oliva', img: teamMember2, rol: 'Developer', description: 'computer scientist / blockchain developer / a person who solves a problem you didn\'t know you had in a way you don\' t understand' },
    { id: 2, memberName: 'Michael Sabina', img: teamMember3, rol: 'social ninja', description: 'I have no real skill, Im just good with people.' },
    { id: 3, memberName: 'Yasmany Perez', img: teamMember4, rol: 'Artist', description: 'Artist & Creative / Senior graphic artist. I draw stuff' },
    { id: 4, memberName: 'Leonardo Cordero', img: teamMember5, rol: 'Wicked Corporate Guy', description: 'insane network of smart people' },
    { id: 5, memberName: 'Alfredo Lopez', img: teamMember1, rol: 'the frenchie whisper', description: 'NFT Market Analyst / Degenerate Collector / sports Enthusiast' },
];

const Card = ({ member, border }) => {
    return (
        <div className='teamMember-card'>
            <img src={member.img} alt='memberImg' className={border ? 'teamMember-img teamMember-img-border' : 'teamMember-img'} />
            <p className='teamMember-name'>{member.memberName}</p>
            <p className='teamMember-rol'>{member.rol}</p>
            <p className='teamMember-description'>{member.description}</p>
        </div>
    )
}


const Team = () => {
    return (
        <div id="team" className='team-section'>
            <div className='team-title'>
                meet the team
            </div>
            <div className='team-container-desktop'>
                <div className='team-subcontainer'>
                    <Card key={team[0].id} member={team[0]} border={true} />
                    <Card key={team[1].id} member={team[1]} border={false} />
                    <Card key={team[2].id} member={team[2]} border={true} />
                </div>
                <div className='team-subcontainer'>
                    <Card key={team[3].id} member={team[3]} border={false} />
                    <Card key={team[4].id} member={team[4]} border={false} />
                    <Card key={team[5].id} member={team[5]} border={true} />
                </div>
            </div>
            <div className='team-container-mobile'>
                {
                    team.map((member, idx) => (<Card key={member.id} member={member} border={
                        (idx === 2 || idx === 5 || idx === 0) ? true : false
                    } />))
                }
            </div>
        </div>
    )
}

export default Team;