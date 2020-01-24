const axios = require('axios');

const HttpService = {

    getProfessors() {
        axios.get('/professor')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    getStudents() {
        axios.get('/student')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    addProfessor(name, gender) {
        axios.post('/professor', {
            name: name,
            gender: gender
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    addStudent(house, name, gender) {
        axios.post('/student', {
            house: house,
            name: name,
            gender: gender
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    deleteProfessor(id) {
        axios.delete('/professor', {
            id: id,
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    deleteStudent(id) {
        axios.delete('/student', {
            id: id,
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    getScores() {
        axios.get('/scores')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    getScore(house) {
        axios.get('http://localhost:3000/scores')
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

    addScore(professor, house, value) {
        axios.post('/scores',
            {
                professor: professor,
                house: house,
                value: value
            })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },

    getLogs() {
        axios.get('http://localhost:3000/logs')
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}

export default HttpService;
