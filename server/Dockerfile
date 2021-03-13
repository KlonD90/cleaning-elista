FROM node:14

RUN mkdir -p /srv/cleaning
WORKDIR /srv/cleaning/

ADD ./package.json ./package-lock.json /srv/cleaning/server/

RUN npm ci

ADD ./* /srv/cleaning/

ENV LC_ALL="C.utf-8" LANGUAGE="C.utf-8" LANG="C.utf-8" PORT=80 NODE_ENV="production" SERVE_STATIC="1"

EXPOSE 80

WORKDIR /srv/fund/server

CMD ["./run.sh"]

