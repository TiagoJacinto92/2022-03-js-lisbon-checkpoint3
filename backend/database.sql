-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `boat`
--

CREATE TABLE boat (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB;

--
-- Structure de la table `tile`
--

CREATE TABLE tile (
  id INT AUTO_INCREMENT NOT NULL,
  type VARCHAR(255) NOT NULL,
  coord_x INT NOT NULL,
  coord_y INT NOT NULL,
  has_treasure BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB;

--
-- Contenu de la table `boat`
--

INSERT INTO boat (name, coord_x, coord_y) VALUES
('Black Pearl', 0, 0);

--
-- Contenu de la table `tile`
--

INSERT INTO tile (type, coord_x, coord_y, has_treasure) VALUES
('sea', 0, 0, 0),
('sea', 1, 0, 0),
('sea', 2, 0, 0),
('sea', 3, 0, 0),
('sea', 4, 0, 0),
('island', 5, 0, 0),
('sea', 6, 0, 0),
('sea', 7, 0, 0),
('sea', 8, 0, 0),
('port', 9, 0, 0),
('sea', 10, 0, 0),
('sea', 11, 0, 0),
('sea', 0, 1, 0),
('port', 1, 1, 0),
('sea', 2, 1, 0),
('island', 3, 1, 0),
('sea', 4, 1, 0),
('sea', 5, 1, 0),
('sea', 6, 1, 0),
('sea', 7, 1, 0),
('sea', 8, 1, 0),
('sea', 9, 1, 0),
('island', 10, 1, 0),
('sea', 11, 1, 0),
('sea', 0, 2, 0),
('sea', 1, 2, 0),
('sea', 2, 2, 0),
('sea', 3, 2, 0),
('sea', 4, 2, 0),
('sea', 5, 2, 0),
('sea', 6, 2, 0),
('sea', 7, 2, 0),
('island', 8, 2, 0),
('sea', 9, 2, 0),
('sea', 10, 2, 0),
('sea', 11, 2, 0),
('sea', 0, 3, 0),
('island', 1, 3, 0),
('sea', 2, 3, 0),
('sea', 3, 3, 0),
('island', 4, 3, 0),
('sea', 5, 3, 0),
('sea', 6, 3, 0),
('sea', 7, 3, 0),
('sea', 8, 3, 0),
('sea', 9, 3, 0),
('sea', 10, 3, 0),
('sea', 11, 3, 0),
('sea', 0, 4, 0),
('sea', 1, 4, 0),
('sea', 2, 4, 0),
('sea', 3, 4, 0),
('sea', 4, 4, 0),
('sea', 5, 4, 0),
('sea', 6, 4, 0),
('island', 7, 4, 0),
('sea', 8, 4, 0),
('sea', 9, 4, 0),
('port', 10, 4, 0),
('sea', 11, 4, 0),
('island', 0, 5, 0),
('sea', 1, 5, 0),
('sea', 2, 5, 0),
('sea', 3, 5, 0),
('port', 4, 5, 0),
('sea', 5, 5, 0),
('sea', 6, 5, 0),
('sea', 7, 5, 0),
('sea', 8, 5, 0),
('sea', 9, 5, 0),
('sea', 10, 5, 0),
('island', 11, 5, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
