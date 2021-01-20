function solution(operations) {
  const data = {
    list: [],
    maxValueDeleteCount: 0,
    minValueDeleteCount: 0,
  };

  operations.forEach((el) => {
    if (el === "D 1") {
      data.maxValueDeleteCount++;
    } else if (el === "D -1") {
      data.minValueDeleteCount++;
    } else {
      data.list.push(Number(el.slice(2)));
    }
  });

  data.list.sort((a, b) => a - b);

  const newList = data.list.slice(
    data.minValueDeleteCount,
    -data.maxValueDeleteCount + 1
  );

  if(newList.length >= 2) {
    return [newList[newList.length - 1], newList[0]]
  } else if (newList.length){
    return newList[0] > 0 ? [newList[0], 0] : [0, newList[0]]
  }
  return [0, 0];
}
