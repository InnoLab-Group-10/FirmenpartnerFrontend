FROM node:16.3-alpine

COPY . /frontend
WORKDIR /frontend

RUN npm install -g serve
RUN npm install
RUN npm run build

EXPOSE 8080

ENTRYPOINT npx react-inject-env set && serve -s build -l 8080