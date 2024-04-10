import { useParams } from "react-router-dom"

function MealParam() {

    const value = useParams();

    console.log(value);
  return (
    <div>MealParam</div>
  )
}

export default MealParam