import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        
        <div className="notfound">
            <h1>Error 404 Not Found</h1>
            <Link to='/'>
                <div>
                Click To Return to Homepage
                </div>
            </Link>
        </div>
     );
}
 
export default NotFound;