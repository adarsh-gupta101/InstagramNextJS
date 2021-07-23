
import Header from "../components/Header.jsx"
import Login from "./login.jsx"
import {useState} from "react"

import Left from "../components/Left"
import Right from "../components/Right"


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

      <div style={{backgroundColor:"#fAfAfA",height:"100vh"}}>
       <Header user={state}/>
       <div className="Instagram__sections">
<Left/><Right user={state}/>
</div>

       </div>

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
