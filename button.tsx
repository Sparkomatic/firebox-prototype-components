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
  border-radius: "2px";
  color: ${(p: Partial<Props>) => p.color};
  background-color: ${(p: Partial<Props>) => p.backgroundColor};
  border: ${(p: Partial<Props>) => p.border};
  &:hover {
    background-color: ${(p: Partial<Props>) => p.backgroundHoverColor};
  }
`;

let primaryBackground = "#212B38";
let primaryText = "white";
let primaryBorder = "2px solid #212B38";
//primary text does not change when disabled
let primaryBorderDisabled = "2px solid #dedede";
let primaryBackgroundDisabled = "#dedede";
let primaryBackgroundHoverColor = "#344458";

let secondaryBackground = "white";
let secondaryText = "#212B38";
let secondaryBorder = "2px solid #212B38";
let secondaryTextDisabled = "#dedede";
let secondaryBorderDisabled = "2px solid #dedede";
let secondaryBackgroundHoverColor = "#e6e6e6";
//secondary background does not change when disabled


// let defaultHoverColor = "lighten(#212B38, 10%)";

// Define type of property
interface Props {
  text: string;
  color: string;
  backgroundColor: string;
  border: string;
  onClick: () => void;
  width: number;
  height: number;
  buttonState: "enabled" | "disabled";
  buttonType: "primary" | "disabled";
  backgroundHoverColor: string;
  textHoverColor: string;
  borderHoverColor: string;
}

// State type

interface State {
  state: "enabled" | "disabled";
}

interface Type {
  type: "primary" | "primary";
}

export class Button extends React.Component<Props> {
  // Set default properties

  static defaultProps = {
    text: "Continue",
    color: primaryText,
    backgroundColor: primaryBackground,
    backgroundHoverColor: primaryBackgroundHoverColor,
    textHoverColor: primaryText,
    borderHoverColor: primaryBackgroundHoverColor,
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
      } else {
        return secondaryBackground;
      }
    };

    let getTextColor = (type, state) => {
      if (type === "primary") {
        return primaryText;
      } else if (type === "secondary" && state === "enabled") {
        return secondaryText;
      } else {
        return secondaryTextDisabled;
      }
    };

    let getBorder = (type, state) => {
      if (type === "primary" && state === "enabled") {
        return primaryBorder;
      }
      if (type === "primary" && state === "disabled") {
        return primaryBorderDisabled;
      }
      if (type === "secondary" && state === "enabled") {
        return secondaryBorder;
      } else {
        return secondaryBorderDisabled;
      }
    };

    let getBackgroundHover = (type, state) => {
      if (type === "primary" && state === "enabled") {
        return primaryBackgroundHoverColor;
      }
      if (type === "primary" && state === "disabled") {
        return primaryBackgroundDisabled;
      }
      if (type === "secondary" && state === "enabled") {
        return secondaryBackgroundHoverColor;
        // return "red";
      } else {
        return secondaryBackground;
      }
    };

    let getTextHover = (type, state) => {
      if (type === "primary" && state === "enabled") {
        return primaryText;
      }
      if (type === "primary" && state === "disabled") {
        return primaryText;
      }
      if (type === "secondary" && state === "enabled") {
        return secondaryText;
        // return "red";
      } else {
        return secondaryText;
      }
    };

    let getBorderHover = (type, state) => {
      if (type === "primary" && state === "enabled") {
        return primaryBackgroundHoverColor;
      }
      if (type === "primary" && state === "disabled") {
        return primaryBorderDisabled;
      }
      if (type === "secondary" && state === "enabled") {
        secondaryBackgroundHoverColor;
      } else {
        return secondaryTextDisabled;
      }
    };

    return (
      <DefaultButton
        onClick={this.props.onClick}
        color={getTextColor(this.props.buttonType, this.props.buttonState)}
        textHoverColor={getTextHover(this.props.buttonType, this.props.buttonState)}
        backgroundColor={getBackground(
          this.props.buttonType,
          this.props.buttonState
        )}
        backgroundHoverColor={getBackgroundHover(
          this.props.buttonType,
          this.props.buttonState
        )}
        border={getBorder(this.props.buttonType, this.props.buttonState)}
        borderHoverColor={getBorderHover(this.props.buttonType, this.props.buttonState)}
        height={this.props.height}
        width={this.props.width}
      >
        {this.props.text}
      </DefaultButton>
    );
  }
}

