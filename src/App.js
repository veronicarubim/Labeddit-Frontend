import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyled";
import Router from "./routes/Router";
import { GlobalContext } from "./context/GlobalContext";
import axios from "axios";
import { BASE_URL } from "./utils/url";
import { useParams } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [isAuth, setIsAuth] = useState(false)
  const params = useParams();

  const context = {
    users, setUsers, posts, setPosts, comments, setComments, isAuth, setIsAuth
  }

  return (
    <div>
      <GlobalContext.Provider value={context}>
        <GlobalStyle/>
        <Router/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
