import React, { Component } from 'react';
import request from 'superagent';
import styled from 'styled-components';

import {
  Provider,
  Heading,
  Label,
  Divider,
  Flex,
  Container,
  Box,
  Text
} from 'rebass';

import Projects from 'components/projects';
import Learning from 'components/learning';

import './app.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: '#00449E',
      hoverColor: '#D5008F',
      work: [],
      learning: [],
      contact: [],
    }
  }

  componentWillMount(){
    request
        .get('/api/work/')
        .end((err, res) => {
          this.setState({...this.state, work: res.body})
        });

    request
        .get('/api/learning/')
        .end((err, res) => {
          this.setState({...this.state, learning: res.body})
        });
  }

  render() {
    const {work, learning, color, hoverColor} = this.state;

    const ContactLink = styled('a')`
      text-decoration: none;
      color: ${color};
      :hover {
        color: ${hoverColor};
      }
    `;

    return (
      <Provider>
        <Container>
        <Flex wrap mx={-2}>
          <Box width={2/3}>
            <Heading is="h1" color={color} f={[6, 7, 9, 9]}>Tyson<br/>Battistella</Heading>
            <Divider color={color}/>
            <Label f={4} color={color}>
              A web developer and machine learning enthusiast currently
              residing on the south end of a small island on the west side
              of a large country in the north.
            </Label>
            <Box width={1} mt={3}>
              <Text color={color}>
                <ContactLink href="mailto:tysonbattistella@gmail.com">
                  <span className="fa fa-envelope-o"/> tysonbattistella@gmail.com
                </ContactLink>
              </Text>
            </Box>
            <Box width={1}>
              <Text color={color}>
                <ContactLink href="https://twitter.com/tbtstl">
                  <span className="fa fa-twitter"/> @tbtstl
                </ContactLink>
              </Text>
            </Box>
          </Box>
          <Box width={1}>
            <Projects projects={work} color={color} hoverColor={hoverColor}/>
          </Box>
          <Box width={1}>
            <Learning courses={learning} color={color} hoverColor={hoverColor}/>
          </Box>
        </Flex>
        </Container>
      </Provider>
    );
  }
}

export default App;
