import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='frontend/build')
PROJECT_DIR = os.path.dirname(__file__)


# Serve React App
@app.route('/')
def serve():
    return send_from_directory('frontend/build/', 'index.html')


@app.route('/static/<path:path>')
def serve_static(path):
    if os.path.exists(f"{PROJECT_DIR}/frontend/build/static/{path}"):
        return send_from_directory('frontend/build/static', path)
    else:
        return send_from_directory('frontend/build', 'index.html')


@app.route('/robots.txt')
def robots():
    return 'aaaaa'


@app.route('/test')
def test():
    return 'tst'


@app.route('/<path:path>')
def blackhole(path):
    return send_from_directory('frontend/build/', 'index.html')


if __name__ == '__main__':
    app.run()
