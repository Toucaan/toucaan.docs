---
sidebar_position: 3
---

# Setup 
A significant part of setting up a project is defining what tools to use for the presentation layer. Since Toucaan itself is mainly vanilla css (except for user defined styles) it doesn't require much tooling to get started with on any web framework. 

## SASS 
Once your project has the Toucaan submodule included all you need is a `sass` or `scss` preprocessor in your pipeline to output the required stylesheets.

Shown below is a `webpack` configuration for a typical Nodejs-Express-frontend app: 


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

The [sample file](https://github.com/Toucaan/toucaan/blob/master/webpack.config.js.sample) is included along with the Toucaan submodule and is available for reference or customization by the end user. 

Since web frameworks follow different set of conventions and rules, it is left with the author to determine the best way to set up SASS on their projects.
