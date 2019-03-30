/**
 * Created by Administrator on 2017/5/15.
 */
import React from 'react'
import {connect} from 'react-redux'
import * as TodoActions from '../actions'
import PropTypes from 'prop-types'
import { Breadcrumb,Icon,Button,Tag} from 'antd';
import { Link } from 'react-router-dom'

const Detail = ({match,dispatch,cart,count}) => {
  const handleradd = () => {
    dispatch(TodoActions.inaddproduct(match.params.topicId))
  }
  const handlerdec = () => {
    const id = match.params.topicId
    dispatch(TodoActions.deccount(match.params.topicId))
    if (!(cart.quantityId[id])) {
      dispatch(TodoActions.decproduct(match.params.topicId))
    }
  }
  const id = match.params.topicId
  const product = count[id]
  var Addtoggle;
  if (!(cart.quantityId[id]) || cart.addIds.indexOf(id) === -1) {
    Addtoggle = <a onClick={ handleradd } className="buy">加入购物车</a>
  } else {
    Addtoggle = <div className="detail-cart">
      <a onClick={ handleradd } className="toggle-add">+</a>
      <div className="toggle-num">{cart.quantityId[match.params.topicId]}</div>
      <a onClick={ handlerdec } className="toggle-add">-</a>
    </div>
  }
  return (
    <div className="detail fl">
      <div className="detail-header">
        <Breadcrumb>
          <Breadcrumb.Item>
          <Button type="primary" ghost>
        <Icon type="left" /><Link to="/">Go back</Link>
      </Button>
            {/* <Link to="/">Home</Link> */}
          </Breadcrumb.Item>
          <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="detail-content clear">
        <div className="fl">
          <img src={'../images/'+product.src} alt=""/>
        </div>
        <div className="fl content-right">
          <div className="name">
            {product.name}
          </div>
          <div className="mashu">
          <div>
      <Tag color="pink">pink</Tag>
      <Tag color="red">red</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
          </div>
          <div className="toggle">
            {Addtoggle}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count.byId,
  cart: state.cart
})


Detail.PropTypes = {
  count: React.PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mashu: PropTypes.array.isRequired
  })).isRequired
}

export default connect(
  mapStateToProps
)(Detail)
