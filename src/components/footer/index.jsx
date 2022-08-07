import React from 'react';
import { StyledWrapper, StyledP, StyledUrl } from './FooterElements';

function Footer() {
  return (
    <StyledWrapper>
      <StyledP>
        Designed, Developed, And Maintained By:
        <StyledUrl
          href="https://linktr.ee/durbanpoisonpew"
          target="_blank"
          rel="noreferrer"
          alt="durbanpoisonpew">
          @DurbanPoisonPew
        </StyledUrl>
      </StyledP>
    </StyledWrapper>
  );
}

export default Footer;
