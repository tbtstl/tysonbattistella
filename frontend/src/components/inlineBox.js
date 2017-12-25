import React from 'react';
import styled from 'styled-components';
import {Box} from 'rebass';

export default class InlineBox extends React.PureComponent {
    render(){
        const CustomBox = styled(Box)`display: inline-block;`;
        return (
            <CustomBox {...this.props}/>
        )
    }
}
