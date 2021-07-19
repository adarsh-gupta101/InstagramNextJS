
import Header from "../components/Header.jsx"
import Login from "./login.jsx"
import {useState} from "react"


import { adduser, selectCount } from "../redux/reducers/loginslice";
import { useDispatch, useSelector } from "react-redux";

export default function Instagram() {


  const state = useSelector(selectCount);

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
} else {
    console.log('we are running on the server');
}

    if (state.name) return(

      <div style={{backgroundColor:"#f7f5f5"}}>
       <Header user={state}/></div>

    )
    else return(<Login/>)

}
    export async function getInitialProps() {
      if (typeof window !== 'undefined') {
        console.log('we are running on the client')
      if (!data) {
  return {
    notFound: true,
  }
}

      return {
        props: data, // will be passed to the page component as props
      }
    }
}
