const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるため、1を足す
const day = today.getDate();

console.log(`${year}年${month}月${day}日`); // 例: 2025年5月29日