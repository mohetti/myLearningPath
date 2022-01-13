import React from 'react';
import { AppState } from './helpers/types';
import NameComponent from './NameComponent';
import Credentials from './Credentials';

const comparisionValidators = [
  { stringName: 'name', boolName: 'isNameInputField' },
  { stringName: 'email', boolName: 'isEmailInputField' },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  isNameInputField: boolean;
  isEmailInputField: boolean;
};

class Form extends React.Component<AppState, FormState> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      name: 'Your Name',
      email: 'example@email.com',
      phone: 'XXX-XXX-XXX',
      isNameInputField: false,
      isEmailInputField: false,
    };
  }

  openChangeNameInputField = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const value = `is${target.id.charAt(0).toUpperCase()}${target.id.substring(
      1
    )}InputField`;
    this.setState((prevState) => ({
      ...prevState,

      [value]: !prevState[value as keyof FormState],
    }));
  };

  changeName = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    this.setState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  targetToClose = (input: string) => {
    const arr = comparisionValidators.filter((x) => {
      if (
        this.state[x.boolName as keyof FormState] &&
        !(x.stringName === input)
      ) {
        return x;
      }
      return undefined;
    });
    return arr;
  };

  closeInputs = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const targetToClose = this.targetToClose(target.id);
    if (targetToClose.length > 0) {
      return this.setState((prevState) => ({
        ...prevState,
        [targetToClose[0].boolName]: false,
      }));
    }
  };

  render() {
    return (
      <div onClick={this.props.isInEditMode ? this.closeInputs : undefined}>
        <NameComponent
          name={this.state.name}
          editMode={this.props.isInEditMode}
          openInputField={this.openChangeNameInputField}
          isNameInputField={this.state.isNameInputField}
          changeName={this.changeName}
        />
        <Credentials
          phone={this.state.phone}
          email={this.state.email}
          changeName={this.changeName}
          editMode={this.props.isInEditMode}
          isEmailInputField={this.state.isEmailInputField}
          openChangeNameInputField={this.openChangeNameInputField}
        />
      </div>
    );
  }
}

export default Form;
