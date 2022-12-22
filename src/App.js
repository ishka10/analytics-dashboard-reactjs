import Topbar from "./components/Topbar/Topbar";
import FeaturedInfo from "./components/FeaturedInfo/FeaturedInfo";
import "./components/FeaturedInfo/FeaturedInfo.css"
import Verticalbarchart from "./components/Verticalbarchart/Verticalbarchart"
import Chartline from './components/Chartline/Chartline';
import Table from './components/Table/Table';
import Chartpie1 from './components/ChartPie1/Chartpie1';
import Chartpie2 from './components/ChartPie2/Chartpie2';


function App() {
  return (
    <div className="App">
         <Topbar />
    <FeaturedInfo />
    <div className ="row">
    <Verticalbarchart/>
    <Chartline/>
    </div>
    <div className ="row">
      <Table/>
      <Chartpie2 />
      <Chartpie1 />
      </div>        
    </div>
  );
}
export default App;
