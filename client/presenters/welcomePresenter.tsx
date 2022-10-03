import React from 'react'
import WelcomeView from "../views/welcomeView"

export default function WelcomePresenter(props: any) {
    function getStartedACB(){
        console.log(111)
    }
  return (
    <WelcomeView getStarted={getStartedACB} />
  )
}
