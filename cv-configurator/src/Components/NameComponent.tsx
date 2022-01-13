import React from 'react';

type FormProps = {
  name: string;
  editMode: boolean;
  openInputField: (e: React.MouseEvent) => void;
  isNameInputField: boolean;
  changeName: (e: React.ChangeEvent) => void;
};

type InputNameProps = {
  editMode?: boolean;
  openInputField?: (e: React.MouseEvent) => void;
  name: string;
  changeName?: (e: React.ChangeEvent) => void;
};

const InputName = (props: InputNameProps) => {
  return (
    <h2>
      <input
        id='name'
        name='name'
        type='text'
        defaultValue={props.name}
        onChange={props.changeName}
      />
    </h2>
  );
};

const StaticName = (props: InputNameProps) => {
  return (
    <h2 id='name' onClick={props.editMode ? props.openInputField : undefined}>
      {props.name}
    </h2>
  );
};

class NameComponent extends React.Component<FormProps, {}> {
  fragmentToRender = () => {
    if (this.props.editMode && this.props.isNameInputField) {
      return (
        <InputName name={this.props.name} changeName={this.props.changeName} />
      );
    }
    return (
      <StaticName
        editMode={this.props.editMode}
        openInputField={this.props.openInputField}
        name={this.props.name}
      />
    );
  };
  render() {
    return <React.Fragment>{this.fragmentToRender()}</React.Fragment>;
  }
}

export default NameComponent;
