import { vehicles } from './../mock'

export const getVehicles = async () => {
    // request backend here
    // example using a mock
    return new Promise(resolve => setTimeout(() => {
        resolve(vehicles)
    }, 1500))
}