import React from 'react';
import {Flex} from 'rebass';
import ProjectItem from 'components/projectItem';

export default class Projects extends React.PureComponent{
    render(){
        const {projects, hoverColor, color} = this.props;
        return (
            <React.Fragment>
              <h1>Work</h1>
                <Flex wrap align="top">
                    {projects.map((p, idx) => (
                        <ProjectItem key={idx} color={color} hoverColor={hoverColor} {...p}/>
                    ))}
                </Flex>
            </React.Fragment>
        )
    }
}
