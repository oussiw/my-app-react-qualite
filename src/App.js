import './App.css';
import ListCustomer from './Components/List-Customers/ListCustomer'
import AddForm from './Components/Add-form/AddForm.js'

function App() {
  return (
    <div className="container">
    <h2>List customers</h2><hr></hr>
      <AddForm/><hr></hr>
      <ListCustomer/>
    </div>
  );
}

export default App;
