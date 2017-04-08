import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { ipcRenderer } from 'electron';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../ducks/roles';

import Button from '../components/Button';
import Header from '../components/Header';
import SceneContainer from '../components/SceneContainer';

const styles = {
  options_container: {
    composes: 'col-xs-6 col-xs-offset-3',
    listStyle: 'none',
    marginTop: 40
  },
  option: {
    marginTop: 30,
    width: '100%',
    height: 80
  }
};

class InstalationScene extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  onClick = () => {
    const data = {
      packages: this.props.packages,
      common: this.props.common
    };
    this.setState({ loading: true });
    ipcRenderer.send('install', JSON.stringify(data));
  };

  componentDidMount() {
    ipcRenderer.on('running', () => {
      console.log('moving to next');
      this.props.onNext();
    });
  }

  render() {
    const { classes, onBack } = this.props;

    return (
      <SceneContainer>
        <Header text="Ready to go?" onBack={onBack} />
        <div className={classes.options_container}>
          <Button
            disabled={this.state.loading}
            label="Install!"
            className={classes.option}
            onClick={this.onClick}
            primary
          />
        </div>
      </SceneContainer>
    );
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch);
const mapState = store => ({
  packages: store.packages.packages,
  common: store.packages.common
});

export default connect(mapState, mapActions)(
  injectSheet(styles)(InstalationScene)
);
