import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

//import debug from '../debug'

export default class MyChart4 extends PureComponent {
  render() {
    const state=this.props.state
    const data=this.props.data
    const cityNames=this.props.cityNames
    const colorAr=['#4773ba','#64a331','#9c2b9e','#119997']
    return (
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8ac9ed" stopOpacity={0.8}/>
              <stop offset="75%" stopColor="#8ac9ed" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4b89ad" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4b89ad" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="People Saved" dataKey="vp" stroke="#a70000" fill="#a70000" fillOpacity={0.6} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
