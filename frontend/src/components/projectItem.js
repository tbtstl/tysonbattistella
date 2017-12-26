import React from 'react';
import {Panel, PanelFooter, Box, Subhead, Text} from 'rebass';
import styled from 'styled-components';
import InlineBox from 'components/inlineBox';
import HoverPanel from 'components/hoverPanel';

export default class ProjectItem extends React.PureComponent {
    render(){
        const {title, description, link, color} = this.props;

        return (
            <InlineBox width={[1, 1/2, 1/3, 1/4]} m={1}>
            <a href={link || 'www.google.ca'} style={{textDecoration: 'none', color}}>
                <HoverPanel color={color}>
                    <Box p={2}>
                        <Subhead f={3}>{title}</Subhead>
                    </Box>
                    <PanelFooter f={1} color={color}>
                        <Text>
                        {description}
                        </Text>
                    </PanelFooter>
                </HoverPanel>
            </a>
            </InlineBox>
        )
    }
}
