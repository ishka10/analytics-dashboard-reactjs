
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Verticalbarchart.css'
import data from './data.json'



const Verticalbarchart = () => {

      return ( 
    <div className="card-2">
        <h3 className="Bartitle">Inpatient vs Outpatient</h3>
        <ResponsiveContainer width="100%" aspect ={4/1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="IP" fill="#8884d8" />
          <Bar dataKey="OP" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
        </div> 
        );
}

 
export default Verticalbarchart;