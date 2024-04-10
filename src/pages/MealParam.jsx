import { useParams, useNavigate } from "react-router-dom"

function MealParam() {

    const {title} = useParams();
    const navigate = useNavigate();
    
    
  return (
    <div onClick={() => navigate('/about')}>{title} meal</div>
  )
}

export default MealParam