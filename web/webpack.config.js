const path = require('path')

const reaxt-js-root = 'reaxt-react-15'

const client_config = {
  entry: `${reaxt-js-root}/client_entry_addition`,
  output: {
    path: path.join(__dirname, '../priv/static'), //typical output on the default directory served by Plug.Static
    filename: 'client.[hash].js', //dynamic name for long term caching, or code splitting, use WebPack.file_of(:main) to get it
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}

const server_config = Object.assign(Object.assign({},client_config),{
  target: "node",
  entry: `${reaxt-js-root}/react_server`,
  externals: {},
  output: {
    path: path.join(__dirname, '../priv/react_servers'), //typical output on the default directory served by Plug.Static
    filename: 'server.js' //dynamic name for long term caching, or code splitting, use WebPack.file_of(:main) to get it
  },
})
module.exports = [client_config,server_config]
