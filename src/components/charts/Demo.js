/**
 * Created by Administrator on 2017/5/8.
 */
import $ from "jquery";
import React from 'react'
import {connect} from 'react-redux'
import { Chart, View, Geom } from 'bizcharts';
import DataSet from '@antv/data-set';
  let data;
  $.ajax({
    url: "https://alifd.alibabausercontent.com/materials/@bizcharts/map-hex-choropleth-map/0.1.7/mock.json",
    async : false,
    success: (iData) => { data = iData }
  });
  
  
  function addPoint(collection, point) {
    const count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  
    for (let i = 0; i < count; i++) {
      collection.push(point);
    }
  }
  
  function getCount(x, y, medianX, medianY) {
    const distance = Math.pow(x - medianX, 2) + Math.pow(y - medianY, 2);
    if (distance < 4) {
      return 3;
    } else if (distance < 16) {
      return 3;
    } else if (distance < 64) {
      return 2;
    }
    return 1;
  }
  
  const geoDv = new DataSet.View().source(data, {
    type: 'GeoJSON',
  });
  // console.log(GeoJSON);
  const ranges = {
    lat: geoDv.range('latitude'),
    lon: geoDv.range('longitude'),
  };
  const medians = {
    lat: geoDv.median('latitude'),
    lon: geoDv.median('longitude'),
  };
  
  // console.log(ranges, medians);
  const userData = [];
  for (let lon = ranges.lon[0]; lon <= ranges.lon[1]; lon += 0.5) {
    for (let lat = ranges.lat[0]; lat <= ranges.lat[1]; lat += 0.5) {
      if (geoDv.geoContains(data, [lon, lat])) {
        addPoint(userData, {
          latitude: lat,
          longitude: lon,
        }, getCount(lon, lat, medians.lon, medians.lat));
      }
    }
  }
  // console.log(userData);
  const userDv = new DataSet.View().source(userData).transform({
    // sizeByCount: true,
    type: 'bin.hexagon',
    fields: ['longitude', 'latitude'],
    binWidth: [2, 3],
    as: ['longitude', 'latitude', 'count'],
  });
  // console.log(userDv);
  
  const scale = {
    latitude: {
      sync: true,
      nice: false,
    },
    longitude: {
      sync: true,
      nice: false,
    },
  };
  
  class Demo extends React.Component {
    render() {
      return (
        <div className="cart-list fl">
        <Chart height={window.innerHeight} scale={scale} forceFit padding={0}>
          {/* // geo view */}
          <View data={geoDv}>
            <Geom type="polygon" position="longitude*latitude" color="grey" opacity={0.3} />
          </View>
          {/* // user view */}
          <View data={userDv}>
            <Geom
              type="polygon"
              position="longitude*latitude"
              color={['count', '#BAE7FF-#1890FF-#0050B3']}
              size={window.innerHeight / 20}
              style={{
                lineWidth: 10,
                stroke: 'white',
              }}
            />
          </View>
        </Chart>
        </div>
      );
    }
  }
  
  // CDN END
export default connect(
)(Demo )

