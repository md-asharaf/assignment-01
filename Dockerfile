# base image
FROM node:20
#working directory in the container
WORKDIR /app
# copy package.json and package-lock.json to the working directory
COPY package*.json .
# install dependencies
RUN npm install
# copy all files to the working directory
COPY . .
# build the app
RUN npm run build
# expose the port
EXPOSE 3000
# start the app
CMD ["npm","run", "start"]

