import { useNavigate } from "react-router";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";

export default function ErrorPage() {
    const navigate = useNavigate()
  return (
    <div>
        La Page est introuvable
        <ButtonPrimary label="Revenir en arrière" onClick={() => {navigate("/")}}/>
    </div>
  )
}
