/*  组件 */
import React, { Component } from 'react';
import { axiosPost } from '../utils/js/requestApi';

class Catalog extends Component{

    constructor() {
        super();
        this.state = {
            dataList:''
        }
    }

    

   /**
   * 可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI
   */
  componentDidMount() {
      this.serverRequest = axiosPost('MyController/selectAllData', { id: 40 }).then(result => {
        // console.log(result);
        let arr = [];
        result.data.forEach((data,index) => {
            arr.push(
                <tr key={'tr_' + index}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.password}</td>
                    <td>{data.group_id}</td>
                    <td>{data.pic_name}</td>
                </tr>
            )
            
        })
          
        this.setState({
            dataList:arr
      })
    }) 
  }

    render() {
        return (
            <div className="data-list">

                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>用户名</td>
                            <td>密码</td>
                            <td>分组ID</td>
                            <td>图片路径</td>
                        </tr>
                    </thead>
                    <tbody>
                         {this.state.dataList}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Catalog;