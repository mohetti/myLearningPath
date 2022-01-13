import React from 'react';

type CredentialProps = {
  phone: string;
  email: string;
  editMode: boolean;
  isEmailInputField: boolean;
  changeName: (e: React.ChangeEvent) => void;
  openChangeNameInputField: (e: React.MouseEvent) => void;
};

const StaticEmail = (props: { email: string }) => {
  return <React.Fragment>{props.email}</React.Fragment>;
};
class Credentials extends React.Component<CredentialProps, {}> {
  renderedEmailComp = () => {
    if (this.props.editMode && this.props.isEmailInputField) {
      return (
        <input
          id='email'
          name='email'
          type='text'
          onChange={this.props.changeName}
          defaultValue={this.props.email}
        />
      );
    }
    return <StaticEmail email={this.props.email} />;
  };
  render() {
    return (
      <section>
        <span
          id='email'
          onClick={
            !this.props.isEmailInputField
              ? this.props.openChangeNameInputField
              : undefined
          }
        >
          {this.renderedEmailComp()}
        </span>

        <span>
          {' '}
          Tel: <span>XXX-XXX-XXX</span>
        </span>
      </section>
    );
  }
}

export default Credentials;
