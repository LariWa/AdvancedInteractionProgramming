import React from 'react'
import RegistrationView from "../views/registrationView"

export default function RegistrationPresenter(props:any) {
    function onRegistrationACB(){
        props.navigation.navigate('SearchPresenter')
    }
    function onLoginACB(){
        props.navigation.navigate('LoginPresenter')
    }
    return (
        <RegistrationView onRegistration={onRegistrationACB} onLogin={onLoginACB}></RegistrationView>
    )
}