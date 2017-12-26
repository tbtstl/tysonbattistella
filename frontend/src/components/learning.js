import React from 'react';
import {Flex, Subhead} from 'rebass';
import LearningItem from 'components/learningItem';

export default class Learning extends React.PureComponent {
    render(){
        const {color, hoverColor, courses} = this.props;
        return (
            <div>
                <Subhead is="h3" f={5} mt={5} color={color}>Learning</Subhead>
                <Flex wrap align="top">
                    {courses.map((c, idx) => (
                        <LearningItem key={idx} color={color} hoverColor={hoverColor} {...c}/>
                    ))}
                </Flex>
            </div>
        )
    }
}
