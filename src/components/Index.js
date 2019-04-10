/**
 * Created by Administrator on 2017/5/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'
import { Link } from 'react-router-dom'
import { getVisibleProducts } from '../reducers/count'
import {Icon,Tabs,Affix,Button,BackTop,Cascader,DatePicker,Input,Rate,Radio,Carousel} from 'antd'
import moment from 'moment';
const TabPane = Tabs.TabPane;
const Search = Input.Search;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
function onChange(date, dateString) {
  console.log(date, dateString);
}
function onChange2 (e){
  console.log('radio checked', e.target.value);
  Index.radiovalue=e.target.value
}
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}
const Index = ({count,radiovalue}) => (
      <div className="container fl main-index">
       <Tabs defaultActiveKey="1" tabPosition='top'>
    <TabPane tab={<span><Icon type="home" />主页</span>} key="1">
    <Carousel autoplay style={{marginLeft:200}}>
    <div> <img className="img-co" src={'../images/a1.jpg'} alt=""/></div>
    <div> <img  className="img-co" src={'../images/a2.jpg'} alt=""/></div>
    <div> <img  className="img-co" src={'../images/a3.jpg'} alt=""/></div>
    <div> <img className="img-co" src={'../images/a4.jpg'} alt=""/></div>
    <div> <img  className="img-co" src={'../images/a5.jpg'} alt=""/></div>
    <div> <img className="img-co" src={'../images/a6.jpg'} alt=""/></div>
  </Carousel>
    <Cascader options={options} onChange={onChange} placeholder="Please select" />
    <div>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    <br />
    <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
    <br />
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </div>
  <Search
    placeholder="input search text"
    style={{ width: 200 }}
    onSearch={value => console.log(value)}
  />
  <div>
    <Input type="textarea" placeholder="Autosize height based on content lines" autosize />
    <div style={{ margin: '24px 0' }} />
    <Input type="textarea" placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
    
  </div>
  <Rate allowHalf defaultValue={2.5} />
  <RadioGroup onChange={onChange2} value={radiovalue}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
        {/* <QueueAnim>

        {count.map(     function (product) {
          if(product.type==1){
            return (
              <div id={product.id} className="product-list fl" key={'a'+product.id}>
              <img src={'../images/'+product.src} alt=""/>
              <p>{product.price}</p>
              <Link to={'/detail/'+product.id}>{product.name}</Link>
              
            </div> 
           
            )}
          }        
        )}
          
        </QueueAnim> */}
        <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
        </TabPane>
    <TabPane tab={<span><Icon type="like" />美女</span>} key="2">
    <QueueAnim>
    {count.map(     function (product) {
          if(product.type==2){
            return (
              <div id={product.id} className="product-list fl" key={'a'+product.id}>
              <img src={'../images/'+product.src} alt=""/>
              <p>{product.price}</p>
              <Link to={'/detail/'+product.id}>{product.name}</Link>
            </div> 
            )}
          }        
        )}
         <Affix offsetBottom={0}>
             <Button type="primary">Affix bottom</Button>
           </Affix>
        </QueueAnim>
       
    </TabPane>
    <TabPane tab={<span><Icon type="coffee" />蔬菜</span>} key="6">
    <QueueAnim>
    {count.map(     function (product) {
          if(product.type==3){
            return (
              <div id={product.id} className="product-list fl" key={'a'+product.id}>
              <img src={'../images/'+product.src} alt=""/>
              <p>{product.price}</p>
              <Link to={'/detail/'+product.id}>{product.name}</Link>
            </div> 
            )}
          }        
        )}
        </QueueAnim>
    </TabPane>
    
    <TabPane tab={<span><Icon type="star" />推荐</span>} key="3">
    <QueueAnim>
    {count.map(     function (product) {
          if(product.type==1){
            return (
              <div id={product.id} className="product-list fl" key={'a'+product.id}>
              <img src={'../images/'+product.src} alt=""/>
              <p>{product.price}</p>
              <Link to={'/detail/'+product.id}>{product.name}</Link>
            </div> 
            )}
          }        
        )}
        </QueueAnim>
    </TabPane>
    <TabPane tab={<span><Icon type="smile" />好玩</span>} key="4">
    <QueueAnim>
        {count.map(product =>
          <div id={product.id} className="product-list fl" key={'a'+product.id}>
            <img src={'../images/'+product.src} alt=""/>
            <p>{product.price}</p>
            <Link to={'/detail/'+product.id}>{product.name}</Link>
          </div>
        )}
        </QueueAnim>
    </TabPane>
    <TabPane tab={<span><Icon type="eye" />帅哥</span>} key="5">
    <QueueAnim>
        {count.map(product =>
          <div id={product.id} className="product-list fl" key={'a'+product.id}>
            <img src={'../images/'+product.src} alt=""/>
            <p>{product.price}</p>
            <Link to={'/detail/'+product.id}>{product.name}</Link>
          </div>
        )}
        </QueueAnim>
    </TabPane>
  </Tabs>
      </div>
)

const mapStateToProps = state => ({
  count: getVisibleProducts(state.count),
  radiovalue:2
})


Index.PropTypes = {
  count: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mashu: PropTypes.array.isRequired
  })).isRequired
}

export default connect(
  mapStateToProps
)(Index)
