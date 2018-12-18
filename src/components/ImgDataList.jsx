/*  组件 */
import React, { Component } from 'react';
import { axiosPost } from '../utils/js/requestApi';

const _imgPath = 'http://192.168.1.158:9000/img/';
// const _imgPath = 'http://www.zhangxiaoye.top:9000/img/imgData/';

class ImgDataList extends Component{

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
      this.serverRequest = axiosPost('MyController/selectAllImg', { id: 40 }).then(result => {
        // console.log(result);
        let arr = [];
        result.data.forEach((data,index) => {
            arr.push(
                <tr key={'tr_' + index}>
                    <td>{data.id}</td>
                    <td>{data.imgName}</td>
                    <td>{data.introduce}</td>
                    <td>{data.imgPath}</td>
                    <td>{data.comment}</td>
                    <td><img src={_imgPath + data.imgPath} alt=""/></td>
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
            <div className="img-data-list">

                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>图片名称</td>
                            <td>图片介绍</td>
                            <td>图片路径</td>
                            <td>评论</td>
                            <td>图片</td>
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

export default ImgDataList;