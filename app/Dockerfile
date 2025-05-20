FROM node:12.2.0-alpine
WORKDIR app
COPY . .
RUN ls -lrt
RUN pwd
RUN npm install 
RUN npm run test
EXPOSE 8000
CMD ["node","app.js"]