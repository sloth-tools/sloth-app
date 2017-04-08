import React, { PureComponent } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

const styles = {
  header: {
    position: 'absolute',
    width: 600,
    top: 10,
    right: 100,
    fontSize: 16,
    textAlign: 'center',
    borderBottom: '2px solid #f2f2f2',
    marginTop: 20
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: 0
    }
  },
  rightButton: {
    marginLeft: 0
  },
  icon: {
    composes: ['glyphicon', 'glyphicon-menu-left'],
    fontSize: 32
  }
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
        <div className="col-xs-8">
          <p>{text}</p>
        </div>
        <div className={cn(['col-xs-2', classes.rightButton])}>
          {rightButton}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Header);
