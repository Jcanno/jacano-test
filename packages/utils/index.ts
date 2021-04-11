function handleStr(str: string) {
  return str.split(",")
}

function handleNumber(num: number) {
  return num.toFixed()
}

function handleArray(nums: number[]) {
  return nums.fill(1)
}

function handlePhone(nums: number[]) {
  return nums.filter((num) => num)
}

export { handleStr, handleNumber, handleArray, handlePhone }
