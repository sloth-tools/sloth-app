import React, { PureComponent } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

const styles = {
  header: {
    position: 'absolute',
    top: 15,
    right: 0,
    left: 0,
    fontSize: 16,
    textAlign: 'center',
    borderBottom: '2px solid #f2f2f2',
    marginTop: 20,
    paddingBottom: 10
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    float: 'left',
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
  },
  headerTitle: {
    composes: 'col-xs-8',
    lineHeight: '35px'
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
        <div className={classes.headerTitle}>
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
