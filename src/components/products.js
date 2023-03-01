
import { useSelector } from "react-redux"

function Products(){
    let products=useSelector(state=>state.products);
    console.log(products);
    return(
        <div>
            products
        </div>
    )
}

export default Products