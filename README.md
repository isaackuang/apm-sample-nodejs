
# Install node packages
```
npm install --save @opentelemetry/sdk-node \
    @opentelemetry/auto-instrumentations-node \
    @opentelemetry/exporter-collector-grpc \
    @grpc/grpc-js \
    @opentelemetry/resources \
    @opentelemetry/semantic-conventions
```

# Get tracing.js file to your folder
```
wget https://raw.githubusercontent.com/isaackuang/apm-sample-nodejs/master/src/tracing.js

```

# Add code before your code start
```
if (process.env.APM_ENABLE == 'true') {
    console.log("Enable tracing")
    require('./tracing');
}
```

# Environment variables

Variable name | Example value  | Describe
--------------|-----|------------------
APM_ENABLE|true|Enable APM agent
APM_SERVICE_NAME|myApp|Service name
APM_URL|grpc://apm-server:8200|URL for APM server
APM_API_KEY|Y0lNY0Izd0JEaXNLaVdtcnN3TEs6S2FHWm1Pc2VSWS1oWUhkN0xLX0VFdw==|API key for APM server
