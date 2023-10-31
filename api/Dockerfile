FROM node:21-alpine3.17
WORKDIR /app
COPY package*.json ./
RUN if [ "$NODE_ENV" = "production" ]; then npm install --only=production; else npm install; fi
COPY . .
CMD [ "node", "index.js" ]