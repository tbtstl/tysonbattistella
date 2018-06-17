import React, { Component } from 'react';
import request from 'superagent';
import {injectGlobal} from 'styled-components';

import {
  Provider
} from 'rebass';

import theme from './theme';

import FullHeightSection from 'components/FullHeightSection'
import Projects from 'components/projects';
import BoxTitle from 'components/boxTitle';

import InlineBox from "./components/inlineBox";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      work: [],
      contact: []
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
    const {work} = this.state;

    injectGlobal`
      body {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        margin: 0;
      }
    `;

    return (
      <Provider theme={theme}>
        <FullHeightSection number={0}>
          <h1>Tyson Battistella is a web developer</h1>
        </FullHeightSection>
        <FullHeightSection number={1}>
          <Projects projects={work}/>
        </FullHeightSection>
        <FullHeightSection number={2}>
          <h1>Contact</h1>
          <InlineBox w={1}>
            <BoxTitle onClick={()=>{window.open('mailto:tysonbattistella@gmail.com')}}>
              <i className="fa fa-envelope-o"/> Email
            </BoxTitle>
          </InlineBox>
          <InlineBox w={1}>
            <BoxTitle onClick={()=>{window.open('https://github.com/tysonbattistella', '_blank')}}>
              <i className="fa fa-github"/> Github
            </BoxTitle>
          </InlineBox>
          <InlineBox w={1}>
            <BoxTitle onClick={()=>{window.open('https://twitter.com/tbtstl')}}>
              <i className="fa fa-twitter"/> Twitter
            </BoxTitle>
          </InlineBox>
        </FullHeightSection>
      </Provider>
    );
  }
}

export default App;
