import './xbcTable.styl';
/* 表格 数据 组件*/
import React, { Component } from 'react';

class XbcTable extends Component{

    /** 初始化渲染 表格
     * 
     * @param {Object} props 为使用当前组件需要传递的参数
     * columns {Array} 表头 显示的表头数据 数组值为对象 如 {title: '姓名',key: 'name',}
     * dataSource {Array} 表体 需要渲染的数据
     */
    initThead(props) {
        let arr = [];
        let arr1 = [];
        props.columns.forEach(el => {
            arr.push(<td>{el.title}</td>);
        });

        props.dataSource.forEach((el, index) => {
            let arr3 = [];
            props.columns.forEach(elColumns => {
                arr3.push(<td>{el[elColumns.key]}</td>);
            });
            arr1.push(<tr key={'tr_' + index}>{arr3}</tr>);
        });
        return (
            <table>
                <thead><tr>{arr}</tr></thead>
                <tbody>{arr1}</tbody>
            </table>
        );
    }

    render() {
        return (
            <div className="xbcTable">
                {this.props.columns !== '' && this.initThead(this.props)}
            </div>
        )
    }
}

export default XbcTable;