import Image from "next/image"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
export default function Post(){
  return(
    <div className="POST"style={{display: 'flex',flexDirection: 'column',backgroundColor:"white",justifyContent:"center",paddingTop:"25px"}}>

    <div id="useer">
   <Image id="userpostp1"  src="/post.jpg" alt="random" width="40" height="40"></Image>
    <p style={{fontWeight:"400",fontFamily:"emoji",fontSize:"larger"}}>John cena</p></div><Image className="uploadedpic" src="/post.jpg" alt="random" width="400" height="420"/>
    <div>
    <FavoriteBorderIcon/>
<ChatBubbleOutlineOutlinedIcon/>
    </div>

    </div>

  )
}
