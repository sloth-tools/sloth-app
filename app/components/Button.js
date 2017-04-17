import React, { Component } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';
import { Button as BsButton } from 'react-bootstrap';
import { colors } from '../helpers';

const styles = {
  button: {
    width: 140,
    fontSize: 20,
    backgroundColor: colors.grayBackground,
    border: `1px solid ${colors.blue}`,
    borderRadius: 5,
    color: colors.blue,
    cursor: 'pointer',
    transition: 'background-color .2s ease-in-out',
    '&:hover, &:focus': {
      backgroundColor: colors.blue,
      borderColor: colors.blue,
      color: 'white'
    }
  }
};

class Button extends Component {
  render() {
    const { className, classes, dataKey, disabled } = this.props;

    return (
      <BsButton
        className={cn([className, classes.button])}
        onClick={this.props.onClick}
        data-key={dataKey}
        disabled={disabled}
      >
        {this.props.label}
      </BsButton>
    );
  }
}

export default injectSheet(styles)(Button);
