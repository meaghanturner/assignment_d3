-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 24, 2013 at 09:16 AM
-- Server version: 5.5.9
-- PHP Version: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `meanstack`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_whales` (
  `whales_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `whales_type` varchar(30) NOT NULL,
  `whales_years` smallint(4) NOT NULL,
  `whales_thumbs` varchar(30) NOT NULL,
  



  
    PRIMARY KEY (`whales_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;






INSERT INTO `tbl_whales` VALUES(1, 'Beluga Whale', '40-60', 'images/thumb1.jpeg' );
INSERT INTO `tbl_whales` VALUES(2, 'Blue Whale', '70-90', 'images/thumb2.jpeg');
INSERT INTO `tbl_whales` VALUES(3, 'Bowhead Whale','100-200', 'images/thumb3.jpeg');
INSERT INTO `tbl_whales` VALUES(4, 'Fin Whale', '60-100', 'images/thumb4.jpeg');
INSERT INTO `tbl_whales` VALUES(5, 'Gray Whale', '50-70', 'images/thumb5.jpeg');
INSERT INTO `tbl_whales` VALUES(6, 'Humpback Whale','40-100', 'images/thumb6.jpeg');
INSERT INTO `tbl_whales` VALUES(7, 'Minke Whale', '30-50', 'images/thumb7.jpeg');
INSERT INTO `tbl_whales` VALUES(8, 'Narwhal Whale', '40-60', 'images/thumb8.jpeg');
INSERT INTO `tbl_whales` VALUES(9, 'Sperm Whale', '60-80', 'images/thumb9.jpeg');



