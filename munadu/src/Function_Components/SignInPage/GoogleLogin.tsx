import { GoogleLoginButton } from "ts-react-google-login-component";
import { signInSocial } from "../../Redux/Reducers/authReducer";
import { useDispatch } from "react-redux";
import Button from "../../StyledComponents/button";
import { GoogleIcon } from "../../StyledComponents/sign";

export default function GoogleLogin() {
  const clientID = {
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: "profile email",
  };
  const dispatch = useDispatch();

  const resGoogle = (googleUser: gapi.auth2.GoogleUser): void => {
    const id_token = googleUser.getAuthResponse(true).id_token;
    dispatch(signInSocial({ token: id_token, type: 0 }));
  };

  return (
    <div>
      <GoogleLoginButton
        clientConfig={clientID}
        responseHandler={resGoogle}
        failureHandler={(e) => {
          console.log(e);
        }}
      >
        <Button color="white" margin="10px 0px" width="100%" height="38px">
          <GoogleIcon src="/google.png"></GoogleIcon>
          구글 로그인
        </Button>
      </GoogleLoginButton>
    </div>
  );
}
