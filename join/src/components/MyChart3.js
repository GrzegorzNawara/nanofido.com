import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
//import debug from '../debug'

export default class MyChart3 extends PureComponent {
  render() {
    const state=this.props.state
    const data=this.props.data
    const cityNames=this.props.cityNames
    const colorAr=['#a8e090','#8ac96f','#67b048','#459423']
    return (
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          syncId="anyId"
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            {[0,1,2,3].map((i)=>
              <linearGradient id={"color"+i} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorAr[i]}stopOpacity={0.6}/>
                <stop offset="60%" stopColor={colorAr[i]} stopOpacity={0.0}/>
                <stop offset="100%" stopColor={colorAr[i]} stopOpacity={0.6}/>
              </linearGradient>
            )}
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey = 't'
            domain = {['auto', 'auto']}
            name = 'Time'
            type= 'category'
          />
          <YAxis
            scale="sqrt"
          />
          <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />

          <ReferenceLine y={0} stroke="#a70000" strokeWidth={1} strokeDasharray="9 3" />


          {[0,1,2,3].map((i)=>
            (state && state.maxIslandsInitialized>i)?<Area type="monotone" dataKey={"d"+(i+1)} name={cityNames[i+1]} fill={"url(#color"+i+")"} stroke={colorAr[i]} strokeWidth={3} fillOpacity={0.5}  />:null
          )}


          <Legend verticalAlign="top" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
