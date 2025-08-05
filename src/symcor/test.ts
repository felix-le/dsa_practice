// function firstNonRepeatingChar(s: string): string | null | undefined {
//   for (let i = 0; i < s.length; i++) {
//     let isRepeated = false;
//     for (let j = 0; j < s.length; j++) {
//       if (s[i] === s[j] && i !== j) {
//         isRepeated = true;
//         break;
//       }
//     }
//     if (!isRepeated) {
//       return s[i];
//     }
//   }
//   return null;
// }

// function canConstruct(s: string, t: string): boolean {
//   const tArray = t.split('');

//   for (const charS of s) {
//     const indexInT = tArray.findIndex((charT) => charT === charS);

//     if (indexInT === -1) {
//       // If a character from 's' is not found in 't'
//       return false;
//     } else {
//       // "Use" the character by removing it from tArray
//       tArray.splice(indexInT, 1);
//     }
//   }

//   return true;
// }
// "Consider this function. It takes two strings, s and t.
// The goal is to determine if you can construct string s from the characters in string t. Each character in t can only be used once."

// "Here is a function that takes a sorted array of integers and squares each number.
// The function should return a new array containing the squares of all the numbers, also sorted in non-decreasing order.
function sortedSquares(nums: number[]): number[] {
  // 1. Square every number
  const squaredArray = nums.map((num) => num * num);

  // 2. Sort the new array
  squaredArray.sort((a, b) => a - b);

  return squaredArray;
}
export function rewrite(s: string, t: string): boolean {
  return true;
}

// export function rewrite(s: string): string | null | undefined {
//   const mapString = new Map<string, number>();

//   for (const c of s) {
//     const currentCount = mapString.get(c) || 0;
//     mapString.set(c, currentCount + 1);
//   }
//   for (const char of s) {
//     if (mapString.get(char) === 1) {
//       return char;
//     }
//   }
//   return null;
// }
//

// --- Hàm Helper ---
// Thêm ^ và $ để đảm bảo nó chỉ khớp với một ký tự duy nhất
// Thêm 'i' flag để không phân biệt hoa/thường (dù không bắt buộc vì đã có toLowerCase)
function isAlphaNumeric(char: string): boolean {
  return /^[a-z0-9]$/i.test(char);
}

// --- Hàm Chính ---
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Check is alphanumeric for left pointer
    // Sửa lỗi cú pháp: Thêm dấu ')'
    while (left < right && !isAlphaNumeric(s[left]!)) {
      left++;
    }

    // Check is alphanumeric for right pointer
    // Sửa lỗi cú pháp: Thêm dấu ')'
    while (left < right && !isAlphaNumeric(s[right]!)) {
      right--;
    }

    // So sánh (Phần này bạn đã làm hoàn hảo)
    if (s[left]!.toLowerCase() !== s[right]!.toLowerCase()) {
      return false;
    }

    // Di chuyển vào trong (Phần này bạn đã làm hoàn hảo)
    left++;
    right--;
  }

  return true;
}

function reverseStringWithLoop(s: string): string {
  let reversedString = ''; // Bắt đầu với một chuỗi rỗng

  // Điều kiện đúng là i >= 0 để bao gồm cả phần tử đầu tiên
  for (let i = s.length - 1; i >= 0; i--) {
    // Nối từng ký tự (từ cuối) vào chuỗi kết quả
    reversedString += s[i];
  }

  return reversedString;
}
