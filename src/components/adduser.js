import {useForm} from 'react-hook-form';
import {addUser} from '../slices/userSlice'; //import action creater function
import { useDispatch} from 'react-redux'

function AddUser(){
    let dispatch=useDispatch()
    const {register,handleSubmit}=useForm()
    let onFormSubmit=(userObj)=>{
        let actionObj=addUser(userObj) //action object
        dispatch(actionObj) //dispatch is used to call the action creater function with action object
    }
    return(
        <div className='container mt-5'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <h1>Add user</h1>
                <input type="text" className='form-control' placeholder='Enter name' {...register("name")}/>
                <input type="date" className='form-control' placeholder='Enter date of birth' {...register("dob")}/>
                <button className='btn' type='submit'>submit</button>
            </form>
        </div>
    )
}

export default AddUser;