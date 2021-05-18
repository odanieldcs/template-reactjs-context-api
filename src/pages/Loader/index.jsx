import Vehicles from '../../components/Vehicles';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <Link to="/">Go Back</Link>
            <p>Starting loader component with hook when get API data</p>
            <Vehicles />
        </div>
    )
}

export default Page;