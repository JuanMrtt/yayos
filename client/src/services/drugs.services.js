import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/medication`,
            withCredentials: true
        });
    }

    searchDrug = _id => this.service.get('/', {
            _id
        })
        .then(response => response.data)
        .catch(err => console.log(err))

    searchDrugGrandmother = id => this.service.post('/grandmother', {
        id
    })
    .then(response => response.data)
    .catch(err => console.log(err))
}