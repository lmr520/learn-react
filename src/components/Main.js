/**
 * Created by Administrator on 2017/5/1.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import Index from './Index'
import Login from './Login'
import Regist from './Regist'
import MyTable from './MyTable'
import FuTable from './FuTable'
import CustTable from './CustTable'
import Groupedcolumn from './charts/Groupedcolumn'
import Grouped from './charts/Grouped'
import Columnanimated from './charts/Columnanimated'
import Linerainandflow from './charts/Linerainandflow'
import Donut from './charts/Donut'
import Labelline from './charts/Labelline'
import GaugeColor from './charts/GaugeColor'
import Demo from './charts/Demo'
import RadarFlowerLine from './charts/RadarFlowerLine'
import Arcpolar from './charts/Arcpolar'
import Saleorder from './SaleOrder'
import Destination from './Destination'
import Plan from './Plan'
import Detail from './Detail'
import {Menu, Icon,Badge} from 'antd'
const SubMenu = Menu.SubMenu
const Basic = () => (

  <Router >
    <div className="clear container-main">
      <div className="fl">
    <Menu 
          theme={'dark'}
          style={{width: 240}}
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="appstore"/><span>商店</span></span>}>
            <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">购物车</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/topics">购买记录 &nbsp; &nbsp; &nbsp;<Badge count={5}>
           <a href="#" className="head-example" />
              </Badge></Link></Menu.Item>
            <Menu.Item key="4"><Link to="/login">登录</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/regist">注册</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/table">表格</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/futable">表子格</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/saleorder">销售订单</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="mail"/><span>我的</span></span>}>
            <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">购物车</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/topics">购买记录 &nbsp; &nbsp; &nbsp;<Badge count={5}>
            <a href="#" className="head-example" />
           </Badge></Link></Menu.Item>
            <Menu.Item key="4"><Link to="/login">登录</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/regist">注册</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/custtable">表格</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/futable">表子格</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/saleorder">销售订单</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="camera"/><span>服务</span></span>}>
            <Menu.Item key="1"><Link to="/demo">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/radarFlowerLine">雷达</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/gaugeColor">仪表 &nbsp; &nbsp; &nbsp;<Badge count={5}>
      <a href="#" className="head-example" />
    </Badge></Link></Menu.Item>
            <Menu.Item key="4"><Link to="/groupedcolumn">分組柱狀</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/grouped">分组条形</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/columnanimated">动态柱状</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/linerainandflow">折线图</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/donut">基础环图</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/labelline">基础饼图</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/arcpolar">关系图</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="sub3"><Link to="/saleorder"><Icon type="setting"/>设置</Link></Menu.Item>
        </Menu>
       
      </div>

      <Route exact path="/" component={Index}/>
      <Route path="/login" component={Login}/>
      <Route path="/regist" component={Regist}/>
      <Route path="/table" component={MyTable}/>
      <Route path="/custtable" component={CustTable}/>
      <Route path="/futable" component={FuTable}/>
      <Route path="/saleorder" component={Saleorder}/>
      <Route path="/about" component={Destination}/>
      <Route path="/topics" component={Plan}/>
      <Route path="/detail/:topicId" component={Detail} />
      <Route path="/groupedcolumn" component={Groupedcolumn}/>
      <Route path="/grouped" component={Grouped}/>
      <Route path="/columnanimated" component={Columnanimated}/>
      <Route path="/linerainandflow" component={Linerainandflow}/>
      <Route path="/donut" component={Donut}/>
      <Route path="/labelline" component={Labelline}/>
      <Route path="/gaugeColor" component={GaugeColor}/>
      <Route path="/demo" component={Demo}/>
      <Route path="/radarFlowerLine" component={RadarFlowerLine}/>
      <Route path="/arcpolar" component={Arcpolar}/>
    </div>
  </Router>
)

export default connect()(Basic)


