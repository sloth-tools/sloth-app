import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Button from '../components/Button';
import SceneContainer from '../components/SceneContainer';

const styles = {
  body: {
    fontSize: 15,
    lineHeight: 1.5,
    maxWidth: '60%',
    margin: '0 auto',
    textAlign: 'left',
  },
  p: {
    marginTop: 20,
  },
  link: {
    color: 'currentcolor',
    textDecoration: 'none',
    fontWeight: 700,
  },
  title: {
    fontSize: 64,
    fontWeight: 400,
    margin: '20px 0 30px',
  },
  button: {
    marginTop: 30,
  },
  center: {
    textAlign: 'center',
  },
};

class StartScene extends Component {
  render() {
    const { classes } = this.props;

    return (
      <SceneContainer>
        <div className={classes.center}>
          <img width="140" src="./img/sloth.png" />
          <h3 className={classes.title}>Sloth</h3>
          <div className={classes.body}>
            <p className={classes.p}>Let's get your shiny new mac ready!</p>
            <p className={classes.p}>
              Under the hood, Sloth will generate a configuration file with all the packages and apps to install.
              Then it will use Ansible Playbooks, Homebrew and Homebrew Cask to automate the process of installation.
            </p>
          </div>
          <Button
            label="Start"
            className={classes.button}
            onClick={this.props.onNext}
            block
            primary
          />
        </div>
      </SceneContainer>
    );
  }
}

export default injectSheet(styles)(StartScene);
