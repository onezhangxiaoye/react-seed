/*  组件 */
import React, { Component } from 'react';
import { axiosPost } from '../utils/js/requestApi';
//引入表格组件
import XbcTable from '../utils/components/xbcTable/XbcTable';

class DataList extends Component{

    constructor() {
        super();
        this.state = {
            dataSource: '',
            columns:''
        }
    }

   /**
   * 可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI
   */
  componentDidMount() {
      this.serverRequest = axiosPost('MyController/selectAllData', { id: 40,name:123 }).then(result => {
        // console.log(result);
          
        let columns = [{
            title: 'ID',
            key: 'id',
          }, {
            title: '用户名',
            key: 'name',
          }, {
            title: '密码',
            key: 'password',
          }, {
            title: '分组ID',
            key: 'group_id',
          }, {
            title: '密码',
            key: 'pic_name',
          }];
          this.setState({
              columns: columns,
              dataSource:result.data
        })
    }) 
  }

    render() {
        return (
            <div className="data-list">
                <XbcTable dataSource={this.state.dataSource} columns={this.state.columns}></XbcTable>
            </div>
        )
    }
}

export default DataList;