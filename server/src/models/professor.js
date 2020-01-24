import People from './people';

class Professor extends People {
  constructor(id, firstname, lastname, gender) {
    super(id, firstname, lastname, gender);
  }
}

export default Professor
