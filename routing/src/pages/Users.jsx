import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function get(){
   return fetch('https://reqres.in/api/users')
    .then((data) => data.json())
}

export default function Users() {
    let [data, setData] = useState([]);
    let navi=useNavigate();

    function GetUpdatedData() {
        get().then((ele)=>{
            setData(ele.data)
            
        })
        
    }

    useEffect(() => {
        GetUpdatedData()  

    }, [])

    return (
        <div>
            <h1>Users Pages</h1>

            <button onClick={()=>navi('/')}>Go to Home page</button><br></br> <br></br>

            <Link to='/login'><button>go yo login page</button></Link>
           
            {data?.map((item) => (

                <div key={item.id}>
                    <img src={item.avatar} alt=''/>
                    <p >{item.first_name}</p>
                    <Link to={`/users/${item.id}`}>moreAbout</Link>
                </div>

            ))}

        </div>
    )
}