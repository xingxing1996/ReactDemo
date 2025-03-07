import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Button,Input} from 'antd';
import {actionCreators} from '../../../store';
import { MySearch } from '../../../style';
class Search extends Component{  
   
    render(){      
        return (
            <MySearch>
                客户名称：
                <Input  style={{ width: '15%',marginRight:'15%',marginLeft:'5%' }} placeholder="请输入客户名称" />
                客户号：
                <Input  style={{ width: '15%',marginRight:'20%' }} placeholder="请输入客户号" />
               <Button onClick={()=>this.props.ListShow1()} icon="search">查询</Button><br/>
            </MySearch>      
            )   
          
      }
     }
  
  const mapDispatch=(dispatch)=>{
    return{
        ListShow1(){
            dispatch(actionCreators.ListShow1())
        }
    }
  }
  export default  connect(null,mapDispatch)(Search);