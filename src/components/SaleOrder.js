/**
 * Created by Administrator on 2017/5/8.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'antd';

const columns = [{
  title: '订单编码',
  dataIndex: 'billcode',
  width: '140',
}, {
  title: '组织编码',
  dataIndex: 'saleOrgCode',
  width: '50',
}, {
  title: '组织名称',
  dataIndex: 'saleOrgName',
  width: '160',
}, {
  title: '客户编码',
  dataIndex: 'customerCode',
  width: '80',
}, {
  title: '客户名称',
  dataIndex: 'customerName',
  width: '200',
}, {
  title: '业务员',
  dataIndex: 'salesmanName',
  width: '50',
}, {
  title: '价税合计',
  dataIndex: 'priceAmount',
  width: '50',
}, {
  title: '部门',
  dataIndex: 'departmentName',
  width: '60',
}, {
  title: '来源平台',
  dataIndex: 'platformName',
  width: '60',
}
];
class SaleOrder extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    fetch('../api/order.json')
    .then(response => response.json())
    .then(json => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: json,
        pagination,
      });
    })
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    return (
      <div className="cart-list fl">
 <Table columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
      </div>
    )
  }
  
}


export default connect(
)(SaleOrder )

