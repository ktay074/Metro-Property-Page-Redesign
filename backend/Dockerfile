FROM node:16

WORKDIR /app

COPY package.json . 
COPY package-lock.json . 

RUN npm install 

COPY . . 

EXPOSE 5000

CMD ["nodemon" , "server.js"]
