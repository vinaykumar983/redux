import {useForm} from 'react-hook-form'
import { addProduct } from '../slices/productsSlice'
import { useDispatch } from 'react-redux';
function AddProducts(){
    const {register,handleSubmit}=useForm();
    let dispatch=useDispatch();
    let onFormSubmit=(productObj)=>{
        console.log(productObj);
        let actionObj=addProduct(productObj);
        dispatch(actionObj);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input type="text" {...register("product") } placeholder="Enter product name"/><br/>
                <input type="number" {...register("id")} placeholder="Enter id"/>    <br/>
                <button className='btn btn-primary'>Submit</button>
            </form>        
        </div>
    )
}

export default AddProducts