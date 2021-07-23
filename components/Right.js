import Image from "next/Image"
import Suggesions from "../components/Suggesions"
export default function Right({user}){

  return(

<div className="rigth"style={{marginTop:"15px",position:"static",top:"0"}}>
<div style={{display: 'flex'}}>
    <Image  className="userImagesection" src={user.photo} width="55" height="55"></Image>
    <div style={{marginLeft:"15px"}}><h3 style={{color:"black"}}>{user.name}</h3>
<p style={{color:"grey"}}>{user.name}</p>
    </div>
    <h3 style={{color:"blue",marginLeft:"15px"}}>Switch</h3>
    </div>
    <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><p style={{color:"grey"}}>Suggestions For You</p> <span>See All</span></div>


    <Suggesions name="Instagram" num="5k"/>
    <Suggesions name="Pahul" num="445"/>
    <Suggesions name="Mehul" num="555"/>
    <Suggesions name="Devil" num="255"/>
    <Suggesions name="Dhoni" num="5k"/>
    <Suggesions name="Instagram" num="555"/>
    <Suggesions name="Instagram" num="55"/>
  </div>)
  }
