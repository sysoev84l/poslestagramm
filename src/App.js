import React from 'react';
import './App.css'
import s from './App.module.css'
import {Route} from "react-router-dom";
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

const App = (props) => {
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
            </main>
            <Footer/>
        </div>
    )
};

export default App;