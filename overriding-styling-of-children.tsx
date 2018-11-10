import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";
// import { Green } from './canvas';

const YellowBlock = styled.div`
    background: ${props => `${props.background}`};
    color: ${props => `${props.color}`};
    justify-self: flex-start;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const blueStyle: React.CSSProperties = {
    // height: "100%",
    // width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "blue",
    overflow: "hidden",
};

const purpleStyle: React.CSSProperties = {
    // height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "purple",
    overflow: "hidden",
};


// Define type of property
interface Props {
  text: string;
  background : string;
  color: string;
  width: number;
  height: number;
}

export class Yellow_Block_Component extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    height: 100,
    width: 200,
    background: "yellow",
    color: "grey"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" }
  };

  render() {
    return (
      <YellowBlock
        
        height={this.props.width}
        width={this.props.height}
        background={this.props.background}
        color={this.props.color}
        
       >
       
        {React.Children.map(this.props.children, child => (
        React.cloneElement(child as React.ReactElement<any>, blueStyle )
      ))}
      </YellowBlock>
    );
  }
}
