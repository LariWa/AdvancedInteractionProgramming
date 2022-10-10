import React from 'react'
import LoginView from '../views/loginView'

export default function LoginPresenter(props:any) {
    function onLoginACB(){
        props.navigation.navigate('SearchPresenter')
    }
    function onRegistrationACB(){
        props.navigation.navigate('RegistrationPresenter')
    }
    return (
        // <LoginView onLogin={onLoginACB} onRegistration={onRegistrationACB}></LoginView>
        <LoginView onLogin={onLoginACB} onRegistration={onRegistrationACB}></LoginView>
    )
}