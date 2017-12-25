import React from 'react';
import {Panel, PanelFooter, Box, Subhead} from 'rebass';
import styled from 'styled-components';
import InlineBox from 'components/inlineBox';
import HoverPanel from 'components/hoverPanel';

export default class ProjectItem extends React.PureComponent {
    render(){
        const {title, description, link} = this.props;

        return (
            <InlineBox width={1/3} m={1}>
            <a href={link || 'www.google.ca'} style={{textDecoration: 'none', color: 'black'}}>
                <HoverPanel>
                    <Box p={2}>
                        <Subhead f={2}>{title}</Subhead>
                    </Box>
                    <PanelFooter f={1}>
                        {description}
                    </PanelFooter>
                </HoverPanel>
            </a>
            </InlineBox>
        )
    }
}
