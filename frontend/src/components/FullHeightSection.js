import styled, {css} from 'styled-components';
import theme from '../theme';
import media from '../media';

const FullHeightSection = styled('div')`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 1em;
  font-family: Avenir Next, sans-serif;
  text-align: left;
  background-color: ${props => props.number % 2 === 0 ? theme.colors.secondary : theme.colors.primary};
  color: ${props => props.number % 2 === 0 ? theme.colors.primary : theme.colors.secondary};
  
  > h1 {
    width: 90vw; 
    margin: 0;
    font-weight: bold;
    font-size: 20vmin;
    ${media.giant`font-size: 18vmin;`}
    ${media.desktop`font-size: 18vmin;`}
    ${media.tablet`font-size: 15vmin;`}
    ${media.phone`font-size: 18vmin;`}
    
    ::after {
      transition: all 200ms ease-out;
      content: "."; 
    }
    :hover::after {
      color: ${theme.colors.quarterary};
    }
  }
  
`;

export default FullHeightSection;
