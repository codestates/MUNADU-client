import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import LandingPage from "./Page_Components/LandingPage";
import SignInPage from "./Page_Components/SignInPage";
import MyPage from "./Page_Components/MyPage";
import SurveyPage from "./Page_Components/SurveyPage";
import MainPage from "./Page_Components/MainPage";
import DetailPage from "./Page_Components/DetailPage";
import OtherUserPage from "./Page_Components/OtherUserPage";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const authState = useSelector((state) => state.authReducer);
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch
  // })

  return (
    <Router>
      <Switch>
        <Route exact path="/landingpage" render={() => <LandingPage />} />
        <Route path="/signinpage" render={() => <SignInPage />} />
        <Route
          path="/mypage"
          render={() => {
            return <MyPage />;
          }}
        />
        <Route
          path="/surveypage"
          render={() => {
            return <SurveyPage />;
          }}
        />
        <Route
          path="/mainpage"
          render={() => {
            return <MainPage />;
          }}
        />
        <Route
          path="/detailpage"
          render={() => {
            return <DetailPage />;
          }}
        />
        <Route
          path="/otheruserpage"
          render={() => {
            return <OtherUserPage />;
          }}
        />
        <Route
          path="/"
          render={() => {
            if (authState.isLogin) return <Redirect to="/mypage" />;
            else return <Redirect to="/landingpage" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default withRouter(App);
