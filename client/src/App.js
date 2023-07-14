
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

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //  const { currentUser } = useSelector((store) => store.usersReducer)
console.log("hey")
  useEffect(() => {
    
    dispatch(loadWines())
    dispatch(loadCurrentUser(setLoading))
    dispatch(loadUsers(setLoading))    
  }, [dispatch])

   console.log(loading)
//    const routeJsx = loading ? ( <>...</> ) : (

//    <Routes>
//                  <Route exact path="/wines" element={<WinePage />} />
//                  <Route exact path="/wines/:id" element={<WineDetails />} />
//               {/* <Route exact path="/add_match" element={<MatchForm />} />
//                 <Route exact path="/edit_match" element={<EditMatchForm rendering={rendering}     />} /> */}
//                   <Route exact path="/login" element={<Login />} />
//                   <Route exact path="/signin" element={<Signin />} />
//                   {/* <Route exact path="/edit_comment" element={<CommentForm rendering={rendering}     />} />
//                   <Route exact path="/" element={<Home />} /> */}
//          </Routes>
//  )


  return (
    <div>
       
          
                 <Navbar />
                         {/* {routeJsx} */}
           
                         <Routes>
                 <Route exact path="/wines" element={<WinePage />} />
                 <Route exact path="/users" element={<UsersPage />} />
                 <Route exact path="/wines/:id" element={<WineDetails />} />
              <Route exact path="/add_wine" element={<WineForm />} />
                <Route exact path="/edit_wine" element={<EditWineForm      />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signin" element={<Signin />} />
                  <Route exact path="/edit_review" element={<ReviewForm     />} />
                  {/* <Route exact path="/" element={<Home />} /> */}
         </Routes>
          
    </div>
  );
}

export default App;
