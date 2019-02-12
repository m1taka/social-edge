-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 19 яну 2019 в 18:19
-- Версия на сървъра: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edge`
--

-- --------------------------------------------------------

--
-- Структура на таблица `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `json` text CHARACTER SET utf8 NOT NULL,
  `postId` int(11) NOT NULL,
  `email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура на таблица `surveys`
--

CREATE TABLE `surveys` (
  `id` int(11) NOT NULL,
  `json` text CHARACTER SET utf8 NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Схема на данните от таблица `surveys`
--

INSERT INTO `surveys` (`id`, `json`, `name`) VALUES
(1, '{\r\n \"pages\": [\r\n  {\r\n   \"name\": \"page1\",\r\n   \"elements\": [\r\n    {\r\n     \"type\": \"radiogroup\",\r\n     \"name\": \"question1\",\r\n     \"title\": \"What kind of electric supply you are using currently?\",\r\n     \"choices\": [\r\n      {\r\n       \"value\": \"item1\",\r\n       \"text\": \"The Local Electric company\"\r\n      },\r\n      {\r\n       \"value\": \"item2\",\r\n       \"text\": \"Own Solar Panel System/ Other Bio energy source\"\r\n      }\r\n     ]\r\n    }\r\n   ]\r\n  },\r\n  {\r\n   \"name\": \"page2\",\r\n   \"elements\": [\r\n    {\r\n     \"type\": \"radiogroup\",\r\n     \"name\": \"question2\",\r\n     \"title\": \"Do you really need to make a change on your monthly electric expenses?\",\r\n     \"choices\": [\r\n      {\r\n       \"value\": \"item1\",\r\n       \"text\": \"Yes\"\r\n      },\r\n      {\r\n       \"value\": \"item2\",\r\n       \"text\": \"No\"\r\n      }\r\n     ]\r\n    }\r\n   ]\r\n  },\r\n  {\r\n   \"name\": \"page3\",\r\n   \"elements\": [\r\n    {\r\n     \"type\": \"radiogroup\",\r\n     \"name\": \"question3\",\r\n     \"title\": \"Are you ready to dedicate one hour of your time to educate yourself and learn how you can save up to 60% of your expenses?\",\r\n     \"choices\": [\r\n      {\r\n       \"value\": \"item1\",\r\n       \"text\": \"Yes\"\r\n      },\r\n      {\r\n       \"value\": \"item2\",\r\n       \"text\": \"No\"\r\n      }\r\n     ]\r\n    }\r\n   ]\r\n  },\r\n  {\r\n   \"name\": \"page4\",\r\n   \"elements\": [\r\n    {\r\n     \"type\": \"text\",\r\n     \"name\": \"email\",\r\n     \"title\": \"Fill your Email address, get the future in your hands:\",\r\n     \"validators\": [\r\n      {\r\n       \"type\": \"email\"\r\n      }\r\n     ],\r\n     \"inputType\": \"email\",\r\n     \"placeHolder\": \"Your e-mail here...\"\r\n    }\r\n   ]\r\n  }\r\n ]\r\n}', 'survey1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
