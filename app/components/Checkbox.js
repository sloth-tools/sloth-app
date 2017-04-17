import React, { PureComponent } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

const styles = {
  checkbox: {
    padding: '2px 0',
    margin: '5px 0',
    fontSize: 20,
    cursor: 'pointer'
  },
  checkboxStatus: {
    composes: 'glyphicon',
    color: '#155799',
    '&:before': {
      'margin-right': 6,
      'vertical-align': 'middle'
    }
  },
  selected: {
    composes: 'glyphicon-check'
  },
  unselected: {
    composes: 'glyphicon-unchecked'
  }
};

class Checkbox extends PureComponent {
  onClick = () => {
    this.props.onClick(this.props.label);
  };
  render() {
    const { className, classes, label, selected } = this.props;
    const setCheckboxStatus = selected ? 'selected' : 'unselected';

    return (
      <div
        className={cn([className, classes.checkbox])}
        onClick={this.onClick}
        key={label}
        checked={selected}
      >
        <span
          className={cn(classes.checkboxStatus, classes[setCheckboxStatus])}
        />
        {label}
      </div>
    );
  }
}

export default injectSheet(styles)(Checkbox);
