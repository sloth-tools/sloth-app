import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Dropzone from 'react-dropzone';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../ducks/playbooks';

import Button from '../components/Button';
import Header from '../components/Header';
import SceneContainer from '../components/SceneContainer';
import { colors } from '../helpers';

const styles = {
  body_container: {
    composes: 'col-xs-8 col-xs-offset-2',
    fontSize: 20,
    listStyle: 'none',
    marginTop: 50
  },
  nextButton: {
    width: 'auto'
  },
  dropzone: {
    width: '100%',
    color: colors.grayDropzone,
    border: `3px dashed ${colors.grayDropzone}`,
    borderRadius: 10,
    paddingTop: 10,
    height: 350,
    textAlign: 'center'
  },
  dropzone_active: {
    borderColor: colors.blue,
    color: colors.blue
  },
  files: {
    listStyleType: 'none',
    textAlign: 'left',
    marginTop: 30,
    padding: 0
  },
  file: {
    padding: '4px 20px',
    color: colors.blue
  },
  icon: {
    composes: 'glyphicon glyphicon-file',
    '&:before': {
      marginRight: 6,
      verticalAlign: 'middle'
    }
  }
};

class PlaybooksScene extends Component {
  onDrop = files => {
    const validFiles = files.filter(file => /.*\.yml$/.test(file.name));
    this.props.addPlaybooks(validFiles);
  };

  renderFiles = () => {
    const { playbooks: { playbooks }, classes } = this.props;

    return playbooks.map(file => {
      return (
        <li key={file.path} className={classes.file}>
          <span className={classes.icon} />
          &nbsp;{file.name}
        </li>
      );
    });
  };

  render() {
    const { classes, onBack, onNext } = this.props;

    return (
      <SceneContainer>
        <Header
          text="Any ansible playbooks you'd like to add?"
          onBack={onBack}
          rightButton={
            <Button
              className={classes.nextButton}
              label="Next"
              onClick={onNext}
            />
          }
        />

        <div className={classes.body_container}>
          <Dropzone
            onDrop={this.onDrop}
            className={classes.dropzone}
            activeClassName={classes.dropzone_active}
          >
            <p>Drop your ansible playbooks here</p>
            <p>Only .yml files will be accepted</p>
            <ul className={classes.files}>
              {this.renderFiles()}
            </ul>
          </Dropzone>
        </div>
      </SceneContainer>
    );
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch);
const mapState = store => ({ playbooks: store.playbooks });

export default connect(mapState, mapActions)(
  injectSheet(styles)(PlaybooksScene)
);
