// import 'axios'
import axios from 'axios' //not sure if this needs to be there

let base_url = '/api/students' //axios will understand the 127.0.0...part is implied

export default {
    getAllStudents() {
        return axios.get(base_url).then(response => {
            return response.data //data fetched from the server
        })
    },

    addStudent(student) {
        return axios.post(base_url, student).then(response => {
            return response.data
        }) //same effect as our curl command
    }
}