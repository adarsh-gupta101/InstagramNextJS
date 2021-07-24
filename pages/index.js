import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {useState,useEffect} from "react"
import Instagram from "./instagram.jsx"
import Login from "./login.jsx"
import { adduser, selectCount } from "../redux/reducers/loginslice";
import { useDispatch, useSelector } from "react-redux";




export default function Home(){
const state=useSelector(selectCount)
const[user,setuser]=useState(state)
//console.log(user)

  return (
    <div className="Index">
      <Head>
        <title>Instagram 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://freight.cargo.site/t/original/i/a0e492152aa8c83f66bb74972aff66529bbca0dce581d2f557a0e4b02f203824/Insta.png"
        />
      </Head>
{!user?<Login/>:<Instagram/>}

    </div>
  );
}
