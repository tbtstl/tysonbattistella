import React from 'react';
import {Flex, Subhead} from 'rebass';

export default class Contact extends React.PureComponent {
    render(){
        const {color} = this.props;
        return (
            <div>
                <Subhead is="h3" f={5} mt={5} color={color}>Contact</Subhead>
                <Flex wrap align="top">
                    
                </Flex>
            </div>
        )
    }
}
