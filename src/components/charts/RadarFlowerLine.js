/**
 * Created by Administrator on 2017/5/8.
 */
import $ from "jquery";
import React from 'react'
import {connect} from 'react-redux'
import { Chart, Axis, Tooltip, Geom, Coord } from 'bizcharts';
let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/radar-flower-line/0.1.2/mock.json",
  async : false,
  success: (iData) => { data = iData }
});

// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
const scale = {
  x: {
    tickInterval: 30,
  },
};

class RadarFlowerLine extends React.Component {
  constructor() {
    super();
    this.state = {
      coordType: 'polar',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        coordType: 'rect',
      });
    }, 2000);
  }

  render() {
    return (
        <div className="cart-list fl">
      <Chart height={600} data={data} scale={scale} padding={[30, 20, 95, 20]} forceFit>
        <Axis name="y" visible={false} />
        <Tooltip />
        <Coord type={this.state.coordType} />
        <Geom type="line" position="x*y" size={2} color="#ff8800" />
      </Chart>
      </div>
    );
  }
}

// CDN END
export default connect(
)(RadarFlowerLine )

