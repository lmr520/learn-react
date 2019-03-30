/**
 * Created by Administrator on 2017/5/8.
 */
import React from 'react'
import {connect} from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const Uppy = require('@uppy/core')
const Tus = require('@uppy/tus')
const GoogleDrive = require('@uppy/google-drive')
const { Dashboard, DashboardModal, DragDrop, ProgressBar } = require('@uppy/react')
const FormItem = Form.Item;

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInlineDashboard: false,
      open: false
    }

    this.uppy = new Uppy({ id: 'uppy1', autoProceed: true, debug: true })
      .use(Tus, { endpoint: 'https://master.tus.io/files/' })
      .use(GoogleDrive, { serverUrl: 'https://companion.uppy.io' })

    this.uppy2 = new Uppy({ id: 'uppy2', autoProceed: false, debug: true })
      .use(Tus, { endpoint: 'https://master.tus.io/files/' })

    this.handleModalClick = this.handleModalClick.bind(this)
  }

  componentWillUnmount () {
    this.uppy.close()
    this.uppy2.close()
  }

  handleModalClick () {
    this.setState({
      open: !this.state.open
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { showInlineDashboard } = this.state
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="cart-list fl">
      <div style={{width:400,height:50}}></div>
      <div style={{width:300,marginLeft:50}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a className="login-form-forgot">Forgot password</a>
          <br></br>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{marginLeft:40,width:200}}>
            Log in
          </Button>
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; Or <a>register now!</a>
        </FormItem>
      </Form>
      <div>
      {/* <img src={currentAvatar} alt="Current Avatar" /> */}
      {/* <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            // Text to show on the droppable area.
            // `%{browse}` is replaced with a link that opens the system file selection dialog.
            dropHereOr: 'Drop here or %{browse}',
            // Used as the label for the link that opens the system file selection dialog.
            browse: 'browse'
          }
        }}
      /> */}
    </div>
      </div>
      <div style={{marginLeft:100}}>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <label>
          <input
            type="checkbox"
            checked={showInlineDashboard}
            onChange={(event) => {
              this.setState({
                showInlineDashboard: event.target.checked
              })
            }}
          />
          Show Dashboard
        </label>
        {showInlineDashboard && (
          <Dashboard
            uppy={this.uppy}
            plugins={['GoogleDrive']}
            metaFields={[
              { id: 'name', name: 'Name', placeholder: 'File name' }
            ]}
          />
        )}

        <h2>Modal Dashboard</h2>
        <div>
          <button onClick={this.handleModalClick}>
            {this.state.open ? 'Close dashboard' : 'Open dashboard'}
          </button>
          <DashboardModal
            uppy={this.uppy2}
            open={this.state.open}
            target={document.body}
            onRequestClose={() => this.setState({ open: false })}
          />
        </div>

        <h2>Drag Drop Area</h2>
        <DragDrop
          uppy={this.uppy}
          locale={{
            strings: {
              chooseFile: 'Boop a file',
              orDragDrop: 'or yoink it here'
            }
          }}
        />

        <h2>Progress Bar</h2>
        <ProgressBar
          uppy={this.uppy}
          hideAfterFinish={false}
        />
      </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default connect(
)(WrappedNormalLoginForm)

