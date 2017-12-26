import React from 'react';
import styled from 'styled-components';
import {Panel} from 'rebass';

export default class HoverPanel extends React.PureComponent {
    render(){
        const {color} = this.props;
        const HP = styled(Panel)`
            border: 0;
            box-sizing: border-box;
            // Using inset box-shadow instead of border for sizing simplicity
            box-shadow: inset 0 0 0 1px white;
            font-size: inherit;
            font-weight: 700;
            // Required, since we're setting absolute on pseudo-elements
            position: relative;
            vertical-align: middle;
          
            &::before,
            &::after {
              box-sizing: inherit;
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
            }
            transition: all 0.25s ease;

            &::before,
            &::after {
              // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
              border: 1px solid transparent;
              width: 0;
              height: 0;
            }
          
            // This covers the top & right borders (expands right, then down)
            &::before {
              top: 0;
              left: 0;
            }
          
            // And this the bottom & left borders (expands left, then up)
            &::after {
              bottom: 0;
              right: 0;
            }
            
            &:hover {
              color: ${color};
            }
          
            // Hover styles
            &:hover::before,
            &:hover::after {
              width: 100%;
              height: 100%;
            }
          
            &:hover::before {
              border-top-color: ${color}; // Make borders visible
              border-right-color: ${color};
              transition:
                width 0.25s ease-out, // Width expands first
                height 0.25s ease-out 0.25s; // And then height
            }
          
            &:hover::after {
              border-bottom-color: ${color}; // Make borders visible
              border-left-color: ${color};
              transition:
                border-color 0s ease-out 0.5s, // Wait for ::before to finish before showing border
                width 0.25s ease-out 0.5s, // And then exanding width
                height 0.25s ease-out 0.75s; // And finally height
            }
            `;
        return (
            <HP {...this.props}/>
        )
    }
}
