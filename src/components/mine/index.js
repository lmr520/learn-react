/**
 * Created by Administrator on 2017/5/8.
 */
import React from 'react'
import {connect} from 'react-redux'
import Texty from 'rc-texty';
// import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';
import {Button,Carousel,Icon,Tabs,message,Modal,Progress,Popconfirm,Spin,Alert} from 'antd';
const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;
class Index extends React.Component {
  state = {
    show: true,
    seconds: 0,
  }
tick = () => {
  const { seconds } = this.state;
  if(seconds%50==0){
    this.setState({
      seconds: seconds + 1,
      show:false,
  })
  }else{
    this.setState({
      seconds: seconds + 1,
      show:true,
  })
  }
}
componentDidMount() {
    // 定时器，可以修改1000为自己想要的时间，
    this.interval = setInterval(() => this.tick(),500);  
}

componentWillUnmount() {
    // 清除定时器
    clearInterval(this.interval);
}

  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }

  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }

  onClick = () => {
    this.setState({
      show: false,
    }, () => {
      this.setState({
        show: true
      });
    });
  }
  onTableChange=(key)=>{
    console.log(key);
  }
  getFresh=() =>{
    const c ={animation:[{ x: 130, type: 'set' },
    { x: 100, delay: 500, duration: 450 },
    {
      ease: 'easeOutQuart',
      duration: 300,
      x: 0,
    },
    {
      letterSpacing: 0,
      delay: -300,
      scale: 0.9,
      ease: 'easeInOutQuint',
      duration: 1000,
    },
    { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },]
    };
    return c;
  }
  info=()=> {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  
 infosuccess=()=>{
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }
  
 infoerror=()=>{
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }
  
 infowarning=()=>{
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
   showConfirm=()=>{
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
   custconfirm=()=> {
    message.info('Clicked on Yes.');
  }
   showDeleteConfirm=()=> {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
   showPropsConfirm=()=>{
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      okButtonProps: {
        disabled: true,
      },
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  render() {
    const success = () => {
      message.success('This is a message of success');
    };
    
    const error = () => {
      message.error('This is a message of error');
    };
    
    const warning = () => {
      message.warning('This is message of warning');
    };
    const loading = () => {
      message.loading('Action in progress..', 2.5)
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Loading finished is finished', 2.5));
    };
    const text = 'Are you sure to delete this task?';
    return (
      <div className="cart-list fl">
      <div className="combined-wrapper">
        <div className="combined-reload">
          <Button shape="circle" icon="reload" onClick={this.onClick} />
        </div>
        {this.state.show && (
          <div className="combined">
            <div className="combined-shape">
              <div className="shape-left">
                <TweenOne
                  animation={[
                    { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
              <div className="shape-right">
                <TweenOne
                  animation={[
                    { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
            </div>
            <Texty
              className="title"
              type="mask-top"
              delay={400}
              enter={this.getEnter}
              interval={this.geInterval}
              component={TweenOne}
              componentProps={this.getFresh}
              id="b"
            >
                用    友    云
            </Texty>
            <br></br>
            <br></br>
            <TweenOne
              className="combined-bar"
              animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
            />
            <Texty
              className="content"
              type="bottom"
              split={this.getSplit}
              delay={2200}
              interval={30}
            >
             数字化商业基础设施平台，实现企业内外部数据整合，实现商业模式及管理创新.
            </Texty>
          </div>
        )}
      </div>
      <Tabs defaultActiveKey="1" onChange={this.onTableChange} style={{marginTop:50,marginLeft:20}}>
    <TabPane tab={<span><Icon type="like" />云产品</span>} key="1">
    <div>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
    <Button onClick={loading}>Display a sequence of message</Button>
  </div>
  <div>
    <Button onClick={this.showConfirm}>
      Confirm
    </Button>
    <Button onClick={this.showDeleteConfirm} type="dashed">
      Delete
    </Button>
    <Button onClick={this.showPropsConfirm} type="dashed">
      With extra props
    </Button>
  </div>
  <div>
    <Button onClick={this.info}>Info</Button>
    <Button onClick={this.infosuccess}>Success</Button>
    <Button onClick={this.infoerror}>Error</Button>
    <Button onClick={this.infowarning}>Warning</Button>
  </div>
    </TabPane>
    <TabPane tab={<span><Icon type="heart" />云产品</span>} key="2">
    <div>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={99.9}
      status="active"
    />
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={99.9}
      status="active"
    />
  </div>
  <div>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div>
    </TabPane>
    <TabPane tab={<span><Icon type="star" />云产品</span>} key="3">
    <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
      <Popconfirm placement="topLeft" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm placement="top" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm placement="topRight" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, float: 'left' }}>
      <Popconfirm placement="leftTop" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm placement="left" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm placement="leftBottom" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div style={{ width: 70, marginLeft: 304 }}>
      <Popconfirm placement="rightTop" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm placement="right" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm placement="rightBottom" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popconfirm placement="bottomLeft" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm placement="bottomRight" title={text} onConfirm={this.custconfirm} okText="Yes" cancelText="No">
        <Button>BR</Button>
      </Popconfirm>
    </div>
    <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
    </TabPane>
    
    <TabPane tab={<span><Icon type="message" theme="filled" />云产品</span>} key="4">
    <div className="example">
    <Spin />
  </div>
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
    </TabPane>
    <TabPane tab={<span><Icon type="wechat" />云产品</span>} key="5">
  
    </TabPane>
    <TabPane tab={<span><Icon type="slack-square" />云产品</span>} key="6">
  
    </TabPane>
    <TabPane tab={<span><Icon type="dingding" />云产品</span>} key="7">
  
    </TabPane>
    <TabPane tab={<span><Icon type="qq" />云产品</span>} key="8">
  
    </TabPane>
    <TabPane tab={<span><Icon type="github" />云产品</span>} key="9">
  
    </TabPane>

  </Tabs>
      {/* <Carousel autoplay style={{marginLeft:200}}>
    <div style={{width:1000}}> <img src={'../images/a1.jpg'} alt=""/></div>
    <div> <img src={'../images/a2.jpg'} alt=""/></div>
    <div> <img src={'../images/a3.jpg'} alt=""/></div>
    <div> <img src={'../images/a4.jpg'} alt=""/></div>
  </Carousel> */}
      </div>
    );
  }
}
export default connect(
)(Index )

