/**
 * Created by Administrator on 2017/5/8.
 */
import $ from "jquery";
import React from 'react'
import {connect} from 'react-redux'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
  } from "bizcharts";
  import DataSet from "@antv/data-set";
  
  let data;
  $.ajax({
    url: "https://alifd.alibabausercontent.com/materials/@bizcharts/relation-arc-polar/0.2.8/mock.json",
    async : false,
    success: (iData) => { data = iData }
  });
  
  class Arcpolar extends React.Component {
    render() {
      const ds = new DataSet();
      const dv = ds.createView().source(data, {
        type: "graph",
        edges: d => d.links
      });
      dv.transform({
        type: "diagram.arc",
        marginRatio: 0.5 // sortBy: 'frequency' // id, weight, frequency, {function}
      });
      return (
        <div className="cart-list fl">
        <div>
          <Chart data={data} forceFit={true} height={window.innerHeight}>
            <Tooltip showTitle={false} />
            <View data={dv.edges} axis={false}>
              <Coord type="polar" reflect="y" />
              <Geom
                type="edge"
                position="x*y"
                shape="arc"
                color="source"
                opacity={0.5}
                tooltip={"source*target"}
              />
            </View>
            <View data={dv.nodes} axis={false}>
              <Coord type="polar" reflect="y" />
              <Geom
                type="point"
                position="x*y"
                shape="circle"
                size="value"
                color="id"
                opacity={0.5}
                style={{
                  stroke: "grey"
                }}
              >
                <Label
                  content="name"
                  labelEmit={true}
                  textStyle={{
                    fill: "black"
                  }}
                />
              </Geom>
            </View>
          </Chart>
        </div>
        </div>
      );
    }
  }
export default connect(
)(Arcpolar )

