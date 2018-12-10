/* 左边导航栏组件 */
import React, { Component } from 'react';
import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("S6FOIZcHyEe6s4Gy"); //16位
const iv = CryptoJS.enc.Utf8.parse("zZHo0VS7EKVsz4Hr");
//HmacSHA256 签名
const HmacSHA256_key = 'aiTFPJBAEVZmTzwk'

class Test extends Component{

    constructor() {
        super();
        this.state = {
            inputValue1: '',
            inputValue2: '',
        };
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.decode = this.decode.bind(this);
        this.encryption = this.encryption.bind(this);
        this.reset = this.reset.bind(this);
    }

    onChange1(event) {
        this.setState({
            inputValue1:event.target.value,
        })
    }
    onChange2(event) {
        this.setState({
            inputValue2:event.target.value,
        })
    }
    decode() {
        let word = this.state.inputValue1; 
        //去除后台参数中存在的换行符
        word = word.replace(/[\r\n]/g, "")
        let decryptResult = CryptoJS.AES.decrypt(word,key, {    //  AES解密
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        let resData=decryptResult.toString(CryptoJS.enc.Utf8).toString();

        this.setState({
            inputValue2:resData,
        })

        console.log('decryptedStr.toString()------',JSON.parse(resData));
        
    }
    encryption() {
        let word = this.state.inputValue2; 
        let signature_HmacSHA256 = CryptoJS.HmacSHA256(word, HmacSHA256_key);
        console.log('signature_HmacSHA256----', signature_HmacSHA256.toString());
        // var src = CryptoJS.enc.Utf8.parse(signature_HmacSHA256);
        // var base64string = CryptoJS.enc.Base64.stringify(src);
        // const encryptedHexStr1 = CryptoJS.enc.Hex.parse(signature_HmacSHA256);
        // const srcs1 = CryptoJS.enc.Base64.stringify(encryptedHexStr1);
        // console.log(srcs1, '-------');
        



        const srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).ciphertext.toString();
        const encryptedHexStr = CryptoJS.enc.Hex.parse(encrypted);
        const encryptionStr = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        this.setState({
            inputValue1:encryptionStr,
        })
    }
    reset() {
        this.setState({
            inputValue1:'',
            inputValue2:''
        })
    }

    render() {
        return (
            <div className="test">
                <h5>{3.698345346.toFixed(2)}</h5>
                加密值：<textarea value={this.state.inputValue1} type="text" onChange={this.onChange1}/><br />
                正常值：<textarea value={this.state.inputValue2} type="text" onChange={this.onChange2}/><br />
                <button onClick={this.decode}>点击解密</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.encryption}>点击加密</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.reset}>重置数据</button>
            </div>
        )
    }
}

export default Test;