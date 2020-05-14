# build environment
FROM node:14.2.0-stretch as build
WORKDIR /app
ENV PATH /ifeira/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm i --production --verbose
RUN npm install react-scripts@3.4.1 
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/letsencrypt/ /etc/letsencrypt
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]