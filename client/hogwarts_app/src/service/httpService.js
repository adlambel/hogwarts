const axios = require('axios');

export default class HttpService {

  getProfessors() {
      return axios.get('/professor')
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
  }

  getStudents() {
      return axios.get('/student')
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
  }

  addProfessor(name, gender) {
      return axios.post('/professor',{
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
  }

  addStudent(house, name, gender) {
      return axios.post('/student',{
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
  }

  deleteProfessor(id) {
      return axios.delete('/professor',{
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
  }

  deleteStudent(id) {
      return axios.delete('/student',{
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
  }

  getScores() {
      return axios.get('/scores')
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
  }

  addScore(professor, house, value) {
      return axios.post('/scores', 
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
  }
}
