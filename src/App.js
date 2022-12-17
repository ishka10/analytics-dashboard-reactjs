import Topbar from "./components/Topbar/Topbar";
import FeaturedInfo from "./components/FeaturedInfo/FeaturedInfo";
import "./components/FeaturedInfo/FeaturedInfo.css"
import Verticalbarchart from "./components/Verticalbarchart/Verticalbarchart"
import Chartpie from "./components/Chartpie/Chartpie";
import Table from './components/Table/Table'


function App() {
  return (
    <div className="App">
         <Topbar />
    <FeaturedInfo />
    <div className ="row">
    <Verticalbarchart/>
    <Chartpie/>
    </div>
    <div className ="row">
      <Table/>
    </div>
    </div>
  );
}
export default App;
