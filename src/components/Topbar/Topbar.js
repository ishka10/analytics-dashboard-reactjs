import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const  Topbar = () => {
    return ( 
        <div className="Topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <span className="logo">MSW Hospitals</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        <span className="topbarBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>    
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Overall&clotheColor=Gray01&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Light" alt="profile" className="topAvatar" />
                </div>
            </div>
        </div>
     );
}
 
export default Topbar;