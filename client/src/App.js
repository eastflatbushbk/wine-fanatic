
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import WinePage from './components/wines/WinePage';
import { loadWines } from './components/actions/wines';
import Navbar from './Navbar';
import { loadCurrentUser } from './components/actions/users';
import Login from './auth/Login';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //  const { currentUser } = useSelector((store) => store.usersReducer)
console.log("hey")
  useEffect(() => {
    
    dispatch(loadWines())
    dispatch(loadCurrentUser(setLoading))
    // dispatch(loadReviews())    
  }, [dispatch])

   const routeJsx = loading ? ( <>...</> ) : (

   <Routes>
                 <Route exact path="/wine" element={<WinePage />} />
              {/* <Route exact path="/add_match" element={<MatchForm />} />
                  <Route exact path="/match/:id" element={<MatchDetails />} />
                  <Route exact path="/edit_match" element={<EditMatchForm rendering={rendering}     />} /> */}
                  <Route exact path="/login" element={<Login />} />
                  {/* <Route exact path="/signin" element={<Signin />} />
                  <Route exact path="/edit_comment" element={<CommentForm rendering={rendering}     />} />
                  <Route exact path="/" element={<Home />} /> */}
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
