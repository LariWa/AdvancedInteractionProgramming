import React from 'react'
import WelcomeView from "../views/welcomeView"

export default function WelcomePresenter(props: any) {
    function getStartedACB(){
        props.navigation.navigate('LoginPresenter')
    }
  return (
    <WelcomeView getStarted={getStartedACB} />
  )
}