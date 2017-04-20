import React, { PureComponent } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';
import { colors } from '../helpers';

const styles = {
  header: {
    position: 'absolute',
    top: 15,
    right: 0,
    left: 0,
    fontSize: 16,
    textAlign: 'center',
    borderBottom: `1px solid ${colors.grayBorder}`,
    marginTop: 20,
    paddingBottom: 10,
  },
  button: {
    float: 'left',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  rightButton: {
    marginLeft: 0,
  },
  icon: {
    composes: ['glyphicon', 'glyphicon-menu-left'],
    fontSize: 32,
  },
  title: {
    composes: 'col-xs-8',
    lineHeight: '35px',
  },
};

class Header extends PureComponent {
  renderBack = () => {
    const { classes, onBack } = this.props;
    if (onBack) {
      return (
        <button className={classes.button} onClick={onBack}>
          <span className={classes.icon} />
        </button>
      );
    }
  };
  render() {
    const { classes, text, rightButton } = this.props;

    return (
      <div className={classes.header}>
        <div className="col-xs-2">
          {this.renderBack()}
        </div>
        <div className={classes.title}>
          {text}
        </div>
        <div className={cn(['col-xs-2', classes.rightButton])}>
          {rightButton}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Header);
