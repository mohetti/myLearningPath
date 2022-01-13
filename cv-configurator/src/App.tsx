import React from 'react';
import './App.css';
import { AppState, NoProps } from './Components/helpers/types';
import ChangeView from './Components/ChangeView';
import Form from './Components/Form';

const Header: React.FC = () => {
  return <h1>CV Configurator</h1>;
};

class App extends React.Component<NoProps, AppState> {
  state = {
    isInEditMode: true,
  };

  changeMode = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;

    if (target.classList.contains('focusedMode')) return;

    return this.setState((prevState) => ({
      isInEditMode: !prevState.isInEditMode,
    }));
  };

  render() {
    const HeaderComp = <Header />;
    const SelectView = (
      <ChangeView
        isInEditMode={this.state.isInEditMode}
        changeMode={this.changeMode}
      />
    );

    return (
      <div className={`App ${!this.state.isInEditMode && 'noSelect'}`}>
        {HeaderComp}
        {SelectView}
        <Form isInEditMode={this.state.isInEditMode} />
      </div>
    );
  }
}

export default App;
