const isProduction =
  process.env.NODE_ENV?.toLowerCase() === 'production'

const babelOptions = () => ({
  plugins: isProduction ? ['transform-remove-console'] : []
})

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  alias: {
    '@': './src'
  },
  plugins: [
    [
      '@snowpack/plugin-svelte',
      {
        preprocess: require('svelte-preprocess')({
          scss: {
            prependData: '@import "./src/style/main.scss";'
          },
          postcss: { plugins: [require('autoprefixer')()] },
          babel: babelOptions()
        })
      }
    ],
    [
      '@snowpack/plugin-babel',
      { transformOptions: babelOptions() }
    ],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize'
  ]
}
