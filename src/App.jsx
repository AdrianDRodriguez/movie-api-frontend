import axios from "axios";
import { MoviesHeader } from "./MoviesHeader";
import { MoviesPage } from "./MoviesPage";
import { MoviesFooter } from "./MoviesFooter";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <MoviesHeader />
      <MoviesPage />
      <MoviesFooter />
    </div>
  )
}

export default App;