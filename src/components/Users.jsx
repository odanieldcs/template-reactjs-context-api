import { useState } from 'react'
import { getUsers } from '../services/api'

const User = () => {
    const [data, setData] = useState([])

    const getList = async () => { 
        setData([]) // cleaning state

        const response = await getUsers()

        setData(response)
    } 
 
    return ( 
        <>
            <hr />
            <button onClick={getList}>Get users</button>
            {data.length > 0 ? data.map(item => <li>{item.first_name}</li>) : <li>Empty list of users</li>} 
        </>
    ) 
}

export default User