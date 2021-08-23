export const joinNames = (objArr: { name: string }[]) => objArr.map(it => it.name).join(', ');
export { default as numberPrettier } from '~/helpers/numberPrettier';