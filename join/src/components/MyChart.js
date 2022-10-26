import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { translationsPL } from '../config/AppConfig'
import debug from '../debug'

export default class MyChart extends PureComponent {
  render() {
    const state=this.props.state
    const tr = (word,lang=this.props.lang) => (lang==='PL')?translationsPL[word]:word
    const data=this.props.data
    const cityNames=this.props.cityNames
    return (
      <ResponsiveContainer>
        <LineChart
          data={data}
          syncId="anyId"
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey = 't'
            domain = {['auto', 'auto']}
            name = 'Time'
          />
          <YAxis
          />
          <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />

          <Line type="monotone" dataKey="r4" stroke="#a60f9c" name={tr("Roman")} strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="r3" stroke="#d149c8" name={tr("Maya")} strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="r2" stroke="#e031a6" name={tr("Egyptian")} strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="r1" stroke="#bbbbbb" name={tr("Mezopotamian")} strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="r" stroke="#cccccc" name={tr("Persians")} strokeWidth={3} dot={false} />





          <Line type="monotone" dataKey="p" stroke="#4773ba" name={tr("Spartans")} strokeWidth={10} dot={false} />





          <Legend verticalAlign="left" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
