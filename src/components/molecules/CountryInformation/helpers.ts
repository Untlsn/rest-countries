export const joinNames = (objArr: { name: string }[]) => objArr.map(it => it.name).join(', ');
const reverseString = (str: string) => [...str].reverse().join('');

export const numberPrettier = (num: number) => {
  const revNum = reverseString(String(num));
  const revWithDots = revNum.replace(
    /.{1,3}/g,
    (nums) => `${nums},`,
  );
  const withDots = reverseString(revWithDots);
  return withDots.replace(/^./, '');
};