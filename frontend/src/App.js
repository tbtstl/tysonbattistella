import React, { Component } from 'react';
import request from 'superagent';

import {
  Provider,
  Heading,
  Label,
  Divider,
  Group,
  Subhead,
  ButtonOutline,
  Flex,
  Container,
  Box
} from 'rebass';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import Projects from 'components/projects';

import 'app.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: '#00449E',
      work: [],
      learning: [],
      contact: [],
    }
  }

  componentWillMount(){
    request
        .get('/api/work/')
        .end((err, res) => {
          console.log(err);
          console.log(res)
          this.setState({...this.state, work: res.body})
        });

    request
        .get('/api/learning/')
        .end((err, res) => {
          this.setState({...this.state, learning: res.body})
        });
  }

  render() {
    return (
      <Provider>
        <Router>
          <Container>
          <Flex wrap mx={-2}>
            <Box width={2/3}>
              <Heading is="h1" color={this.state.color} f={9}>Tyson<br/>Battistella</Heading>
              <Divider color={this.state.color}/>
              <Label f={4} color={this.state.color}>
                A web developer and machine learning enthusiast currently
                residing on the south end of a small island on the west side
                of a large country in the north.
              </Label>
            </Box>
            <Box width={1}>
              <Subhead is="h3" f={5} my={4} color={this.state.color}>Work</Subhead>
              <Projects projects={this.state.work} color={this.state.color}/>
            </Box>
          </Flex>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
