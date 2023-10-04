import { useState } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import './Form.css'
function Form(){
    const [getid,setid] = useState("")
    const onclickID = e =>{
        e.preventDefault(e)
        setid(e.target.id)
    }
    function fetchData(){
        if (getid==1){
            return(
                <Register/>
            )
        }else{
            return(
                <Login/>
            )
        }
    }
    return(
        <>
        <div id="form">
        <div class="container">
            <div class="row">
                <div class = "col-sm-6">
                    <ul>
                        <li><a href="#" id="1" onClick={onclickID}>đăng ký</a></li>
                        <li><a href="#" id="2" onClick={onclickID} >đăng nhập</a></li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    {fetchData()}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Form