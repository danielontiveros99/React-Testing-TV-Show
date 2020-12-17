import axios from 'axios';

//1 way of doing it
export const fetchShow = (url) => {
    return axios.get(url).then(res => {return res});
}

//2nd way of doing it -- doesnt work
// export const fetchShow = () => {
//     return axios
//     .get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
//     .then(res => {
//         return res.data;
//     });
// };