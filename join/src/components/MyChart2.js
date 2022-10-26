import React, { PureComponent } from 'react';
import {
  LineChart,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Label
} from 'recharts';
import { translationsPL } from '../config/AppConfig'
import debug from '../debug'


export default class MyChart2 extends PureComponent {
  render() {
    const state=this.props.state
    const tr = (word,lang=this.props.lang) => (lang==='PL')?translationsPL[word]:word
    const data=this.props.data
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
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8ac9ed" stopOpacity={0.8}/>
              <stop offset="75%" stopColor="#8ac9ed" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4b89ad" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4b89ad" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorFa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#07578c" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#07578c" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey = 'time'
            name = 'Time'
          />
          <YAxis width={80} yAxisId="left" stroke="#4b89ad">
              <Label
                  value={tr("Goods Gathered and Delivered")}
                  angle={-90}
                  fill='#4b89ad'
                  fontSize={20}
              />
          </YAxis>
          <YAxis width={80} yAxisId="left2" stroke="#c71414">
              <Label
                  value={tr("Enemies")}
                  angle={-90}
                  fill='#c71414'
                  fontSize={20}
              />
          </YAxis>
          <YAxis width={80} yAxisId="right"  orientation="right" stroke='#0a6114'>
              <Label
                  value={tr("People Saved")}
                  angle={90}
                  fill='#0a6114'
                  fontSize={20}
              />
          </YAxis>
          <YAxis width={80} yAxisId="right2" orientation="right" stroke='#07578c'>
              <Label
                  value={tr("Factories")}
                  angle={90}
                  fill='#07578c'
                  fontSize={20}
              />
          </YAxis>
          <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />


          <Line yAxisId="right2" type="linear" dataKey={this.props.labelC} stroke="url(#colorFa)" opacity={1} strokeWidth={15} dot={false} strokeDashArray="1 2"/>
          <Area yAxisId="left" type="linear" dataKey={this.props.labelB} fill="#8ac9ed" stroke="#6eb3db" strokeWidth={5} fillOpacity={1} fill="url(#colorUv)" />
          <Area yAxisId="left" type="linear" dataKey={this.props.labelA} fill="#4b89ad" stroke="#2a688c" strokeWidth={5} fillOpacity={1} fill="url(#colorPv)" />
          <Line yAxisId="left2" type="linear" dataKey={this.props.labelF} stroke="#c71414" opacity={1} strokeWidth={8} dot={false}/>


          <Line yAxisId="right" type="linear" dataKey={this.props.labelD} stroke="#63d417" opacity={1} strokeWidth={8} dot={false} />

          <ReferenceLine yAxisId="left" y={1.1*this.props.maxScoreLeft} stroke="#eeeeee" alwaysShow />
          <ReferenceLine yAxisId="left2" y={1.1*this.props.maxScoreLeft2} stroke="#eeeeee" alwaysShow />
          <ReferenceLine yAxisId="right" y={1.1*this.props.maxScoreRight} stroke="#eeeeee" alwaysShow />
          <ReferenceLine yAxisId="right2" y={1.1*this.props.maxScoreRight2} stroke="#eeeeee" alwaysShow />


        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
