export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source).reduce((previous, current) => {
    return previous + parseInt(current, 10);
  }, 0);
}
