/* 左边导航栏组件 */
import React, { Component } from 'react';
import { axiosPost } from '../utils/js/requestApi';
import fileUpload from '../assets/fileUpload.svg';
//全体提示内容
import toast from '../utils/components/toast/toast';
//全局加载状态
import loading from '../utils/components/loading/loading';
//引入基础数据参数
import baseData from '../utils/js/baseData';
import XbcBtn from '../utils/components/xbcBtn/XbcBtn'

const imgPostfix = baseData.imgPostfix;

class AddImgData extends Component{

    constructor() {
        super();
        this.state = {
            imgs:[],
            inputImgs: [],
            imgName: '',
            introduce: '',
            comment: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileupload = this.fileupload.bind(this);
        this.previewImg = this.previewImg.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    /**输入框 输入时 时时更新参数
     * 
     * @param {*} event 
     */
    inputChange(event) {
        let param = {};
        param[event.target.name] = event.target.value;
        this.setState(param);
    }

    /**
     * 点击提交图片
     */
    handleSubmit() {
        let imgName = this.state.imgName;
        if (imgName === '') {
            toast.show('请输入图片名称');
            return;
        }
        let introduce = this.state.introduce;
        if (introduce === '') {
            toast.show('请输入图片介绍');
            return;
        }
        let comment = this.state.comment;
        if (comment === '') {
            toast.show('请输入图片评论信息');
            return;
        }
        let file = this.state.inputImgs[0];
        if (file.length === 0) {
            toast.show('必须选择上传得图片');
            return;
        }
        loading.show();
        this.serverRequest = axiosPost('FileController/fileUpload', {
            "file": file,
            "imgName": imgName,
            "introduce": introduce,
            "comment": comment
        }).then(result => {
            loading.hide();
            console.log(result);
            if (result.message === 'success') {
                toast.show('添加图片成功');
            }
        })
    }

    /**
     * 绑定 input file 的点击事件
     */
    fileupload() {
        return this.refs.fileInput.click();
    }

    /**
     * 用户展示用户选择的图片
     */
    previewImg(event) {
        //获取上传的文件对象 下面两种方式都可以
        // const files = document.querySelector('[type=file]');
        const files = event.target.files[0];
        const fileName = files.name;
        if (imgPostfix.indexOf(fileName.substring(fileName.lastIndexOf('.'))) === -1) {
            toast.show('文件格式错误');
            return;
        }
        
        let arr = [];
        let inputImgs = this.state.inputImgs;
        inputImgs.push(files);
        inputImgs.forEach((item,index) => {
            arr.push(
                <div className="preview-li" key={'inputImgs_' + index}>
                    <img src={this.getObjectURL(item)} alt=""/>
                    <div>{item.name}</div>
                    <span title="删除文件" onClick={() => this.delPreviewImg(index)}>x</span>
                </div>
            );
        })

        this.setState({
            imgs:arr
        })
    }

    /**通过获取到的文件对象 生成可访问到的url 路径
     * 
     * @param {Object} file 
     */
    getObjectURL(file) {
        var url = null ;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
        if (window.createObjectURL !== undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL !== undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL !== undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url;
    }

    /**删除对应预览图
     * 
     * @param {Number} index 
     */
    delPreviewImg(index) {
        let imgs = this.state.imgs;
        let inputImgs = this.state.inputImgs;
        imgs.splice(index, 1);
        inputImgs.splice(index, 1);
        this.setState({
            imgs: imgs,
            inputImgs:inputImgs
        })
    }

    render() {
        return (
            <div className="add-img-data">
                <form>
                    <div className="xbc-input" >
                        <div className="title" ><font>*</font>图片名称:</div>
                        <div className="input" >
                            <input type="text" name="imgName" onChange={this.inputChange}/>
                        </div>
                    </div>
                    <div className="xbc-input" >
                        <div className="title" ><font>*</font>图片介绍:</div>
                        <div className="input" >
                            <input type="text" name="introduce" onChange={this.inputChange}/>
                        </div>
                    </div>
                    <div className="xbc-input" >
                        <div className="title" ><font>*</font>评论一下:</div>
                        <div className="input" >
                            <input type="text" name="comment" onChange={this.inputChange}/>
                        </div>
                    </div>
                    <div className="xbc-input" >
                        <div className="title" ><font>*</font>选择上传的文件:</div>
                        <div className="input" >
                            <div onClick={this.fileupload} className="fileupload">
                                <img src={fileUpload} alt=""/>
                                点击上传文件
                            </div>
                            <input
                                name="fileInput"
                                ref="fileInput"
                                style={{ 'display': 'none' }}
                                type="file"
                                onChange={this.previewImg}
                            />
                        </div>
                    </div>
                    <div className="xbc-input" >
                        <div className="title" ></div>
                        <div className="preview" >
                            {this.state.imgs}
                        </div>
                    </div>
                    <XbcBtn
                        content="提交数据"
                        onClick={this.handleSubmit}
                    ></XbcBtn>
                </form>
            </div>
        )
    }
}

export default AddImgData;