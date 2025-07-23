export const checkAnagram = (s1: string, s2: string): boolean => {
  let counter1: any = {};
  let counter2: any = {};

  const arr1 = [...s1.toLowerCase()].filter(
    (char) => char >= 'a' && char <= 'z'
  );
  const arr2 = [...s2.toLowerCase()].filter(
    (char) => char >= 'a' && char <= 'z'
  );

  if (arr1.length !== arr2.length) {
    console.log(false);
    return false;
  }

  for (let char of arr1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (let char2 of arr2) {
    counter2[char2] = (counter2[char2] || 0) + 1;
  }

  for (let char in counter1) {
    if (counter1[char] !== counter2[char]) {
      console.log(false);

      return false;
    }
  }
  console.log(true);
  return true;
};

export const checkAnagram2 = (s1: string, s2: string): boolean => {
  // 1. Làm sạch chuỗi: lowercase + chỉ giữ chữ cái a–z
  const clean = (str: string): string[] =>
    [...str.toLowerCase()].filter((c) => c >= 'a' && c <= 'z');

  // 2. Hàm đếm tần suất ký tự
  const counterFn = (arr: string[]): { [key: string]: number } => {
    const counter: { [key: string]: number } = {};
    for (let char of arr) {
      counter[char] = (counter[char] || 0) + 1;
    }
    return counter;
  };

  const cleanS1 = clean(s1);
  const cleanS2 = clean(s2);

  // So sánh độ dài sau khi clean (đảm bảo cùng số chữ cái)
  if (cleanS1.length !== cleanS2.length) return false;

  const counter1 = counterFn(cleanS1);
  const counter2 = counterFn(cleanS2);

  // So sánh từng ký tự
  for (const char in counter1) {
    if (counter1[char] !== counter2[char]) return false;
  }

  return true;
};
