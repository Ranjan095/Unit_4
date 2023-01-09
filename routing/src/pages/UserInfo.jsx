
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { Navigate } from "react-router-dom"

function get(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then((data) => data.json())
}
export default function UserInfo() {
    let [data, setData] = useState({})
    let [loding, setLoading] = useState(false)
    let [err, setErr] = useState(false)
    // let isAuth=false;

    let param=useParams()
    

    function upDatedData(id) {
        setLoading(true)
        get(id)
        .then((item) => {
            setData(item)
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
            setErr(true)
        })

    }

    useEffect(() => {
        console.log(param.user_id)
        upDatedData(param.user_id)
    }, [])

    // if(!isAuth){
    //    return <Navigate to='/'/>
    // }


    return loding?(
        <h1>Loading.....</h1>
    ) :err?(
        <h1>Somthing went wrong</h1>
    ) : (
        <div style={{textAlign:'center'}}>
            <h1>User Information Page</h1>

            <>
                <div style={{ border: '1px solid blue', width:'400px',margin:'auto' }}>
                    <img src={data?.data?.avatar} />
                    <h3>{data?.data?.first_name} {data?.data?.last_name}</h3>
                    <p>{data?.data?.email}</p>
                    <hr />
                    <p>{data?.support?.url}</p>
                    <p>{data?.support?.text}</p>
                </div>
            </>
        </div>
    )
}