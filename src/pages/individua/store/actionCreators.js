import * as constants from './constants'
import axios from 'axios'
const changeList1=(data)=>({
    type:constants.CHANGE_LIST,
    data:(data),//将数据变为immutable类型传递,
    loading:true,
})

export const ListShow1=()=>{
    axios.defaults.headers.post['Content-Type']='application/json'
    let url='http://localhost:8080/user/select.do'
    return(dispatch)=>{
        axios.post(url,{
        }       
        ).then((res)=>{
            const result=res.data;
                dispatch(changeList1(result))           
        }).catch((error)=>{
            alert('查询失败，请检查服务器')
        });

    }
}
