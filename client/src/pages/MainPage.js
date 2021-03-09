import { Link } from 'react-router-dom'
import {Title} from "../components/Title";

export default () => {
    const links = [
        {
            label: 'Вход для клинеров',
            link: '/cleaner'
        },
        {
            label: 'Вход для админов',
            link: '/admin'
        }
    ]

    return <div>
        <Title>
            Клининг еее
        </Title>
        <div>
            {links.map( ({label, link}) => (<Link to={link}>{label}</Link>))}
        </div>
    </div>
}