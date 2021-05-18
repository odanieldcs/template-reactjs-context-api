import { useState } from 'react'
import { getVehicles } from '../domain/vehicles'
import { useLoading } from '../contexts/loadingContext';

const Vehicle = () => {
    const [data, setData] = useState([])
    const { showLoading, hideLoading } = useLoading();

    const getList = async () => { 
        setData([]) // cleaning state
        showLoading('Loading users...')

        const response = await getVehicles()

        hideLoading();
        setData(response)
    } 
 
    return ( 
        <>
            <button onClick={getList}>Get vehicles</button>
            {data.length > 0 ? data.map((item, index) => <p key={index}>{item.name}</p>) : <p>Empty list of vehicles</p>}
        </>
    ) 
}

export default Vehicle