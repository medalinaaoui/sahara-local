FROM node:21-alpine3.17
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
         then npm install; \
         else npm install --only=production; \
         fi
COPY . .
CMD [ "node", "index.js" ]