import React, { Component } from 'react';

import {
  Provider,
  Heading,
  Label,
  Divider,
  Group,
  Subhead,
  ButtonOutline,
  Flex,
  Box
} from 'rebass';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import ProjectItem from 'components/projectItem';

import 'app.css';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
          <Flex>
            <Box width={2/3}>
              <Heading is="h1" f={9}>Tyson<br/>Battistella</Heading>
              <Divider/>
              <Label f={4}>
                A web developer and machine learning enthusiast currently
                residing on the south end of a small island on the west side
                of a large country in the north.
              </Label>
            </Box>
          </Flex>
          <Flex>
            <Box width={1}>
              <Subhead is="h3" f={5} my={4}>Work</Subhead>
              <ProjectItem title="Picmoji" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
              <ProjectItem title="Picmoji" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
              <ProjectItem title="Picmoji" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
              <ProjectItem title="Picmoji" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            </Box>
          </Flex>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
