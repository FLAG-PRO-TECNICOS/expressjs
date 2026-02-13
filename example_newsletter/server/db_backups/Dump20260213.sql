CREATE DATABASE  IF NOT EXISTS `newsletter_example` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `newsletter_example`;
-- MySQL dump 10.13  Distrib 8.0.44, for macos15 (arm64)
--
-- Host: 157.230.77.88    Database: newsletter_example
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `subscribers`
--

DROP TABLE IF EXISTS `subscribers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscribers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribers`
--

LOCK TABLES `subscribers` WRITE;
/*!40000 ALTER TABLE `subscribers` DISABLE KEYS */;
INSERT INTO `subscribers` VALUES (1,NULL,'joe@email.com',1,'2026-02-13 19:16:19','2026-01-13 19:18:21'),(2,NULL,'moe@gmail.com',1,'2026-02-13 19:16:31',NULL),(3,NULL,'zepintarolas@lolada.pt',1,'2026-02-13 19:19:38',NULL),(4,NULL,'lalala',1,'2026-02-13 20:10:25',NULL),(5,NULL,'lalala@sdf.ccom',1,'2026-02-13 20:10:42',NULL),(12,NULL,'lassssssslala@sdf.ccom',1,'2026-02-13 20:17:31',NULL),(13,NULL,'lsslala@sdf.ccom',1,'2026-02-13 20:20:28',NULL),(15,NULL,'tobias@email.com',1,'2026-02-13 21:07:57',NULL),(17,NULL,'teste@teste.com',1,'2026-02-13 21:14:59',NULL),(19,NULL,'lsslahjohoioihoihla@sdf.ccom',1,'2026-02-13 21:24:24',NULL),(20,NULL,'teste@sdlkfsdiughisugh.com',1,'2026-02-13 21:24:57',NULL),(21,NULL,'sdfiuhsiduhsf@sdofijh.xom',1,'2026-02-13 21:25:25',NULL),(22,NULL,'sdfisdhf@sd.com',1,'2026-02-13 21:25:37',NULL),(23,NULL,'teste@lalalalalalalala.com',1,'2026-02-13 21:26:52',NULL),(25,NULL,'testeiii@lalalalalalalala.com',1,'2026-02-13 21:27:29',NULL),(26,NULL,'joao.caetano@pagerduty.com',1,'2026-02-13 21:31:34',NULL);
/*!40000 ALTER TABLE `subscribers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-13 21:50:17
