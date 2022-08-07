import React from 'react';
import { Wrapper, StyledP, StyledUrl } from './FooterElements';

function Footer() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Footer;
