import './FeaturedInfo.css'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const FeaturedInfo = () => {
    return ( 
        <div className="row">
            <div className="card-1">
                <div className="featuredSettings">
                <span className="featuredTitle">ADMITTED PATIENTS</span>
                <br/>
                <span className="featuredNumber">834</span>
                </div>
                </div>
            
                <div className="card-1 even">
                <div className="featuredSettings">
                <span className="featuredTitle">NUMBER OF BEDS</span>
                <br/>
                <span className="featuredNumber">1200</span>
                </div>
                </div>

            <div className="card-1">
            <div className="featuredSettings">
                <span className="featuredTitle">AVAILABLE STAFF</span>
                <br/>
                <span className="featuredNumber">537</span>
                </div>
                </div>

                <div className="card-1 even">
                <div className="featuredSettings">
                <span className="featuredTitle">AVG ER WAITING TIME</span>
                <br/>
                <span className="featuredNumber">43 min</span>
                </div>
                </div>
        </div>
     );
}
 
export default FeaturedInfo;