"""
@file app.py
@brief Archivo principal del servidor web
@details Este archivo se encarga de conectar la base de datos MySQL con la aplicacion web
@date 2024-03-12
@version 1.0.0
@author1 Jesus Antonio Lopez Bandala
@author2 Kitzya Minerva Luna Guadarrama
@author3 Yucef Ubayd Hernandez Garcia
@author4 Angel Yael Monroy Muñoz
@colaborator Hector Ramses Navarrete Gomez
"""
from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'jinofvx' # La clave es aleatoria, solo es para que funcione la sesión

@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(404)
def page_not_found(e):
    # Si el usuario intenta acceder a una página que no existe, regresa un error 404
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True) # Inicia el servidor web en modo debug