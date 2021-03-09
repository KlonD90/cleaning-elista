import { Link } from 'react-router-dom'
import {Title} from "../components/Title";
import {PromoInfo} from "../components/PromoInfo";

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
        <PromoInfo />
        <div>
            {links.map( ({label, link}) => (<div><Link to={link}>{label}</Link></div>))}
        </div>
    </div>
}