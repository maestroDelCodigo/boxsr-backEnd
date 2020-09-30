-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: boxsr
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categoria` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_coleccion`
--

DROP TABLE IF EXISTS `categoria_coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categoria_coleccion` (
  `categoria_id` int(11) NOT NULL,
  `coleccion_id` int(11) NOT NULL,
  KEY `coleccion_id4_idx` (`coleccion_id`),
  KEY `categoria_id2_idx` (`categoria_id`),
  CONSTRAINT `categoria_id2` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`categoria_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `coleccion_id4` FOREIGN KEY (`coleccion_id`) REFERENCES `coleccion` (`coleccion_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_coleccion`
--

LOCK TABLES `categoria_coleccion` WRITE;
/*!40000 ALTER TABLE `categoria_coleccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria_coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_producto`
--

DROP TABLE IF EXISTS `categoria_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categoria_producto` (
  `categoria_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  KEY `categoria_id_idx` (`categoria_id`),
  KEY `producto_id_idx` (`producto_id`),
  CONSTRAINT `categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`categoria_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producto_id4` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`producto_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_producto`
--

LOCK TABLES `categoria_producto` WRITE;
/*!40000 ALTER TABLE `categoria_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coleccion`
--

DROP TABLE IF EXISTS `coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `coleccion` (
  `coleccion_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(145) NOT NULL,
  `deleted` tinyint(4) NOT NULL,
  `video_url` varchar(145) DEFAULT NULL,
  `precio_rebajado` decimal(5,2) DEFAULT NULL,
  `precio_original` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`coleccion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coleccion`
--

LOCK TABLES `coleccion` WRITE;
/*!40000 ALTER TABLE `coleccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comentario` (
  `comentario_id` int(11) NOT NULL,
  `rating` smallint(5) DEFAULT NULL,
  `titulo` varchar(45) NOT NULL,
  `cuerpo_comentario` varchar(245) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `coleccion_id` int(11) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`comentario_id`),
  KEY `usuario_id_idx` (`usuario_id`),
  KEY `coleccion_id4_idx` (`coleccion_id`),
  KEY `producto_id4_idx` (`producto_id`),
  CONSTRAINT `comentario_id5` FOREIGN KEY (`coleccion_id`) REFERENCES `coleccion` (`coleccion_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producto_id5` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`producto_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuario_id2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descuento`
--

DROP TABLE IF EXISTS `descuento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `descuento` (
  `descuento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `cantidad` varchar(45) NOT NULL,
  `numero_usos` smallint(2) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT NULL,
  `deleted` tinyint(4) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `precio_base` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`descuento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descuento`
--

LOCK TABLES `descuento` WRITE;
/*!40000 ALTER TABLE `descuento` DISABLE KEYS */;
/*!40000 ALTER TABLE `descuento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `direccion` (
  `direccion_id` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(145) NOT NULL,
  `codigo_postal` smallint(5) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `localidad` varchar(80) DEFAULT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`direccion_id`),
  KEY `usuario_id9_idx` (`usuario_id`),
  CONSTRAINT `usuario_id9` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen_coleccion`
--

DROP TABLE IF EXISTS `imagen_coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `imagen_coleccion` (
  `imagen_id` int(11) NOT NULL,
  `path` varchar(145) NOT NULL,
  `coleccion_id` int(11) NOT NULL,
  PRIMARY KEY (`imagen_id`),
  KEY `coleccion_id7_idx` (`coleccion_id`),
  CONSTRAINT `coleccion_id7` FOREIGN KEY (`coleccion_id`) REFERENCES `coleccion` (`coleccion_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen_coleccion`
--

LOCK TABLES `imagen_coleccion` WRITE;
/*!40000 ALTER TABLE `imagen_coleccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen_coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen_producto`
--

DROP TABLE IF EXISTS `imagen_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `imagen_producto` (
  `imagen_id` int(11) NOT NULL,
  `path` varchar(45) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`imagen_id`),
  KEY `producto_id6_idx` (`producto_id`),
  CONSTRAINT `producto_id6` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`producto_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen_producto`
--

LOCK TABLES `imagen_producto` WRITE;
/*!40000 ALTER TABLE `imagen_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pedido` (
  `pedido_id` int(11) NOT NULL AUTO_INCREMENT,
  `estado_pago` varchar(45) NOT NULL,
  `forma_entrega` varchar(45) NOT NULL,
  `iva` smallint(3) DEFAULT NULL,
  `total_pedido` decimal(6,2) NOT NULL,
  `estado_preparacion` varchar(45) NOT NULL,
  `fecha_pedido` datetime NOT NULL,
  `notas` varchar(245) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `descuento_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`pedido_id`),
  KEY `usuario_id_idx` (`usuario_id`),
  KEY `descuento_id_idx` (`descuento_id`),
  CONSTRAINT `descuento_id` FOREIGN KEY (`descuento_id`) REFERENCES `descuento` (`descuento_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `producto` (
  `producto_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(145) NOT NULL,
  `tipo_producto` varchar(145) DEFAULT NULL,
  `codigo_producto` varchar(30) DEFAULT NULL,
  `peso` decimal(2,0) DEFAULT NULL,
  `stock` smallint(4) NOT NULL,
  `deleted` tinyint(4) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `precio` decimal(5,2) NOT NULL,
  PRIMARY KEY (`producto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_coleccion`
--

DROP TABLE IF EXISTS `producto_coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `producto_coleccion` (
  `producto_id` int(11) NOT NULL,
  `coleccion_id` int(11) NOT NULL,
  `cantidad` smallint(3) NOT NULL,
  KEY `coleccion_id_idx` (`coleccion_id`),
  KEY `producto_id3_idx` (`producto_id`),
  CONSTRAINT `coleccion_id3` FOREIGN KEY (`coleccion_id`) REFERENCES `coleccion` (`coleccion_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producto_id3` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`producto_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_coleccion`
--

LOCK TABLES `producto_coleccion` WRITE;
/*!40000 ALTER TABLE `producto_coleccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_pedido`
--

DROP TABLE IF EXISTS `producto_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `producto_pedido` (
  `producto_id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `cantidad` smallint(3) NOT NULL,
  KEY `producto_id_idx` (`producto_id`),
  KEY `pedido_id_idx` (`pedido_id`),
  CONSTRAINT `pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`pedido_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producto_id2` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`producto_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_pedido`
--

LOCK TABLES `producto_pedido` WRITE;
/*!40000 ALTER TABLE `producto_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_piel`
--

DROP TABLE IF EXISTS `test_piel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `test_piel` (
  `test_id` int(11) NOT NULL AUTO_INCREMENT,
  `exposicion_sol` varchar(145) NOT NULL,
  `granos` varchar(45) NOT NULL,
  `tipo_piel` varchar(45) NOT NULL,
  `edad` smallint(2) NOT NULL,
  `arrugas` varchar(45) NOT NULL,
  `notas` varchar(145) NOT NULL,
  `respuesta` varchar(145) NOT NULL,
  `fecha_test` datetime DEFAULT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`test_id`),
  KEY `id_usuario8_idx` (`usuario_id`),
  CONSTRAINT `id_usuario8` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_piel`
--

LOCK TABLES `test_piel` WRITE;
/*!40000 ALTER TABLE `test_piel` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_piel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `apellidos` varchar(145) NOT NULL,
  `email` varchar(80) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `registrado` tinyint(4) NOT NULL,
  `suscriptor` tinyint(4) NOT NULL,
  `password` varchar(15) NOT NULL,
  `rol` varchar(25) NOT NULL,
  `deleted` tinyint(4) NOT NULL,
  `fecha_nacimiento` int(11) NOT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-30 13:52:51
