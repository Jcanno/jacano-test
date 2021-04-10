function handleStr(str: string) {
  return str.split(",")
}

function handleNumber(num: number) {
  return num.toFixed()
}

export { handleStr, handleNumber }
