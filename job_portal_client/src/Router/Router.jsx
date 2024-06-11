import App from "../App";
import CreateJob from "../pages/CreateJob";
import Home from "../pages/Home";
import { createBrowserRouter} from "react-router-dom";
import MyJobs from "../pages/MyJobs";
import SalaryPage from "../pages/SalaryPage";
import UpdatePages from "../pages/UpdatePages";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {   path:"/", element:<Home/>},
        {
          path:"/post-job",
          element:<CreateJob/>
        },
        {
          path:"/my-job",
          element:<MyJobs/>
        },
        {
          path:"/salary",
          element:<SalaryPage/>
        },
        {
          path:"edit-job/:id",
          element:<UpdatePages/>,
          loader:({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },

       ],
    },
  ]);                                                                 
  export default router;