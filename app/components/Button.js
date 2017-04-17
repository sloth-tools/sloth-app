import React, { Component } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

import { Button as BsButton } from 'react-bootstrap';

const styles = {
  button: {
    width: 140,
    fontSize: 20,
    backgroundColor: '#f6f6f6',
    border: '1px solid #155799',
    'border-radius': 5,
    color: '#155799',
    cursor: 'pointer',
    transition: 'background-color .2s ease-in-out',
    '&:hover, &:focus': {
      'background-color': '#155799',
      'border-color': '#155799',
      color: 'white'
    }
  },
  primary: {
    backgroundColor: '#f6f6f6',
    border: '1px solid #155799',
    'border-radius': 5,
    color: '#155799',
    '&:hover, &:focus': {
      'background-color': '#155799',
      'border-color': '#155799',
      color: 'white'
    }
  }
};

class Button extends Component {
  render() {
    const { className, classes, dataKey, primary, disabled } = this.props;

    return (
      <BsButton
        className={cn([className, classes.button], {
          [classes.primary]: primary
        })}
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
