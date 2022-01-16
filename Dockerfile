FROM node:17-alpine
WORKDIR /frontend
COPY /build /frontend/build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "80"]