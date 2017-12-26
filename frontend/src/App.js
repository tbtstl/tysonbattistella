import React, { Component } from 'react';
import request from 'superagent';

import {
  Provider,
  Heading,
  Label,
  Divider,
  Flex,
  Container,
  Box
} from 'rebass';

import Projects from 'components/projects';
import Learning from 'components/learning';

import 'app.css';


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
    return (
      <Provider>
        <Container>
        <Flex wrap mx={-2}>
          <Box width={2/3}>
            <Heading is="h1" color={color} f={9}>Tyson<br/>Battistella</Heading>
            <Divider color={color}/>
            <Label f={4} color={color}>
              A web developer and machine learning enthusiast currently
              residing on the south end of a small island on the west side
              of a large country in the north.
            </Label>
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
