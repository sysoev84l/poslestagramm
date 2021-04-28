import React from 'react';
import './App.scss'
import s from './App.module.scss'
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import MusicContainer from "./components/Music/MusicContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
//import {withSuspense} from "./hoc/withSuspense";

/*const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const News = React.lazy(() => import('./components/News/News'));
const MusicContainer = React.lazy(() => import('./components/Music/MusicContainer'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));*/

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader fullSize={true}/>
        }
        return (
            <div className={`${s.appWrapper} ${s.container}`}>
                <HeaderContainer/>
                <NavbarContainer/>
                <main className={s.appWrapperContent}>
                    {/*<Route exact path='/' render={() => <ProfileContainer/>}/>*/}
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <MusicContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>

                    {/*<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    <Route path='/news' render={withSuspense(News)}/>
                    <Route path='/music' render={withSuspense(MusicContainer)}/>
                    <Route path='/settings' render={withSuspense(Settings)}/>
                    <Route path='/login' render={withSuspense(LoginPage)}/>*/
                    }
                </main>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps,
        {initializeApp}))(App);

const After100GramsApp = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default After100GramsApp