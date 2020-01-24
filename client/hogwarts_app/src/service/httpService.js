const axios = require('axios');

const HttpService = {

    async getProfessors() {
        const res = await axios.get('/professor')
        return res;
    },

    async getStudents() {
        const res = await axios.get('/student')
        return res
    },

    async addProfessor(name, gender) {
        const res = await axios.post('/professor', {
            name: name,
            gender: gender
        })
        return res;
    },

    async addStudent(house, name, gender) {
        const res = await axios.post('/student', {
            house: house,
            name: name,
            gender: gender
        })
        return res;
    },

    async deleteProfessor(id) {
        const res = await axios.delete('/professor', {
            id: id,
        })
        return res;
    },

    async deleteStudent(id) {
        const res = await axios.delete('/student', {
            id: id,
        })
        return res;
    },

    async getScores() {
        const res = await axios.get('/scores')
        return res;
    },

    async getScore(house) {
        const res = await axios.get('http://localhost:3000/scores')
            .then(function (response) {
                // handle success
                var jsonData = response.data
                for (var i = 0; i < jsonData.length; i++) {
                    var counter = jsonData[i]
                    if (counter.house === house)
                        return parseInt(counter.value)
                }
                return 0
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    async addScore(professor, house, value) {
        const res = await axios.post('/scores',
            {
                professor: professor,
                house: house,
                value: value
            })
            return res;
    },

    async getLogs() {
        const res = await axios.get('http://localhost:3000/logs')
            return res
    }
}

export default HttpService;
