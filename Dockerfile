FROM node:18-alpine
ENV NODE_ENV=production\
  PORT=4002\
  JWT_SECRET=mysupersecretstringavengersassemble

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "index.js"]