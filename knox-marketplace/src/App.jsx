import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import AboutPage from "./pages/AboutPage";
import Post from "./pages/PostPage";
import FavPage from "./pages/FavPage";


const App = () => {
  
  return(
    <Router>
      <Container>
        <Routes>
          <Route path= "" element={<Home/>} />
          <Route path= "/Home" element={<Home/>} />
          <Route path= "/Category" element={<CategoryPage/>} />
          <Route path= "/Item" element={<ItemPage/>} />
          <Route path= "/AboutUs" element={<AboutPage/>} />
          <Route path= "/post" element={<Post/>} />
          <Route path= "/favPage" element={<FavPage/>} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
