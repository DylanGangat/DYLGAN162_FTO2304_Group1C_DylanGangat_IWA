const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const {
  lists: [[, first]],
} = data || {};
const {
  lists: [, [, second]],
} = data || {};
const {
  lists: [, , [, third]],
} = data || {};

const result = [];
/**
 * Checks which of the last value of each of the 3 arrays is the biggest and pop() it and returns the value.
 * @returns {number} Number that will be push into an array
 */
const extractBiggest = () => {
  if (first.at(-1) > second.at(-1) && first.at(-1) > third.at(-1)) {
    return first.pop();
  }

  if (third.at(-1) < second.at(-1)) {
    return second.pop();
  }

  return third.pop();
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
