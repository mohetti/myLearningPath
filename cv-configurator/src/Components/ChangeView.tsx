import React from 'react';
import { ChangeViewProps, NoState } from './helpers/types';
class ChangeView extends React.Component<ChangeViewProps, NoState> {
  render() {
    return (
      <React.Fragment>
        <button
          className={`button ${this.props.isInEditMode && 'focusedMode'}`}
          onClick={this.props.changeMode}
        >
          Edit Mode
        </button>
        <button
          className={`button ${!this.props.isInEditMode && 'focusedMode'}`}
          onClick={this.props.changeMode}
        >
          Preview Mode
        </button>
      </React.Fragment>
    );
  }
}
export default ChangeView;
