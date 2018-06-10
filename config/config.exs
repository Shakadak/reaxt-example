use Mix.Config

config :reaxt, otp_app: :hello
config :reaxt, hot: Mix.env == :dev
config :reaxt, pool_size: if(Mix.env == :dev, do: 1, else: 10)
