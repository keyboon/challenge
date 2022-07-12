import {Route, Routes} from "react-router-dom";
import Fallback404 from "../Challenge/Fallback404";

export default function Handle404({children}) {
    return (
        <Routes>
            {children}
            <Route path={'/*'} element={<Fallback404/>}/>
        </Routes>
    )
}