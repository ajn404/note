export const quickSort = (_: any) => {
    let values: any[] = [];
    let w = 10;
  
    let states: number[] = [];
    _.setup = () => {
      _.createCanvas(_.windowWidth, _.windowHeight);
      values = new Array(_.floor(_.width / w));
      for (let i = 0; i < values.length; i++) {
        values[i] = _.random(_.height);
        states[i] = -1;
      }
      quickSort(values, 0, values.length - 1);
    };
  
    _.draw = () => {
      _.background(0);
  
      for (let i = 0; i < values.length; i++) {
        _.noStroke();
        if (states[i] == 0) {
          _.fill("#E0777D");
        } else if (states[i] == 1) {
          _.fill("#D6FFB7");
        } else {
          _.fill(255);
        }
        _.rect(i * w, _.height - values[i], w, values[i]);
      }
    };
  
    async function quickSort(arr: any, start: any, end: any) {
      if (start >= end) {
        return;
      }
      let index = await partition(arr, start, end);
      states[index] = -1;
  
      await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end),
      ]);
    }
  
    async function partition(arr: any, start: any, end: any) {
      for (let i = start; i < end; i++) {
        states[i] = 1;
      }
  
      let pivotValue = arr[end];
      let pivotIndex = start;
      states[pivotIndex] = 0;
      for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
          await swap(arr, i, pivotIndex);
          states[pivotIndex] = -1;
          pivotIndex++;
          states[pivotIndex] = 0;
        }
      }
      await swap(arr, pivotIndex, end);
  
      for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
          states[i] = -1;
        }
      }
  
      return pivotIndex;
    }
  
    async function swap(arr: any, a: any, b: any) {
      await sleep(50);
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
  
    function sleep(ms: any) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  };
  