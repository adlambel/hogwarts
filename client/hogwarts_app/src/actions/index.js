export const inits = () => (
    {
        type: 'INITS',
        payload: {
            request: {
                url: '/student'
            }
        },
    })

export const initp = () => (
    {
        type: 'INITP',
        payload: {
            request: {
                url: '/professor'
            }
        },
    })

export const initl = () => (
    {
        type: 'INITL',
        payload: {
            request: {
                url: '/logs'
            }
        },
    })

export const addStudent = (house, firstname, lastname, gender) => (
    {
        type: 'ADD_STUDENT',
        payload: {
            request: {
                method: 'POST',
                url: '/student',
                params: {
                    house: house,
                    firstname: firstname,
                    lastname: lastname,
                    gender: gender
                }
            }
        },
    })

export const addProfessor = (firstname, lastname, gender) => (
    {
        type: 'ADD_PROFESSOR',
        payload: {
            request: {
                method: 'POST',
                url: '/professor',
                params: {
                    firstname: firstname,
                    lastname: lastname,
                    gender: gender
                }
            }
        },
    })

export const addPoints = (house, profname, value) => (
    {
        type: 'ADD_POINTS',
        payload: {
            request: {
                method: 'POST',
                url: '/scores',
                params: {
                    profname: profname,
                    house: house,
                    value: value
                }
            }
        },
    })

export const removeStudent = (id) => (
    {
        type: 'REMOVE_STUDENT',
        payload: {
            request: {
                method: 'DELETE',
                url: '/student',
                params: {
                    id: id
                }
            }
        },
    })

export const removeProfessor = (id) => (
    {
        type: 'REMOVE_PROFESSOR',
        payload: {
            request: {
                method: 'DELETE',
                url: '/professor',
                params: {
                    id: id
                }
            }
        },
    })

