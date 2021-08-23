export type Theme = typeof light;

export const light = {
  size: {
    headerHeight: '10vh',
  },
  colors: {
    main: '#ffffff',
    header: '#ffffff',
    text: '#000000',
  },
};

export const dark: Theme = {
  ...light,
  colors: {
    main: '#202d36',
    header: '#2b3743',
    text: '#ffffff',
  },
};