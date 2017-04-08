import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../ducks/packages';

import Header from '../components/Header';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import SceneContainer from '../components/SceneContainer';

const styles = {
  options_container: {
    composes: 'col-xs-4 col-xs-offset-4',
    listStyle: 'none',
    marginTop: 20,
    height: 290,
    overflow: 'scroll'
  },
  nextButton: {
    width: 'auto'
  }
};

class PackagesSelectionScene extends Component {
  onClick = name => {
    this.props.togglePackage(name);
  };

  renderPackages = () => {
    if (!this.props.role) {
      return [];
    }

    const availablePackages = this.props.packages;
    return availablePackages.map(item => {
      return (
        <Checkbox
          key={item.name}
          onClick={this.onClick}
          label={item.name}
          selected={item.checked}
        />
      );
    });
  };

  componentWillMount() {
    this.props.setPackagesForRole(this.props.role);
  }

  render() {
    const { classes, onBack, onNext } = this.props;

    return (
      <SceneContainer>
        <Header
          text={'Tell us what you don\'t need.'}
          rightButton={
            <Button
              className={classes.nextButton}
              label="Next"
              onClick={onNext}
            />
          }
          onBack={onBack}
        />
        <ul className={classes.options_container}>
          {this.renderPackages()}
        </ul>
      </SceneContainer>
    );
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch);
const mapState = store => ({
  role: store.roles.selectedRole,
  packages: store.packages.packages
});

export default connect(mapState, mapActions)(
  injectSheet(styles)(PackagesSelectionScene)
);
