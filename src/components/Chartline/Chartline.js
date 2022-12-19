import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chartline.css'
const data = [
    {
      name: 'Physiologist',
      wait_time: 25.45,
      
    },
    {
      name: 'Pediatrician',
      wait_time: 29.35,
      
    },
    {
      name: 'Neurologist',
      wait_time: 26.45,
      
    },
    {
      name: 'Gynecologist',
      wait_time: 30.45,
      
    },
    {
      name: 'Dentist',
      wait_time: 20.34,
    
    },
    {
      name: 'Cardiologist',
      wait_time: 32.17,
      
    },
  ];
const Chartline = () => {
    return ( <div className="card-2">
    <h3 className="pieTitle">Average wait time by Department</h3>
    <ResponsiveContainer width="100%" aspect ={4/1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wait_time" stroke="#8884d8" activeDot={{ r: 6 }}  strokeWidth={3}/>
          
        </LineChart>
      </ResponsiveContainer>
    </div> );
}
 
export default Chartline;