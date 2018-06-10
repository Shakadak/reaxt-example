use Mix.Config

config :reaxt, [
  otp_app: :hello,
  reaxt_js_root: "reaxt-react-15",
  hot: Mix.env == :dev,
  pool_size: if(Mix.env == :dev, do: 1, else: 10)
]
