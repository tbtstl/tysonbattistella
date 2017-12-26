import React from 'react';
import {Flex, Subhead} from 'rebass';
import ProjectItem from 'components/projectItem';

export default class Projects extends React.PureComponent{
    render(){
        const {projects, hoverColor, color} = this.props;
        return (
            <div>
                <Subhead is="h3" f={5} mt={5} color={color}>Work</Subhead>
                <Flex wrap align="top">
                    {projects.map((p, idx) => (
                        <ProjectItem key={idx} color={color} hoverColor={hoverColor} {...p}/>
                    ))}
                </Flex>
            </div>
        )
    }
}
