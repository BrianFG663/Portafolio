import '../utils/botones.css'
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom'

export default function HomeButton() {
    return (
        <Link to="/" title='Volver al inicio' className='botonHome'><HomeIcon></HomeIcon></Link>
    )
}




