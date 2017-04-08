import React, { Component } from 'react';
import injectSheet from 'react-jss';

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

class RoleSelectionScene extends Component {
  onClick = e => {
    const selectedRole = e.currentTarget.dataset.key;
    this.props.selectRole(selectedRole);
    this.props.onNext();
  };

  renderRoles = () => {
    const { classes, roles: { availableRoles } } = this.props;

    return availableRoles.map(role => {
      return (
        <li key={role.key}>
          <Button
            label={role.label}
            dataKey={role.key}
            className={classes.option}
            onClick={this.onClick}
          />
        </li>
      );
    });
  };

  render() {
    const { classes, onBack } = this.props;

    return (
      <SceneContainer>
        <Header text="So, what do you do?" onBack={onBack} />
        <ul className={classes.options_container}>
          {this.renderRoles()}
        </ul>
      </SceneContainer>
    );
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch);
const mapState = store => ({ roles: store.roles });

export default connect(mapState, mapActions)(
  injectSheet(styles)(RoleSelectionScene)
);
