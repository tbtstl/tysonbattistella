import styled from 'styled-components';
import theme from "../theme";
import media from '../media';

const Title = styled('div')`
    font-size: 3.5vmin;
    ${media.giant`font-size: 3.5vmin;`}
    ${media.desktop`font-size:3.5vmin;`}
    ${media.tablet`font-size:5.5vmin;`}
    ${media.phone`font-size:8vmin;`}
    font-weight: bold;
    transition: color 150ms ease-in-out;
    
    :hover {
      color: ${theme.colors.quarterary};
      cursor: pointer;
    }
`;

export default Title;
