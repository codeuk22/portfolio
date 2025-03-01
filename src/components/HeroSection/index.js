import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton, } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import styled from 'styled-components';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHub from '@mui/icons-material/GitHub';
const HeroSection = () => {
  const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer >
          <HeroLeftContainer id="Left">
            <Title>Hey 👋, I am <br /> {Bio.name}</Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.youtube} target="display"><YouTubeIcon /></SocialMediaIcon>
              <SocialMediaIcon href={Bio.twitter} target="display"><GitHub /></SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
              <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
            </SocialMediaIcons>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img
              src={HeroImg}
              alt="hero-image"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />

          </HeroRightContainer>
        </HeroInnerContainer>

      </HeroContainer>
    </div>
  )
}

export default HeroSection