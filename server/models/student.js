import People from './people';

class Student extends People {
  constructor(id, house, fullname, gender) {
    super(id, fullname, gender);
    this.house = house;
  }
}

export default Student
