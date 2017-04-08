import React, { Component } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

import { Button as BsButton } from 'react-bootstrap';

const styles = {
  button: {
    width: 140,
    fontSize: 20,
    backgroundColor: '#2c3e50',
    border: 'none',
    borderRadius: 0,
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color .2s ease-in-out',
    '&:focus': {
      outline: 0
    },
    '&:hover, &:focus': {
      backgroundColor: '#18bc9c',
      color: 'white'
    }
  },
  primary: {
    backgroundColor: '#159e82',
    color: 'white',
    '&:hover, &:focus': {
      backgroundColor: '#18bc9c'
    }
  }
};

class Button extends Component {
  render() {
    const { className, classes, dataKey, primary } = this.props;

    return (
      <BsButton
        className={cn([className, classes.button], {
          [classes.primary]: primary
        })}
        onClick={this.props.onClick}
        data-key={dataKey}
      >
        {this.props.label}
      </BsButton>
    );
  }
}

export default injectSheet(styles)(Button);
