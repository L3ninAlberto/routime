-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2022 a las 04:25:24
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `routime`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

CREATE TABLE `actividad` (
  `id_actividad` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `hora_inicial` time NOT NULL,
  `hora_final` time NOT NULL,
  `notificacion` varchar(70) NOT NULL,
  `fk_tablero_rutina` int(11) NOT NULL,
  `fk_color_actividad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color_actividad`
--

CREATE TABLE `color_actividad` (
  `id_color_actividad` int(11) NOT NULL,
  `color` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `color_actividad`
--

INSERT INTO `color_actividad` (`id_color_actividad`, `color`) VALUES
(1, '#ff6666'),
(2, '#ffb366'),
(3, '#ffff99'),
(4, '#99ff99'),
(5, '#99ffff'),
(6, '#9999ff');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablero_rutina`
--

CREATE TABLE `tablero_rutina` (
  `id_tablero_rutina` int(11) NOT NULL,
  `dia_inicial` varchar(9) NOT NULL,
  `dia_final` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`id_actividad`),
  ADD KEY `fk_tablero_rutina` (`fk_tablero_rutina`),
  ADD KEY `fk_color_actividad` (`fk_color_actividad`);

--
-- Indices de la tabla `color_actividad`
--
ALTER TABLE `color_actividad`
  ADD PRIMARY KEY (`id_color_actividad`);

--
-- Indices de la tabla `tablero_rutina`
--
ALTER TABLE `tablero_rutina`
  ADD PRIMARY KEY (`id_tablero_rutina`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad`
--
ALTER TABLE `actividad`
  MODIFY `id_actividad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `color_actividad`
--
ALTER TABLE `color_actividad`
  MODIFY `id_color_actividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tablero_rutina`
--
ALTER TABLE `tablero_rutina`
  MODIFY `id_tablero_rutina` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD CONSTRAINT `actividad_ibfk_1` FOREIGN KEY (`fk_tablero_rutina`) REFERENCES `tablero_rutina` (`id_tablero_rutina`),
  ADD CONSTRAINT `actividad_ibfk_2` FOREIGN KEY (`fk_color_actividad`) REFERENCES `color_actividad` (`id_color_actividad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
