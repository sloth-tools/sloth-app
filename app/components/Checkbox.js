import React, { PureComponent } from 'react';
import cn from 'classnames';
import injectSheet from 'react-jss';

const styles = {
  checkbox: {
    padding: '2px 0',
    margin: '5px 0',
    fontSize: 20,
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color .2s ease-in-out'
  },
  selected: {
    backgroundColor: '#18bc9c'
  }
};

class Checkbox extends PureComponent {
  onClick = () => {
    this.props.onClick(this.props.label);
  };
  render() {
    const { className, classes, label, selected } = this.props;

    return (
      <div
        className={cn([className, classes.checkbox], {
          [classes.selected]: selected
        })}
        onClick={this.onClick}
        key={label}
        checked={selected}
      >
        {label}
      </div>
    );
  }
}

export default injectSheet(styles)(Checkbox);
