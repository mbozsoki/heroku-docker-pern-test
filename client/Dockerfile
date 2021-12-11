FROM node:14 as build-stage

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

### Run ###
FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80
