import { Auth } from "../components/Auth"
import { SideDescription } from "../components/SideDescription"

export const Signin = () => {
   return <div className="grid grid-col-1 lg:grid-cols-2">
        
        <Auth type='signin'/>

        <SideDescription/>
    </div> 
}