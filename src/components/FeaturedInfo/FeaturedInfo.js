import './FeaturedInfo.css'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
const FeaturedInfo = () => {
    return ( 
        <div className="row">
            <div className="card-1">
                <div className="featuredIcon">
                <AccessibilityNewIcon />
                </div>
                <div>
                <span className="featuredTitle">Admitted Patients</span>
                <br/>
                <span className="featuredNumber">834</span>
                </div>
                </div>
            <div className="card-1">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$45782.45</span>
                    <span className="featuredMoneyRate">11.11</span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="card-1">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$23892.45</span>
                    <span className="featuredMoneyRate">10.4</span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="card-1">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$23892.45</span>
                    <span className="featuredMoneyRate">10.4</span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
     );
}
 
export default FeaturedInfo;