import React from 'react'
import styled from "styled-components"

const Button = styled.a`
    display: none;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba (0,0,0,0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover{
    box-shadow:  0px 0px 20px rgba (0,0,0,0.2);
    transform: translateY(-5px);
  }

&:hover ${Button} {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 30%;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 768px) {
        font-size: 10px;
        width: 60%;
        height: 15%;
    }
}

  @media (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Logo = styled.img`
  height: 50px; 
  width: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media (max-width: 768px){
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary+99};
    margin-bottom: 10px;

    @media (max-width: 768px){
      font-size: 12px;
    }
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary+99};

    @media (max-width: 768px){
      font-size: 12px;
    }
`;



const ExperienceCards = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Logo src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.date}</Duration>
        </Body>
      </Top>
      <Description>
        {Array.isArray(experience.desc) ? (
          <ul style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            {experience.desc.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>{experience.desc}</p> 
        )}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience.skills.map((skill, index) => (
                  <Skill key={index} > • {skill} </Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      <Button href={experience?.doc} target='new'>View Documentation</Button>
    </Card>
  );
};

export default ExperienceCards;