const axios = require('axios');

const HttpService = {

    async getProfessors() {
        const res = await axios.get('http://localhost:3000/professor')
        return res;
    },

    async getStudents() {
        const res = await axios.get('http://localhost:3000/student')
        return res
    },

    async addProfessor(name, gender) {
        const res = await axios.post('http://localhost:3000/professor', {
            name: name,
            gender: gender
        })
        return res;
    },

    async addStudent(house, name, gender) {
        const res = await axios.post('http://localhost:3000/student', {
            house: house,
            name: name,
            gender: gender
        })
        return res;
    },

    async deleteProfessor(id) {
        const res = await axios.delete('http://localhost:3000/professor', {
            id: id,
        })
        return res;
    },

    async deleteStudent(id) {
        const res = await axios.delete('http://localhost:3000/student', {
            id: id,
        })
        return res;
    },

    async getScores() {
        const res = await axios.get('http://localhost:3000/scores')
        return res;
    },

    // async getScore(house) {
    //     const res = await axios.get('/scores/')
    //         .then(function (response) {
    //             // handle success
    //             var jsonData = response.data
    //             for (var i = 0; i < jsonData.length; i++) {
    //                 var counter = jsonData[i]
    //                 if (counter.house === house)
    //                     return parseInt(counter.value)
    //             }
    //             return 0
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // },

    async addScore(professor, house, value) {
        const res = await axios.post('http://localhost:3000/scores',
            {
                professor: professor,
                house: house,
                value: value
            })
        return res;
    },

    async getLogs() {
        const res = await axios.get('http://localhost:3000/logs')
        return res.data
    }
}

export default HttpService;
