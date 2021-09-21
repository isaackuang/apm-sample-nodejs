FROM node

RUN npm install -g pm2

COPY src /app

WORKDIR /app

ENTRYPOINT ["pm2", "--no-daemon", "start", "app.js"]