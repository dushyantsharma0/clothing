
import { Navigate,  } from "react-router-dom"

const ProtactRouter=({children,user,redirect="/login"})=>{
    if(!user) return<Navigate to={redirect} />
    return children

    
}

export default ProtactRouter