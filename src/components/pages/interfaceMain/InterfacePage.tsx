import { useNavigate, useParams } from "react-router"

export default function InterfacePage() {
   const {username} = useParams()
   const navigate = useNavigate()
  return (
    <div>InterfacePage {username}
    <button onClick={() => {navigate("/")}} >Déconnexion</button>
    </div>
  )
}
