export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  return collection.map(c => String.fromCharCode(c + 96));
}
