import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const  Topbar = () => {
    return ( 
        <div className="Topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <span className="logo">MSW HOSPITALS</span>
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
                    <img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="profile" className="topAvatar" />
                    
                </div>
            </div>
        </div>
     );
}
 
export default Topbar;