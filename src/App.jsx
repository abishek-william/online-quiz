import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout"
import Home from "./components/Home";
export default function App() {
  return (
   <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           {/* Add your routes here */}
           <Route index element={<Home/>} />
         </Route>
       </Routes>
     </BrowserRouter>
   </>
  )
}