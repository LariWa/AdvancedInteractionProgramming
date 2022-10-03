import React from 'react'
import LoginView from "../views/loginView"

export default function LoginPresenter(props:any) {
    function onLoginACB(){
        console.log(222)
    }
    return (
        <LoginView onLogin={onLoginACB}></LoginView>
    )
}
