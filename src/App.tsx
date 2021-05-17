import React from 'react';
import './App.scss'
import s from './App.module.scss'
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
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
import {catchError, initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import E404 from "./components/common/E404/E404";
import cn from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
//import {withSuspense} from "./hoc/withSuspense";

/*
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);
*/

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
    initializeApp: () => void
    catchError: (globalError: boolean) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<PropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        //alert("Some error occurred");
        this.props.catchError(true);
        //console.error(promiseRejectionEvent);
        setTimeout(this.props.catchError, 10000, false)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader fullScreen={true}/>
        }

        return (
            <div className={s.appWrapper}>
                {this.props.globalError &&
                <div className={cn(s.error, s.animate__animated, s.animate__fadeInRight)}>
                    <span className={s.closeErrorMess}
                          onClick={() => {
                              this.props.catchError(false)
                          }}>
                         <FontAwesomeIcon icon={faTimes} size='sm'/>
                    </span>
                    <span>Some error occurred</span>
                </div>}
                <HeaderContainer/>
                <NavbarContainer/>
                <main className={s.contentWrapper}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect from="/" to="/profile"/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer pageTitle={'Самураи'}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <MusicContainer/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='*' render={() => <E404/>}/>
                    </Switch>

                    {/*
                    <Route path='/dialogs'
                               render={() => <SuspendedDialogs /> }/>

                    <Route path='/profile/:userId?'
                               render={() => <SuspendedProfile /> }/>
                    */}
                </main>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError
})
const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,
        {initializeApp, catchError}))(App);

const After100GramsApp: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default After100GramsApp