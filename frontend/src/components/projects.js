import React from 'react';
import {Flex} from 'rebass';
import ProjectItem from 'components/projectItem';

export default class Projects extends React.PureComponent{
    render(){
        const {projects} = this.props;
        return (
            <Flex wrap align="top">
                {projects.map((p) => (
                    <ProjectItem {...p}/>
                ))}
            </Flex>
        )
    }
}
