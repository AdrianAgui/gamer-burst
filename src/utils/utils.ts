export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const decimalHash = (gameName: string) => {
  let sum = 0
  for (let i = 0; i < gameName.length; i++) {
    const num = gameName.codePointAt(i)
    if (num) {
      const op = (i + 1) * num
      sum += op / (1 << 8)
    }
  }
  return (sum % 60).toFixed(2)
}
