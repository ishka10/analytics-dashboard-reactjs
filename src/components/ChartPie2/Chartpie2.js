import './Chartpie2.css'
import { PieChart, Pie, Legend,Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Cardiology', value: 25 },
    { name: 'Gynecology', value: 32},
    { name: 'Neurology', value: 19 },
    { name: 'Pediatrics', value: 15 },
    { name: 'Dentistry', value: 9 }
  ];
  
  const COLORS = ['#82ca9d', '#ff4da6', '#ff6666','#ffa31a','#8884d8'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
const Chartpie2 = () => {
    return ( <div className="card-pie2">
    <h3 className="Bartitle">Patients by Department</h3>
    <ResponsiveContainer>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
     );
}
 
export default Chartpie2;