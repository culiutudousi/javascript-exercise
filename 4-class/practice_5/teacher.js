import Person from '../practice_4/person';

// TODO 20: 在这里写实现代码
export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    let kclassSentence;
    if (this.klass == null) {
      kclassSentence = `No Class`;
    } else {
      kclassSentence = `Class ${this.klass}`;
    }
    return `${super.introduce()} I am a Teacher. I teach ${kclassSentence}.`;
  }
}
