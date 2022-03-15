import { useNavigate } from 'react-router-dom';
import DirectButton from '../components/directButton';

export default function Homepage () {

    let navigate = useNavigate();
    const routeChange = (route) => {
        navigate(route);
    }

    return (
        <div>
            <DirectButton text='Edit Restaurant Menu' route='/menu'/><br/>
            <DirectButton text='Edit Promotions' route='/promotions'/>
        </div>
    );
}