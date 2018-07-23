FROM node

RUN npm install junit-viewer -g

EXPOSE 8080

ADD package.json .
ADD test_converter.js .

RUN npm install

#RUN junit-viewer --results=/test_results --port=8080