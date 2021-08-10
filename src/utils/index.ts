import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:10006/",
    headers: {
        "Content-Type": "application/ json"
    }
})