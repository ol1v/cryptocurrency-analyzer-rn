import axios from 'axios'

export const getCoin = async () => {

const options = {
    method: 'GET',
    headers: {
        'x-access-token': ''
    }
};
        return await axios('https://api.coinranking.com/v2/coins', options)
}