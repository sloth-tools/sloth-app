import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    composes: 'container row',
    height: 500,
    width: 800,
    backgroundColor: '#2c3e50',
    margin: 0,
    color: 'white'
  },
  content: {
    marginTop: 80
  },
  footer: {
    position: 'absolute',
    width: 600,
    bottom: 10,
    right: 100,
    fontSize: 12,
    textAlign: 'center',
    borderTop: '2px solid #f2f2f2',
    paddingTop: 15
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
        <div className={classes.footer}>
          <p>
            This is an open source project created by Unai Esteibar on top of Sloth™.
          </p>
          <p>
            Sloth™ is an open source project created by Alejandro Espinoza and Marcio Barrios.
          </p>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SceneContainer);
