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
-- Database: `whaledata`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_whales`
--

CREATE TABLE `tbl_whales` (
  `whales_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `whales_type` varchar(30) NOT NULL,
  `whales_years` smallint(4) NOT NULL,
  `whales_thumbs` varchar(30) NOT NULL,
  



  
    PRIMARY KEY (`whales_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;







INSERT INTO `tbl_whales` VALUES(1, 'Minke Whale','40','images/minke.png');
INSERT INTO `tbl_whales` VALUES(2, 'Beluga Whale','50','images/beluga.png' );
INSERT INTO `tbl_whales` VALUES(3, 'Narwhal Whale','50','images/narwal.png');
INSERT INTO `tbl_whales` VALUES(4, 'Gray Whale','60','images/grey.png');
INSERT INTO `tbl_whales` VALUES(5, 'Blue Whale','80','images/blue.png');
INSERT INTO `tbl_whales` VALUES(6, 'Sperm Whale','70','images/sperm.png');
INSERT INTO `tbl_whales` VALUES(7, 'Fin Whale','80','images/fin.png');
INSERT INTO `tbl_whales` VALUES(8, 'Humpback Whale','70','images/humpback.png');
INSERT INTO `tbl_whales` VALUES(9, 'Bowhead Whale','150','images/bowhead.png');









