FROM node:lts-alpine as builder

ENV YAPI_VERSION="v1.9.2"
RUN apk add --no-cache git python make openssl tar curl
RUN mkdir -p /yapi/archive \
     && cd /yapi/archive \
     && curl -L https://github.com/YMFE/yapi/archive/${YAPI_VERSION}.tar.gz -o ${YAPI_VERSION}.tar.gz \
     && tar zxf ${YAPI_VERSION}.tar.gz \
     && mv yapi-* /yapi/build
RUN cd /yapi/build \
     && npm install --production

FROM node:lts-alpine
LABEL maintainer="xiao0yy@gmail.com"

ENV TZ="Asia/Shanghai"
ENV YAPI_HOME="/yapi/vendors"
WORKDIR ${YAPI_HOME}
RUN npm install pm2 -g

COPY configByEnv.js ${YAPI_HOME}
COPY fake.sh ${YAPI_HOME}
RUN chmod a+x ${YAPI_HOME}/fake.sh
COPY --from=builder /yapi/build ${YAPI_HOME}

EXPOSE 3000

CMD [ "start" ]

ENTRYPOINT [ "./fake.sh" ]
