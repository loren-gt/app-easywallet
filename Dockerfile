FROM node:10.16-slim

# WORKDIR /usr/app/
WORKDIR /app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
