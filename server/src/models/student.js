import People from './people';

class Student extends People {
  constructor(id, house, firstname, lastname, gender) {
    super(id, firstname, lastname, gender);
    this.house = house;
  }
}

export default Student
