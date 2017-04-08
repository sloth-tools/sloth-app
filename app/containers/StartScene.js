import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Button from '../components/Button';
import SceneContainer from '../components/SceneContainer';

const styles = {
  body: {
    fontSize: 13,
    lineHeight: 1.5
  },
  link: {
    color: 'currentcolor',
    textDecoration: 'none',
    fontWeight: 700
  },
  title: {
    fontSize: 64,
    fontWeight: 400
  },
  button: {
    composes: 'col-xs-8 col-xs-offset-3',
    marginTop: 50
  },
  logo: {
    composes: 'col-xs-8 col-xs-offset-2',
    marginTop: 20
  }
};

class StartScene extends Component {
  render() {
    const { classes } = this.props;

    return (
      <SceneContainer>
        <div className="col-xs-6 col-xs-offset-1">
          <h3 className={classes.title}>Sloth™</h3>
          <div className={classes.body}>
            <p>Let's get your shiny new mac ready!</p>
            <p>
              Under the hood, Sloth will generate a configuration file with all the packages and apps to install.
              Then it will use Ansible Playbooks, Homebrew and Homebrew Cask to automate the process of installation.
            </p>
            <p>
              Just use your arrow keys and the enter button to navigate through the menu.
            </p>
          </div>
        </div>
        <div className="col-xs-5">
          <img className={classes.logo} width="140" src="./img/sloth.png" />
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
