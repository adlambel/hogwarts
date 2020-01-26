import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {inits, initp, addStudent, removeStudent, initl} from "./actions";
import reducer from './reducers/index';

describe('REDUCER TESTS', () => {

    it('should return the initial state for students', () => {
        expect(reducer({students: []}, inits())).toEqual(
            {
                points: [],
                professors: [],
                students: [],

            }
        )
    })

    it('should return the initial state for professors', () => {
        expect(reducer({professors: []}, initp())).toEqual(
            {
                points: [],
                professors: [],
                students: [],

            }
        )

    })

    it('should return the initial state for points', () => {
        expect(reducer({points: []}, initl())).toEqual(
            {
                points: [],
                professors: [],
                students: [],

            }
        )

    })


    it('should handle ADD_STUDENT', () => {
        let house = 'Gryffindor';
        let firstname = 'test';
        let lastname = 'test';
        let gender = 'M';
        expect(
            reducer({
                students: [
                    {
                        id: 1,
                        firstname: "Thibault",
                        lastname: "grouet",
                        gender: "M",
                        house: "Gryffindor"
                    },
                    {
                        id: 12,
                        firstname: "Adrien",
                        lastname: "Lambel",
                        gender: "Cis Male",
                        house: "Ravenclaw"
                    },
                    {
                        id: 19,
                        firstname: "Guillaume",
                        lastname: "Rouaix",
                        gender: "Cisgender Male",
                        house: "Slytherin"
                    },
                    {
                        id: 21,
                        firstname: "John",
                        lastname: "Doe",
                        gender: "Cis Male",
                        house: "Hufflepuff"
                    }
                ]
            }, addStudent(house, firstname, lastname, gender))
        ).toEqual({
            points: [],
            professors: [],
            students: [
                {
                    id: 1,
                    firstname: "Thibault",
                    lastname: "grouet",
                    gender: "M",
                    house: "Gryffindor"
                },
                {
                    id: 12,
                    firstname: "Adrien",
                    lastname: "Lambel",
                    gender: "Cis Male",
                    house: "Ravenclaw"
                },
                {
                    id: 19,
                    firstname: "Guillaume",
                    lastname: "Rouaix",
                    gender: "Cisgender Male",
                    house: "Slytherin"
                },
                {
                    id: 21,
                    firstname: "John",
                    lastname: "Doe",
                    gender: "Cis Male",
                    house: "Hufflepuff"
                }
            ]
        })
    })

    it('should handle REMOVE_STUDENT', () => {
        let text = '1';
        expect(
            reducer({
                students: [
                    {
                        id: 1,
                        firstname: "Thibault",
                        lastname: "grouet",
                        gender: "M",
                        house: "Gryffindor"
                    },
                    {
                        id: 12,
                        firstname: "Adrien",
                        lastname: "Lambel",
                        gender: "Cis Male",
                        house: "Ravenclaw"
                    },
                    {
                        id: 19,
                        firstname: "Guillaume",
                        lastname: "Rouaix",
                        gender: "Cisgender Male",
                        house: "Slytherin"
                    },
                    {
                        id: 21,
                        firstname: "John",
                        lastname: "Doe",
                        gender: "Cis Male",
                        house: "Hufflepuff"
                    }
                ]
            }, removeStudent(text))
        ).toEqual({
            points: [],
            professors: [],
            students: [
                {
                    id: 1,
                    firstname: "Thibault",
                    lastname: "grouet",
                    gender: "M",
                    house: "Gryffindor"
                },
                {
                    id: 12,
                    firstname: "Adrien",
                    lastname: "Lambel",
                    gender: "Cis Male",
                    house: "Ravenclaw"
                },
                {
                    id: 19,
                    firstname: "Guillaume",
                    lastname: "Rouaix",
                    gender: "Cisgender Male",
                    house: "Slytherin"
                },
                {
                    id: 21,
                    firstname: "John",
                    lastname: "Doe",
                    gender: "Cis Male",
                    house: "Hufflepuff"
                }
            ]
        })
    })
})

