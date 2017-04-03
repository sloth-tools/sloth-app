import React, { Component } from 'react';
import cn from 'classnames'
import injectSheet from 'react-jss'
import { ipcRenderer } from 'electron'

const styles = {
  button: {
    height: 50,
    width: 140,
    fontSize: 20,
    backgroundColor: '#f2f2f2',
    border: 'none',
    borderRadius: 3,
    color: '#666',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#e2e2e2'
    }
  }
}

class StartButton extends Component {
  onClick = () => {
    ipcRenderer.on('run-success', (event, arg) => {
      console.log(arg)
    })
    ipcRenderer.send('run', 'open -a terminal')
  }

  render() {
    const { className, classes } = this.props
    return (
      <button className={cn([className, classes.button])} onClick={this.onClick}>Start</button>
    );
  }
}

export default injectSheet(styles)(StartButton)
