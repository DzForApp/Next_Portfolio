import GitIcon from "../icons/GitIcon";
import LinkedIcond from '../icons/LinkedIcon'


const MySocialLinks =({ className}) => {
    return (
     <div className={"space-x-3 text-xs" + " " + className}>
         <a href="https://github.com/dzforapp">
         <GitIcon className="w-4 h-4" />
         </a>
     </div>   
    )
}

export default MySocialLinks