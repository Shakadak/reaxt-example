const React = require('react')
const ReactDOM = require('react-dom')

function HelloWorld(_props) {
  return <div>{"Here, have some bananas."}</div>
}

module.exports = {
  reaxt_server_render(params, render) { // server side call, should call render(ReactComp)
    render(<HelloWorld/>)
  },
  reaxt_client_render(initialProps, render) { // initial client side call, should call render(ReactComp)
    render(<HelloWorld/>)
  }
}
