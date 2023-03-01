import { useSelector } from "react-redux";

function Users(){
    let users=useSelector(state=>state.users)
    console.log(users);
    return(
        <div>
            <h1>Users</h1>
            <table className="table text-center">{
                users.map((obj,index)=> <tr key={index}>
                    <td>{obj.name}</td>
                    <td>{obj.dob}</td>    
                </tr>)
}
            </table>
        </div>
    )
}

export default Users;