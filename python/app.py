import os
from flask import Flask

app = Flask(__name__)


@app.route("/")
def main():

 return '''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello from ptython</title>
  </head>
  <body>
    Helloo from docker

  </body>
</html>
'''

if __name__ == "__main__":
    app.run(host="0.0.0.0",port="5000")