import React, { Component } from 'react';
import StartScene from './StartScene';
import RoleSelectionScene from './RoleSelectionScene';
import PackagesSelectionScene from './PackagesSelectionScene';
import PlaybooksScene from './PlaybooksScene';
import InstalationScene from './InstalationScene';
import FinalScene from './FinalScene';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../ducks/steps';

class Scenes extends Component {
  onNext = () => {
    this.props.nextStep();
  };

  onBack = () => {
    this.props.previousStep();
  };

  scenes = () => {
    return [
      <StartScene onNext={this.onNext} />,
      <RoleSelectionScene onNext={this.onNext} onBack={this.onBack} />,
      <PackagesSelectionScene onNext={this.onNext} onBack={this.onBack} />,
      <PlaybooksScene onNext={this.onNext} onBack={this.onBack} />,
      <InstalationScene onNext={this.onNext} onBack={this.onBack} />,
      <FinalScene />
    ];
  };
  render() {
    return this.scenes()[this.props.steps.step];
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch);
const mapState = store => ({ steps: store.steps });

export default connect(mapState, mapActions)(Scenes);
