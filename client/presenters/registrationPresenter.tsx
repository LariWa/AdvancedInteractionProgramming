import React from 'react'
import RegistrationView from "../views/registrationView"

export default function RegistrationPresenter(props:any) {
    function onRegistrationACB(){
        console.log(222)
    }
    return (
        <RegistrationView onRegistration={onRegistrationACB}></RegistrationView>
    )
}
