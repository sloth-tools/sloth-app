import React, { Component } from 'react';
import injectSheet from 'react-jss'
import StartButton from '../components/StartButton'

const styles = {
  container: {
    height: 500,
    width: 800,
    backgroundColor: '#666',
    margin: 0,
    color: '#f2f2f2',
  },
  body: {
    position: 'absolute',
    top: 170,
    left: 100,
    width: 300,
    fontSize: 13,
    lineHeight: 1.5,
  },
  link : {
    color: 'currentcolor',
    textDecoration: 'none',
    fontWeight: 700,
  },
  title: {
    position: 'absolute',
    left: 100,
    top: 20,
    fontSize: 64,
    fontWeight: 400,
  },
  button: {
    position: 'absolute',
    right: 100,
    bottom: 150,
  },
  logo: {
    position: 'absolute',
    right: 100,
    top: 90,
  },
  footer: {
    position: 'absolute',
    width: 600,
    bottom: 10,
    right: 100,
    fontSize: 12,
    textAlign: 'center',
    borderTop: '2px solid #f2f2f2',
  }
}

class StartScene extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
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
        <img className={classes.logo} width='140' src='./img/sloth.png' />
        <StartButton className={classes.button} />
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

export default injectSheet(styles)(StartScene)
