function solution(operations) {
  const list = [];
  operations.forEach((el) => {
    if (el === "D 1" && list.length) {
      list.splice(list.indexOf(Math.max(...list)))
    } else if (el === "D -1" && list.length) {
      list.splice(list.indexOf(Math.min(...list)))
    } else {
      list.push(Number(el.slice(2)));
    }
  });
  return list.length ? [Math.max(...list), Math.min(...list)] : [0,0]
}
