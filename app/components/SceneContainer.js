import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { colors } from '../helpers';

const styles = {
  container: {
    composes: 'container row',
    height: '100%',
    backgroundColor: colors.grayBackground,
    margin: 0,
    color: colors.grayText
  },
  content: {
    marginTop: 60
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
    borderTop: `1px solid ${colors.grayBorder}`,
    padding: 20
  }
};

class SceneContainer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.content}>
          {this.props.children}
        </div>
        <footer className={classes.footer}>
          Sloth is an open source project part of the Sloth tools family:
          {' '}
          <a href="https://github.com/sloth-tools/" target="_blank">
            {' '}https://github.com/sloth-tools
          </a>
        </footer>
      </div>
    );
  }
}

export default injectSheet(styles)(SceneContainer);
