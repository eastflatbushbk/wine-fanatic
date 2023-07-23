
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import WinePage from './components/wines/WinePage';
import { loadWines } from './components/actions/wines';
import Navbar from './Navbar';
import { loadCurrentUser, loadUsers } from './components/actions/users';
import Login from './auth/Login';
import Signin from './auth/Signin';
import WineDetails from './components/wines/WineDetails';
import EditWineForm from './components/wines/EditWineForm';
import ReviewForm from './components/reviews/ReviewForm';
import WineForm from './components/wines/WineForm';
import UsersPage from './components/users/UsersPage';
import CellarPage from './components/cellars/CellarPage';
import EditCellarForm from './components/cellars/EditCellarForm';
import AddToCellarForm from './components/cellars/AddToCellarForm';
import { loadUsersWines } from './components/actions/usersWines';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

console.log("hey")
  useEffect(() => {
     dispatch(loadWines())
     dispatch(loadUsersWines())
      dispatch(loadCurrentUser(setLoading)) 
     dispatch(loadUsers(setLoading)) 
    
  }, [dispatch])

   console.log(` loading ? ${loading}`)
   const routeJsx = loading ? ( <>...</> ) : (

          <Routes>
                 <Route exact path="/wines" element={<WinePage />} />
                 <Route exact path="/users" element={<UsersPage />} />
                 <Route exact path="/wines/:id" element={<WineDetails />} />
                 <Route exact path="/cellars/:id" element={<CellarPage />} />
                <Route exact path="/add_wine" element={<WineForm />} />
                <Route exact path="/edit_wine" element={<EditWineForm  loading={loading}    />} />
                <Route exact path="/add_to_cellar" element={<AddToCellarForm  loading={loading}    />} />
                <Route exact path="/edit_userswine" element={<EditCellarForm  loading={loading}     />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signin" element={<Signin />} />
                  <Route exact path="/edit_review" element={<ReviewForm     />} />
                  
         </Routes>
 )


  return (
    <div>
        
                 <Navbar />
                         {routeJsx}
           
                         
          
    </div>
  );
}

export default App;
