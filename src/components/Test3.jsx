/* 左边导航栏组件 */
import React, { Component } from 'react';
//全局加载状态
import loading from '../utils/components/loading/loading';
//全体提示内容
import toast from '../utils/components/toast/toast';
//tips
import Tooltip from '../utils/components/tooltip/tooltip';

import { axiosPost } from '../utils/js/requestApi';

class Test3 extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            
        }
      }
      handleSubmit() {
        const file = document.querySelector('[type=file]');
        const imgName = document.querySelector('[name=imgName]');
        const introduce = document.querySelector('[name=introduce]');
        const comment = document.querySelector('[name=comment]');

          this.serverRequest = axiosPost('FileController/fileUpload', {
            "file": file.files[0],
              "imgName": imgName.value,
              "introduce": introduce.value,
              "comment": comment.value
        }).then(result => {
            console.log(result);
        })
      }

    render() {
        return (
            <div className="test3">
                <button onClick={() => {loading.show()}}>显示加载状态</button>
                <button onClick={() => {loading.hide()}}>隐藏加载状态</button><br/>
                <button onClick={() => { toast.show() }}>显示toast信息提示</button><br />
                <Tooltip title="测试测试">
                    <div>TooltipTooltipTooltipTooltipTooltip</div>
                </Tooltip><br />
                <form>
                    <label>
                        图片名称:
                        <input type="text" name="imgName" /><br/><br/>
                        图片介绍:
                        <input type="text" name="introduce" /><br/><br/>
                        评论一下:
                        <input type="text" name="comment" /><br/><br/>
                        选择上传的文件:
                        <input type="file" /><br/>
                    </label>
                    <br />
                    <div onClick={this.handleSubmit}>Submit</div>
                </form>
            </div>
        )
    }
}

export default Test3;