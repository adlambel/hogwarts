-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 26, 2020 at 05:20 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_tests`
--

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `house` varchar(20) NOT NULL,
  `profname` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `house`, `profname`, `date`, `value`) VALUES
(1, 'Gryffindor', 'Harry Potter', '2020-01-26 12:56:53', 10),
(2, 'Hufflepuff', 'Harry Potter', '2020-01-26 12:56:57', 20),
(3, 'Gryffindor', 'Harry Potter', '2020-01-26 15:37:41', 100),
(4, 'Gryffindor', 'Harry Potter', '2020-01-26 15:37:18', 100),
(5, 'Gryffindor', 'Snapes Rogue', '2020-01-26 15:19:31', 10),
(6, 'Ravenclaw', 'Snapes Rogue', '2020-01-26 15:23:51', 100),
(7, 'Slytherin', 'Snapes Rogue', '2020-01-26 15:38:01', 10),
(9, 'Slytherin', 'Snapes  Rogue', '2020-01-26 16:12:39', 10);

-- --------------------------------------------------------

--
-- Table structure for table `professors`
--

CREATE TABLE `professors` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `gender` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `professors`
--

INSERT INTO `professors` (`id`, `firstname`, `lastname`, `gender`) VALUES
(5, 'Albus', 'Dumbledore', 'Trans* Male'),
(6, 'Snapes ', 'Rogue', 'Two-Spirit'),
(10, 'test', 'test', 'Cis Woman');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `house` varchar(20) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `gender` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `house`, `firstname`, `lastname`, `gender`) VALUES
(1, 'Gryffindor', 'Thibault', 'grouet', 'M'),
(12, 'Ravenclaw', 'Adrien', 'Lambel', 'Cis Male'),
(19, 'Slytherin', 'Guillaume', 'Rouaix', 'Cisgender Male'),
(21, 'Hufflepuff', 'John', 'Doe', 'Cis Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `professors`
--
ALTER TABLE `professors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `professors`
--
ALTER TABLE `professors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
