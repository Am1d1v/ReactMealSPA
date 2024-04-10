import { useParams, useNavigate, useLocation } from "react-router-dom"

function MealParam() {

    const {title} = useParams();
    const navigate = useNavigate();

    const valueLocation = useLocation();
    console.log(valueLocation);
    
  return (
    <div onClick={() => navigate('/about')}>{title} meal</div>
  )
}

export default MealParam