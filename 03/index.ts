const mountMultiplicationTable = (numberList: number[]): void => {
  for (let number of numberList) {
    for (let i = 0; i <= 10; i++) {
      const result: number = number * i;
      console.log(`${number} x ${i} = ${result}`);
    }
    console.log("---------------");
  }
};

mountMultiplicationTable([3, 2, 9, 0]);
