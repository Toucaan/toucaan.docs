---
sidebar_position: 2
---

# Installation
Toucaan uses the [sass-lang](https://sass-lang.com/) pre-processor to output stylesheets by default. However, one can easily configure Toucaan to utilize another processor like LESS or STYLUS.  

### Webpack  
Displayed below is sample `webpack` config for a typical `node/express` app.

:::tip

Notice the separation of stylesheets for desktop, mobile, and the other types of devices on the web. The Intrinsic Approach to design adopted by Toucaan caters to the [full scope of the new web](https://bubblin.io/blog/the-new-landscape-of-the-web) and not just mobile and desktop. 

:::

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
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js'
  },
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
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: './dist/'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: './dist/'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline'
      }
    ]
  }
}
```

A [sample file](https://github.com/Toucaan/toucaan/blob/master/webpack.config.js.sample) is included for reference or customization by the end user. 


Since each web framework is different and follows a slightly different set of rules or conventions, the preprocessing pipeline with `sass` or another tool is therefore left to the author as an exercise. 

Go to next step and [configure](./configuration.md) Toucaan for your project.