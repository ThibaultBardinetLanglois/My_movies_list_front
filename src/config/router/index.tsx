import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom" 

import Header from "../../components/Header/Header";
import Home from "../../pages/Home/Home";
import Series from "../../pages/Series/Series";
import Movies from "../../pages/Movies/Movies";
import MyList from "../../pages/MyList/MyList";
import NotFound from "../../pages/NotFound/NotFound";


const index = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/browse' element={<Home />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/my-list' element={<MyList />} />

        <Route
        path="/"
        element={<Navigate to="/browse" replace />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default index;
