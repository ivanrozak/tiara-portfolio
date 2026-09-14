import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        paper: '#f7f7f5',
        ink: '#111111',
        muted: '#686866',
        coral: '#ffb9b1',
        wash: '#efefed',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    },
  },
}
