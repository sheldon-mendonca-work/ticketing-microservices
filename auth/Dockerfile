FROM node:lts-alpine

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev --ignore-scripts
COPY . .

CMD [ "npm", "run", "pb" ]