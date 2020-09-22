export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.filter(person => person.age > 10 && person.age < 20)[0].name;
}
