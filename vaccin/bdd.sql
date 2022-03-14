CREATE TABLE LoginMobile(
    id  Serial PRIMARY KEY,
    login VARCHAR(40) ,
    mdp VARCHAR(255) ,
    role VARCHAR(50)
);

CREATE TABLE LoginAdmin(
    id  Serial PRIMARY KEY,
    login VARCHAR(40) ,
    mdp VARCHAR(255) 
);

CREATE TABLE MaladieChronique(
    id  Serial PRIMARY KEY,
    nom VARCHAR(255) 
);

CREATE TABLE Allergie(
    id  Serial PRIMARY KEY,
    nom VARCHAR(255) 
);

CREATE TABLE Vaccin(
    id  Serial PRIMARY KEY,
    type VARCHAR(255) 
);

CREATE TABLE Region(
    id  Serial PRIMARY KEY,
    nomRegion VARCHAR(255) 
);

CREATE TABLE Centre(
    id  Serial PRIMARY KEY,
    adresse VARCHAR(255),
    idRegion int ,
    FOREIGN KEY (idRegion) REFERENCES Region (id)
);


CREATE TABLE Patient(
    id  Serial PRIMARY KEY,
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
    idMaladieChronique int,
    idVaccin int,
    idCentre int,
    FOREIGN KEY (idAllergie) REFERENCES Allergie (id), 
    FOREIGN KEY (idMaladieChronique) REFERENCES MaladieChronique (id),
    FOREIGN KEY (idVaccin) REFERENCES Vaccin (id), 
    FOREIGN KEY (idCentre) REFERENCES Centre (id)
);

CREATE TABLE VaccinFait(
    id  Serial PRIMARY KEY,
    idPatient int,
    idVaccin int,
    dose int,
    daty timestamp,
    etat VARCHAR(50), /* fait ou non fait*/
    FOREIGN KEY (idPatient) REFERENCES Patient (id), 
    FOREIGN KEY (idVaccin) REFERENCES Vaccin (id)
);

CREATE TABLE Stock(
    id  Serial PRIMARY KEY,
    idVaccin int,
    qtt int ,
    daty Date,
    FOREIGN KEY (idVaccin) REFERENCES Vaccin (id)
);