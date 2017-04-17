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
  list: {
    listStyle: 'none',
    margin: '100px 0 0',
    height: 430,
    overflow: 'scroll'
  },
  listItem: {
    float: 'left',
    width: '33%'
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
    const { classes } = this.props;

    if (!this.props.role) {
      return [];
    }

    const availablePackages = this.props.packages;
    return availablePackages.map(item => {
      return (
        <li className={classes.listItem} key={item.name}>
          <Checkbox
            onClick={this.onClick}
            label={item.name}
            selected={item.checked}
          />
        </li>
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
          text={'Everything is checked by default'}
          rightButton={
            <Button
              className={classes.nextButton}
              label="Next"
              onClick={onNext}
            />
          }
          onBack={onBack}
        />
        <ul className={classes.list}>
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
