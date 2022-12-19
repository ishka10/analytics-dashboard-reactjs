import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Verticalbarchart.css'
const data = [
    {
      name: 'Physiologist',
      IP: 4000,
      OP: 2400,
      
    },
    {
      name: 'Pediatrician',
      IP: 3000,
      OP: 1398,
      
    },
    {
      name: 'Neurologist',
      IP: 2000,
      OP: 9800,
      
    },
    {
      name: 'Gynecologist',
      IP: 1890,
      OP: 4800,
      
    },
    {
      name: 'Dentist',
      IP: 3490,
      OP: 4300,
      
    },
    {
      name: 'Cardiologist',
      IP: 3490,
      OP: 4300,
      
    },
  ];
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