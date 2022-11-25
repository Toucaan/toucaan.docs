---
sidebar_position: 3
---

# Preprocessor (SASS)
Toucaan uses [sass-lang](https://sass-lang.com/) preprocessor (default) to process _user written_ styles. 

### Webpack  
Displayed below a [sample webpack config](https://github.com/Toucaan/toucaan/blob/master/webpack.config.js.sample) from a typical `node/express` app.

Observe the separation of stylesheets (or modules) for the desktop, tablet, mobile, smartwatch, electric vehicles, and other _classes_ of devices that are on the web today. Toucaan treats each type of device as a separate class of medium, thus allowing the designer to incorporate as much _intrinsicality_ (like physical size, viewable distance, pointer fine or coarse etc.) into their design as possible. 

```js title="webpack.config.js"
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer)
  } else if (m.name) {
    return m.name
  } else {
    return false
  }
}

const postcss = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      path: __dirname + '/postcss.config.js'
    }
  }
}

module.exports = {
  entry: {
    watch: path.resolve(`${__dirname}/public/toucaan/app/watch/watch.scss`),
    mobile: path.resolve(`${__dirname}/public/toucaan/app/mobile/mobile.scss`),
    tablet: path.resolve(`${__dirname}/public/toucaan/app/tablet/tablet.scss`),
    desktop: path.resolve(`${__dirname}/public/toucaan/app/desktop/desktop.scss`),
    vehicle: path.resolve(`${__dirname}/public/toucaan/app/vehicle/vehicle.scss`),
    television: path.resolve(`${__dirname}/public/toucaan/app/television/television.scss`),
    App: path.resolve(`${__dirname}/public/javascripts/app.js`),
    swa: path.resolve(`${__dirname}/public/javascripts/swa.js`)
  },
  mode: (process.env.NODE_ENV !== 'production') ? 'development' : 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        watchStyles: {
          name: 'watch',
          test: (m, c, entry = 'watch') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        mobileStyles: {
          name: 'mobile',
          test: (m, c, entry = 'mobile') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        tabletStyles: {
          name: 'tablet',
          test: (m, c, entry = 'tablet') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        desktopStyles: {
          name: 'desktop',
          test: (m, c, entry = 'desktop') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        vehicleStyles: {
          name: 'vehicle',
          test: (m, c, entry = 'vehicle') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        televisionStyles: {
          name: 'television',
          test: (m, c, entry = 'television') =>
            m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        }
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CompressionPlugin()
  ],
  …
  …
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          postcss,
          "sass-loader"
        ],
        include: path.resolve(__dirname, 'public', 'toucaan')
      },
      // …other rules. 
    ]
  }
}
```
Read more about the [Principles of Intrinsic Design](./core-concepts/space.md) to understand how Toucaan arrives at the separation of stylesheets as shown above. The [sample code](https://github.com/Toucaan/toucaan/blob/master/webpack.config.js.sample) is included with the Toucaan submodule for reference and customization. 

:::info web frameworks
Since each web framework is different and follows a slightly different set of conventions, setting up the preprocessing pipeline with `sass` or another preprocessor like `less` or `stylus` is left as an exercise.
:::


Go to [next step](./environment.md) and set up Environment Variables of your app.