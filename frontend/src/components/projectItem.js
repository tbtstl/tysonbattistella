import React from 'react';
import InlineBox from 'components/inlineBox';
import Title from 'components/boxTitle';


export default class ProjectItem extends React.PureComponent {
    render(){
        const {title, link} = this.props;

        return (
            <InlineBox width={1} m={1}>
              <Title onClick={()=>{window.open(link, '_blank');}}>{title}</Title>
            </InlineBox>
        )
    }
}
