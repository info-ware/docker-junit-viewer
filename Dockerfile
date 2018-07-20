FROM node

RUN npm install junit-viewer -g

EXPOSE 8080

RUN junit-viewer --results=/test_results --port=8080