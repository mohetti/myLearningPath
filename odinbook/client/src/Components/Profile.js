import { Redirect } from 'react-router-dom';

function Profile(props) {
  return (
    <div>
      {props.loading && <div>Loading...</div>}
      {!props.loading && props.status === 403 && <Redirect to="/login" />}
      {!props.loading && props.status === 200 && <div>Profile</div>}
    </div>
  );
}

export default Profile;
