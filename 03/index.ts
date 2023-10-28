const mountMultiplicationTable = (numberList: number[]): string => {
    let result: string = "";
    for (let number of numberList) {
      for (let i = 0; i <= 10; i++) {
        const multiplication: number = number * i;
        result += `${number} x ${i} = ${multiplication} \n`;
        if (i === 10) result += "--------------- \n";
      }
    }
    return result;
  };
  
  console.log(mountMultiplicationTable([3, 2, 9, 0]));
  