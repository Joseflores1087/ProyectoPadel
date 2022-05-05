-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 05-05-2022 a las 20:25:28
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ematch`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

CREATE TABLE `jugador` (
  `id` int(5) NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `f_nacimiento` date NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `sexo` varchar(2) COLLATE utf8mb4_spanish_ci NOT NULL,
  `n_celular` int(15) NOT NULL,
  `foto_perfil` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` enum('A','B') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dni` int(9) NOT NULL,
  `celular` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `correo` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` enum('A','B') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `apellido`, `dni`, `celular`, `correo`, `password`, `estado`) VALUES
(1, 'jose', 'Ponce', 33794201, '3764720436', 'prueba@gmail.com', '$2b$10$xqTB63tBRi.YKpoIdVbkN./0V94v2lD4UWAz5XVK9z0.YAPOQqzEK', 'A');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `jugador`
--
ALTER TABLE `jugador`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
