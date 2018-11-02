import * as React from "react";
import { Override, Data, PropertyControls, ControlType } from "framer";

import styled, { injectGlobal } from 'styled-components';

// injectGlobal`
// /* source-sans-pro-regular - latin */
// @font-face {
//   font-family: 'Source Sans Pro';
//   font-style: normal;
//   font-weight: 400;
//   src: url('../fonts/source-sans-pro-v11-latin-regular.eot'); /* IE9 Compat Modes */
//   src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
//        url('../fonts/source-sans-pro-v11-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('../fonts/source-sans-pro-v11-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
//        url('../fonts/source-sans-pro-v11-latin-regular.woff') format('woff'), /* Modern Browsers */
//        url('../fonts/source-sans-pro-v11-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('../fonts/source-sans-pro-v11-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
// }
// `;

const PrimaryButton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(p: Partial<Props>) => p.backgroundColor};
  &:hover {
    background-color: ${(p: Partial<Props>) => p.hoverColor};
  }
`;

let defaultBackground = "#212B38";
let defaultBorder = "1px solid #212B38";
let defaultHoverColor = "lighten(#212B38, 10%)";

// Define type of property
interface Props {
  text: string;
  hoverColor: string;
  backgroundColor: string;
  onClick: () => void;
  width: number;
  height: number;
  buttonState: "state1" | "state2";
  state1Background: string,
  state2Background: string,
  stateBackgroundColor: {state1: string, state2: string}
}

// State type

interface State {
  isSecondaryButton: boolean;
  status: "state1" | "state2";
}

export class Button extends React.Component<Props> {
  
  // Set default properties

  static defaultProps = {
    text: "Hello World!",
    backgroundColor: defaultBackground,
    state1Background: defaultBackground,
    state2Background: "#dedede",
    hoverColor: defaultHoverColor,
    width: 220,
    height: 48,
    onClick: () => {},
    buttonState: "state1"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    backgroundColor: { type: ControlType.Color, title: "Background Colour" },
    hoverColor: { type: ControlType.Color, title: "Hover Colour" },
    buttonState: {
      type: ControlType.Enum,
      options: ["state1", "state2"],
      optionTitles: ["Enabled", "Disabled"],
      title: "Button State"
    },
  };

  render() {

    return (
        <PrimaryButton
          onClick={this.props.onClick}
          backgroundColor={this.props.buttonState === "state1" && this.props.state1Background || this.props.state2Background}
          hoverColor={this.props.hoverColor}
          height={this.props.height}
          width={this.props.width}
        >
          {this.props.text}
        </PrimaryButton>
    );
  }
}
