import React from 'react';
import {PanelFooter, Box, Small, Subhead, Text} from 'rebass';
import InlineBox from 'components/inlineBox';
import HoverPanel from 'components/hoverPanel';

export default class LearningItem extends React.PureComponent {
     constructor(props){
        super(props);

        this.state = {
            color: props.color
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(){
        this.setState({...this.state, color: this.props.hoverColor});
    }

    handleMouseLeave(){
        this.setState({...this.state, color: this.props.color});
    }

    render(){
        const {title, year, institution} = this.props;
        const {color} = this.state;

        return (
            <InlineBox width={[1/2, 1/2, 1/2, 1/3]} m={1}>
                <HoverPanel color={color} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <Box p={2}>
                        <Subhead color={color} f={2}>{title}</Subhead>
                    </Box>
                    <PanelFooter f={1} color={color}>
                        <Text>
                            <Small>({year})</Small> {institution}
                        </Text>
                    </PanelFooter>
                </HoverPanel>
            </InlineBox>
        )
    }
}
