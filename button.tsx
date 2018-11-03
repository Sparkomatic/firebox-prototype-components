import * as React from "react";
import { Override, Data, PropertyControls, ControlType } from "framer";

import styled, { injectGlobal } from "styled-components";

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

const DefaultButton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p: Partial<Props>) => p.color};
  border-radius: "2px";
  background-color: ${(p: Partial<Props>) => p.backgroundColor};
  &:hover {
    background-color: ${(p: Partial<Props>) => p.hoverColor};
  }
`;

let primaryBackground = "#212B38";
let primaryText = "white";
let primaryBorder = "1px solid #212B38";
let primaryHoverColor = "#344458";
let primaryBackgroundDisabled = "#dedede";
let secondaryBackground = "white";
let secondaryText = "#212B38";
let secondaryBorder = "1px solid #212B38";
let secondaryHoverColor = "#050608";
let secondaryBackgroundDisabled = "white";
let secondaryTextDisabled = "#dedede";

// let defaultHoverColor = "lighten(#212B38, 10%)";

// Define type of property
interface Props {
  text: string;
  color: string;
  hoverColor: string;
  backgroundColor: string;
  border: string;
  onClick: () => void;
  width: number;
  height: number;
  buttonState: "enabled" | "disabled";
  buttonType: "primary" | "disabled";
}

// State type

interface State {
  state: "enabled" | "disabled";
}

interface Type {
  type: "primary" | "primary";
}

export class Super_Button extends React.Component<Props> {
  // Set default properties

  static defaultProps = {
    text: "Continue",
    color: primaryText,
    backgroundColor: primaryBackground,
    hoverColor: primaryHoverColor,
    border: primaryBorder,
    width: 220,
    height: 48,
    onClick: () => {},
    buttonType: "primary",
    buttonState: "enabled"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    buttonState: {
      type: ControlType.Enum,
      options: ["enabled", "disabled"],
      optionTitles: ["Enabled", "Disabled"],
      title: "Button State"
    },
    buttonType: {
      type: ControlType.Enum,
      options: ["primary", "secondary"],
      optionTitles: ["Primary", "Secondary"],
      title: "Button Type"
    }
  };

  render() {

    let getBackground = (type, state) => {
      if (type === "primary" && state === "enabled") {
        return primaryBackground;
      } else if (type === "primary" && state === "disabled") {
        return primaryBackgroundDisabled;
      } else if (type === "secondary" && state === "enabled") {
        return secondaryBackground;
      } else {
        return secondaryBackgroundDisabled;
      }
    };

    let getTextColor = (type, state) => {
      if (type === "primary") {
        return primaryText;
      }
      else if (type === "secondary" && state === "enabled") {
        return secondaryText;
      } else {
        return secondaryTextDisabled;
      }
    };


    return (
      <DefaultButton

        onClick={this.props.onClick}
        color={getTextColor(this.props.buttonType,
          this.props.buttonState)}
        backgroundColor={getBackground(
          this.props.buttonType,
          this.props.buttonState
        )}
        hoverColor={this.props.hoverColor}
        height={this.props.height}
        width={this.props.width}
      >
        {this.props.text}
      </DefaultButton>
    );
  }
}
