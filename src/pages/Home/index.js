import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <p>A sample project with contexts APIs.</p>
            <ul>
                <li><Link to="/loader">Starting loader component when get API data</Link></li>
            </ul>
        </div>
    )
}

export default Page;