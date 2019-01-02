/*  组件 */
import React, { Component } from 'react';
import { axiosPost } from '../utils/js/requestApi';
//引入基础数据参数
import baseData from '../utils/js/baseData';
//全局加载状态
import popup from '../utils/components/popup/Popup';

class ImgDataList extends Component{

    constructor() {
        super();
        this.state = {
            dataList:''
        }
        this.yulanImg = this.yulanImg.bind(this);
    }


    yulanImg(src){
        popup.show(
            <img style={{ maxWidth: '80%',maxHeight:'90%'}} src={src} alt=""/>,
            {
                justifyContent:'center'
            }
        );
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
                    <td><img onClick={()=>{this.yulanImg(baseData.imgPath + data.imgPath)}} src={baseData.imgPath + data.imgPath} alt=""/></td>
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