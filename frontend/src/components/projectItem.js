import React from 'react';
import {PanelFooter, Box, Small, Subhead, Text} from 'rebass';
import Media from 'react-media';
import InlineBox from 'components/inlineBox';
import HoverPanel from 'components/hoverPanel';

export default class ProjectItem extends React.Component {
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
        const {title, description, link, offline} = this.props;
        const {color} = this.state;

        return (
            <InlineBox width={[1, 1/2, 1/3, 1/4]} m={1}>
            <a href={link || '#'} style={{textDecoration: 'none', color}} target="_blank">
                <Media query="(hover: hover)">
                    {matches => matches ? (
                        <HoverPanel color={color} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <Box p={2}>
                                <Subhead f={3}>{title}{offline && <Small> (offline)</Small>}</Subhead>
                            </Box>
                            <PanelFooter f={1} color={color}>
                                <Text>
                                {description}
                                </Text>
                            </PanelFooter>
                        </HoverPanel>
                    ) : (
                        <HoverPanel color={color}>
                            <Box p={2}>
                                <Subhead f={3}>{title}{offline && <Small> (offline)</Small>}</Subhead>
                            </Box>
                            <PanelFooter f={1} color={color}>
                                <Text>
                                {description}
                                </Text>
                            </PanelFooter>
                        </HoverPanel>
                    )}
                </Media>
            </a>
            </InlineBox>
        )
    }
}
