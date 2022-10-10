import React from 'react'
import { useDispatch } from 'react-redux'
import { getMealAction } from '../redux';
import SearchView from "../views/searchView"

export default function SearchPresenter(props:any) {
    const dispatch = useDispatch(); 
    function onRegistrationACB(){
        // props.navigation.navigate('SearchPresenter')
    }
    function onLoginACB(){
        // props.navigation.navigate('LoginPresenter')
    }
    function onInputACB(input: any){
        dispatch(getMealAction(input) as any)
    }
    return (
        <SearchView onRegistration={onRegistrationACB} 
        onLogin={onLoginACB}
        onInput={onInputACB}></SearchView>
    )
}