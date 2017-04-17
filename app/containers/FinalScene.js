import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Header from '../components/Header';
import SceneContainer from '../components/SceneContainer';

const styles = {
  body_container: {
    composes: 'col-xs-6 col-xs-offset-3',
    listStyle: 'none',
    marginTop: 20
  },
  title: {
    marginBottom: 40
  },
  thanks: {
    marginTop: 40
  }
};

class FinalScene extends Component {
  render() {
    const { classes } = this.props;

    return (
      <SceneContainer>
        <Header text="We're done here!" />
        <div className={classes.body_container}>
          <h2 className={classes.title}>That was easy, right?</h2>
          <p>
            You have probably noticed that we opened a terminal window for you.
            Don't be afraid of it, it doesn't bite!
          </p>
          <p>
            We'll need your password there to allow Sloth to install everything.
            Just type it there, press Enter and wait until it's done!
          </p>
          <p className={classes.thanks}>Thank you for using Sloth =)</p>
        </div>
      </SceneContainer>
    );
  }
}

export default injectSheet(styles)(FinalScene);
