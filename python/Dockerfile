FROM python:alpine

RUN pip install flask

RUN pip install flask-mysql

WORKDIR /opt/source-code

ENV FLASK_APP=app

COPY . .

EXPOSE 5000

CMD [ "flask", "run" ]
