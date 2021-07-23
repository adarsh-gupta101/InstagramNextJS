import Image from "next/Image"
export default function Suggesions({num,name}){
  return(
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px"}}>
    <Image  style={{border:"1px solid blue !important" ,borderRadius:"50% !important"}} src="/instagramlogo.png" width="55" height="55"></Image>
    <div><p style={{margin:"0",fontSize:"1.2rem",fontWeight:"bold"}}>{name}</p > <span style={{color:"grey"}}>Followed by {num} People</span></div>
    <span style={{color:"blue",fontWeight:"bold"}}>Follow</span>

    </div>
  )
}
