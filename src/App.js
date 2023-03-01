import Users from "./components/users";
import AddUser from "./components/adduser";
import Products from "./components/products";
import AddProducts from "./components/addProducts";

function App() {
  return (
    <div>
        <div className="row">
          <div className="col-6">
            <Users/>
          </div>
          <div className="col-6">
            <AddUser/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
          <AddProducts/>
          </div>
          <div className="col-6">
            
            <Products/>
          </div>
        </div>
    </div>
  );
}

export default App;
