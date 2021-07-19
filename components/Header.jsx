import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link'
import Image from "next/Image"

export default function Header({user}){
    return(

<div className="Header">
<Link href="/login">
<Image id="Header__image" width="300" height="50" src="https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png"/></Link>

<div className="header__searchbar">< SearchIcon />

<input id="Header__search" type="text" placeholder="search Instagram"/>
</div>


<div className="Header__icons">
<HomeIcon/>
<QuestionAnswerIcon/>
<ExploreIcon/>
<FavoriteBorderIcon/>
<Link href="/login">
<Image className="userImage" style={{borderRadius:"50% !important"}}  width="25" height="25" objectFit="contain" src={user.photo} onClick={()=>{localStorage.removeItem("user")}}></Image>

</Link>


</div>


</div>
    )
}
