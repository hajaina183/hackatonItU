CREATE TABLE LoginMobile(
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(40) ,
    mdp VARCHAR(255) ,
    role VARCHAR(50)
);

CREATE TABLE LoginAdmin(
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(40) ,
    mdp VARCHAR(255) 
);

CREATE TABLE MaladieChronique(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) 
);

CREATE TABLE Allergie(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) 
);

CREATE TABLE Vaccin(
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) 
);

CREATE TABLE Region(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomRegion VARCHAR(255) 
);

CREATE TABLE Centre(
    id INT AUTO_INCREMENT PRIMARY KEY,
    adresse VARCHAR(255),
    idRegion int ,
    FOREIGN KEY (idRegion) REFERENCES Region (id)
);


CREATE TABLE Patient(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    sexe VARCHAR (50),
    dateNaissance Date,
    adresse VARCHAR(255),
    cin VARCHAR(255),
    email VARCHAR(50),
    mdp VARCHAR(255),
    estEceinte VARCHAR(50), /*oui ou non*/
    idAllergie int,
    idVaccin int,
    idCentre int,
    FOREIGN KEY (idAllergie) REFERENCES Allergie (id), 
    FOREIGN KEY (idVaccin) REFERENCES Vaccin (id), 
    FOREIGN KEY (idCentre) REFERENCES Centre (id)
);

CREATE TABLE VaccinFait(
    id INT AUTO_INCREMENT PRIMARY KEY,
    idPatient int,
    idVaccin int,
    dose int,
    daty DateTime,
    etat VARCHAR(50), /* fait ou non fait*/
    FOREIGN KEY (idPatient) REFERENCES Patient (id), 
    FOREIGN KEY (idVaccin) REFERENCES Vaccin (id)
);

CREATE TABLE Stock(
    id INT AUTO_INCREMENT PRIMARY KEY,
    idVaccin int,
    qtt int ,
    daty Date,
    FOREIGN KEY (idVaccin) REFERENCES Vaccin (id)
);