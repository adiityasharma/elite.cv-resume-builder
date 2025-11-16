

export const verificationCodeGenerater = () => {
  return Math.floor(Math.random() * 1000000).toString().slice(0, 4);
}