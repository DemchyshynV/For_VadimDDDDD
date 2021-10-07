FROM python:3.9-alpine
MAINTAINER Romas Vadym

ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache --virtual ..build-deps gcc musl-dev mariadb-dev
# for Pillow
RUN apk add jpeg-dev zlib-dev libjpeg bash

RUN mkdir /app
WORKDIR /app

RUN adduser -D user
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh && chown user:user /wait-for-it.sh

USER user

ENV PATH="/home/user/.local/bin:${PATH}"
RUN python -m pip install --user pipenv

COPY ./backend/Pipfile* /tmp/
RUN cd /tmp && pipenv lock --requirements > requirements.txt && pip install --user -r requirements.txt

