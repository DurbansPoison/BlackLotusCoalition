/* eslint-disable no-undef */
const Title = styled.h1`
  // eslint-disable-line no-undef
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #000000;
`;

const Li = styled.li`
  font-size: 1em;
  color: ##000000;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4a4a4acf;
  border-radius: 3px;
`;
function Designers() {
  return (
    <Wrapper>
      <Title>Black Lotus Designers:</Title>
      <ul>
        <Li>DurbanPoisonPew</Li>
        <Li>ModeratorGage</Li>
        <Li>NeoAeon</Li>
        <Li>Stark80</Li>
        <Li>TheArmourer</Li>
      </ul>
    </Wrapper>
  );
}

export default Designers;
