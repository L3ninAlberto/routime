-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2022 a las 05:14:29
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

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
  `fk_tablero_rutina` int(11) NOT NULL,
  `fk_color_actividad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actividad`
--

INSERT INTO `actividad` (`id_actividad`, `titulo`, `hora_inicial`, `hora_final`, `fk_tablero_rutina`, `fk_color_actividad`) VALUES
(1, 'Ir a la universidad', '08:00:00', '13:00:00', 1, 1),
(2, 'Jugar videojuegos', '15:30:00', '16:30:00', 1, 4),
(3, 'Escribir La Sombra del Nahual', '16:30:00', '17:30:00', 1, 6),
(4, 'Cursos de programación', '17:30:00', '18:30:00', 1, 3),
(5, 'Tareas de universidad', '18:30:00', '22:00:00', 1, 2),
(6, 'Pasear a Coky', '08:00:00', '09:00:00', 6, 6),
(7, 'Escribir La Sombra del Nahual', '09:00:00', '10:00:00', 6, 6),
(8, 'Tareas de universidad / Cursos programación', '10:00:00', '12:00:00', 6, 4),
(9, 'Hacer manualidades', '15:00:00', '17:00:00', 6, 5),
(10, 'Ir con mi abuela', '17:00:00', '19:00:00', 6, 2),
(11, 'Montar en bicicleta y jugar tenis', '08:00:00', '11:00:00', 7, 1),
(26, 'Actividad1', '08:20:00', '08:50:00', 6, 3),
(27, 'Actividad2', '10:30:00', '11:10:00', 6, 1),
(28, 'Actividad3', '19:30:00', '21:00:00', 6, 5),
(29, 'Actividad4', '18:10:00', '18:30:00', 6, 1);

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
  `dia` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tablero_rutina`
--

INSERT INTO `tablero_rutina` (`id_tablero_rutina`, `dia`) VALUES
(1, 'Lunes'),
(2, 'Mártes'),
(3, 'Miércoles'),
(4, 'Jueves'),
(5, 'Viernes'),
(6, 'Sábado'),
(7, 'Domingo');

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
  MODIFY `id_actividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `color_actividad`
--
ALTER TABLE `color_actividad`
  MODIFY `id_color_actividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tablero_rutina`
--
ALTER TABLE `tablero_rutina`
  MODIFY `id_tablero_rutina` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
