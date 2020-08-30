CREATE DATABASE primerapi;

CREATE TABLE Usuariospg(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR (40),
    edad INT,
    email TEXT
);

INSERT INTO Usuariospg(nombre,edad,email)VALUES
('tomas', 20, 'jtomasvergara@gmail.com'),
('nicolas', 25, 'nicolas@gmail.com');