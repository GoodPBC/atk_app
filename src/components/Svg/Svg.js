import React from 'react';
import NativeSvg from 'react-native-svg';
import {COLOR} from '../../constants';

export default class Svg extends React.Component {
  /**
   * The default properties of the SVG component.
   *
   * @type {object}
   */
  static defaultProps = {
    width: 25,
    height: 25,
    fill: COLOR.white,
    style: {
      marginTop: 0,
    },
  };

  /**
   * Gets the value which defines the position and dimension, is user space, of the SVG viewport.
   *
   * @type {number[]} - A list of four numbers min-x, min-y, width and height.
   * @abstract
   */
  static get viewBox() {
    throw new TypeError(
      "Class does not implement inherited abstract member 'Svg.viewBox'.",
    );
  }

  /**
   * Returns the contents of the SVG graphic.
   *
   * @returns {React.ComponentClass<SvgProps, any>}
   * @abstract
   */
  renderContents() {
    throw new TypeError(
      `'${
        this.constructor.name
      }' does not implement inherited abstract member 'Svg.renderContents'.`,
    );
  }

  /**
   * Renders the SVG component.
   *
   * @returns {JSX.Element}
   */
  render() {
    // Destruct select properties, merging instance properties with default properties.
    const {width, height, fill, style} = this.props;

    // Join the view box values.
    const viewBox = this.constructor.viewBox.join(' ');

    // Create the styles.
    const styles = {
      'enable-background': `new ${viewBox}`,
      ...style,
    };

    // Render the react native SVG element, including the rendered contents.
    return (
      <NativeSvg
        width={width}
        height={height}
        fill={fill}
        viewBox={viewBox}
        style={styles}>
        {this.renderContents()}
      </NativeSvg>
    );
  }
}
