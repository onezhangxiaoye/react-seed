/* 弹出层组件*/
import React, { Component } from 'react';
import { connect } from 'react-redux'
import XbcBtn from '../utils/components/xbcBtn/XbcBtn'
import { axiosPost } from '../utils/js/requestApi';
//全体提示内容
import componentsContainer from '../utils/components/componentsContainer/componentsContainer';
//全局加载状态
import loading from '../utils/components/loading/loading';
import '../utils/components/xbcTable/XbcTable';
import XbcOpen from '../utils/components/xbcOpen/XbcOpen'
//全局弹出层
import popup from '../utils/components/popup/Popup';
//弹出层填充编辑框
import CompileUrl from './CompileUrl'

const columns = [{
    title: 'ID',
    key: 'id',
},
{
    title: '路径',
    key: 'to',
},
{
    title: '标签名称',
    key: 'name',
},
{
    title: '父标签id',
    key: 'tagFatherId',
},
{
    title: '排序',
    key: 'number',
},
{
    title: '是否隐藏',
    key: 'hidden',
},
{
    title: '备用字段',
    key: 'reserve1',
},
{
    title: '备用字段',
    key: 'reserve2',
}];

const size = { padding: '5px 10px' }

class AddUrl_ extends Component{

    render() {
        return (
            <div className="addurl xbcTable">
                <table>
                    <thead>
                        <tr>
                            <td key="thead_1_">   </td>
                            {
                                columns.map((iteam, index) => {
                                    return (<td key={'thead_1' + index}>{iteam.title}</td>);
                                })
                            }
                            <td key="thead_2_">编辑</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataSource.map((iteam, index) => {
                                let firstNav = [];
                                if (iteam.tagFatherId === 0) {
                                    //添加 显示子导航栏的扩展按钮 默认不显示子导航栏
                                    let arr = [(<td key="tdf_1_"><XbcOpen onClick={this.props.openChildNav} data={iteam.id}></XbcOpen></td>)];
                                    columns.forEach((columns_iteam,columns_index) => {
                                        arr.push(<td key={'tdf_' + columns_index}>{iteam[columns_iteam.key]}</td>);
                                    });
                                    arr.push(
                                        <td key="tdf_2_">
                                            <XbcBtn
                                                content="编辑" style={size} onClick={() => this.props.compile({param:iteam,type:1})} data={{}}
                                            ></XbcBtn>
                                            <XbcBtn
                                                content="新增子栏" style={size} onClick={() => this.props.compile({param:{ tagFatherId:iteam.id,hidden:1,number:0},type:0})} data={{}}
                                            ></XbcBtn>
                                        </td>
                                    );
                                    firstNav.push(<tr key={'trf_' + index}>{arr}</tr>);
                                    //查找 一级导航栏所属的二级导航栏
                                    //初始时默认不显示二级导航栏 后面每次渲染根据设置参数控制显示于隐藏
                                    if (iteam.showChild === false) {
                                        this.props.dataSource.forEach((second_iteam, second_index) => {
                                            let arr3 = [];
                                            if (second_iteam.tagFatherId === iteam.id) {
                                                arr3 = [(<td key="tdc_1_"></td>)];
                                                columns.forEach((columns_iteam,columns_index) => {
                                                    arr3.push(<td key={'tdf_' + columns_index}>{second_iteam[columns_iteam.key]}</td>);
                                                });
                                                arr3.push(
                                                    <td key="tdc_2_">
                                                        <XbcBtn
                                                            content="编辑" style={size}  onClick={() => this.props.compile({param:second_iteam})} data={{param:second_iteam,index:second_index}}
                                                        ></XbcBtn>
                                                    </td>
                                                );
                                                firstNav.push(<tr key={'trf_' + index + '_' + second_index}>{arr3}</tr>);
                                            }
                                        })
                                    }
                                }
                                return firstNav;
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

    /**提交 导航栏配置数据 执行的回调函数
     * 
     */
function addUrl(data) {
    const { id, to, name, tagFatherId, number, hidden,type } = data;
    if (to === undefined || to === '') {
        componentsContainer.toast.show('配置路径不能为空');
        return;
    }
    if (name === undefined || name === '') {
        componentsContainer.toast.show('配置路径名称不能为空');
        return;
    }
    loading.show();
    let requestUrl;
    
    if (type === 0) {
        requestUrl = 'UrlController/addUrl';
    } else {
        requestUrl = 'UrlController/updateUrlById'
    }
    axiosPost(requestUrl, {
        id:id,
        tagFatherId:tagFatherId,
        to:to,
        name:name,
        number:number,
        hidden:hidden,
    }).then(result => {
        loading.hide();
        if (result.message === 'success') {
            if (id === undefined) {
                componentsContainer.toast.show('添加成功');

            } else {
                componentsContainer.toast.show('修改成功');
            }
        }
    })
    }

/**
 * 打开子导航栏的方法
 * data 包含父导航栏的 id 及当前点击后扩展点击按钮的状态 true为+ false为-
 */
const openChildNav = (id,bool) => {
    return {
        payload: {
            id: id,
            bool:bool
        },
        type:'openChildNav'
    };
}

/**
 * 编辑导航栏信息
 */
const compile = (data) => {
    popup.show(
        <CompileUrl title={data.type === 0 ? '新增导航栏信息' : '编辑导航栏信息'} data={data} confirm={addUrl}></CompileUrl>
    );
}
var count = 0;
function mapStateToProps(state) {
    return {
        dataSource: state.nav.manageNav,
        openChildNav: openChildNav,
        compile: compile,
        count:count++
    }
}

const AddUrl = connect(
    mapStateToProps,
    {
        openChildNav
    }
)(AddUrl_)

export default AddUrl;