-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-06-2022 a las 19:33:52
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
-- Estructura de tabla para la tabla `cancha`
--

CREATE TABLE `cancha` (
  `id` int(5) NOT NULL,
  `id_user` int(20) DEFAULT NULL,
  `nombre_cancha` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` bigint(15) DEFAULT NULL,
  `codigo_postal` int(6) NOT NULL,
  `cantidad_canchas` bigint(15) NOT NULL,
  `logo` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` enum('A','B') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `cancha`
--

INSERT INTO `cancha` (`id`, `id_user`, `nombre_cancha`, `direccion`, `telefono`, `codigo_postal`, `cantidad_canchas`, `logo`, `estado`) VALUES
(1, 3, 'drop', 'av. uruguay 123', 3764777733, 3300, 3, '', 'A'),
(4, 3, 'Arenas', 'Av. Quaranta', 3764123456, 3300, 4, 'C:fakepathcentro-integral-de-operaciones-911-policia-de-misiones-591695-10242.png', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

CREATE TABLE `jugador` (
  `id` int(5) NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dni` int(9) NOT NULL,
  `f_nacimiento` date NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `sexo` varchar(2) COLLATE utf8mb4_spanish_ci NOT NULL,
  `n_celular` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL,
  `foto_perfil` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` enum('A','B') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`id`, `nombre`, `apellido`, `dni`, `f_nacimiento`, `email`, `sexo`, `n_celular`, `foto_perfil`, `password`, `estado`) VALUES
(1, 'Juan', 'pedro', 32794202, '1987-04-10', 'prueba@gmail.com', 'M', '3764720436', ' ', '$2a$10$vTzfssCoRzeT..2eVIUJJ.AA.WAmG1YhCfOdAbqUPP2LCsVhaLLhq', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_dash`
--

CREATE TABLE `roles_dash` (
  `id` int(5) NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` enum('A','B') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `roles_dash`
--

INSERT INTO `roles_dash` (`id`, `nombre`, `descripcion`, `estado`) VALUES
(1, 'ADMIN', '', 'A'),
(2, 'SECRETARIO_CANCHA', '', 'A'),
(3, 'SUPER ADMINISTRADOR', '', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(5) NOT NULL,
  `id_rol` int(5) DEFAULT NULL,
  `id_cancha` int(5) DEFAULT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dni` int(9) NOT NULL,
  `celular` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `correo` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` enum('A','B') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `id_rol`, `id_cancha`, `nombre`, `apellido`, `dni`, `celular`, `correo`, `password`, `estado`) VALUES
(3, NULL, NULL, 'jose', 'Ponce', 33794201, '3764720436', 'prueba@gmail.com', '$2a$10$VlbIPXnmDeqylP6AdPkKZ.C593zew2e2nB8fxGJQsim9eXS2M0Swu', 'A'),
(4, NULL, NULL, 'jose', 'Ponce', 33794202, '3764720436', 'prueba@gmail.com', '$2a$10$eDtG5.q64gzR9ZrBnpAMTe8rQsSBMeZVUUb2zt7fMQbWIaeod27Mm', 'A'),
(5, NULL, NULL, 'jose', 'Ponce', 33794203, '3764720436', 'prueba@gmail.com', '$2a$10$hU3Hmq1Fox4Ar00GNaMwxe8LhFyYKskHcehx4OGugNB601G5rMo/W', 'A'),
(6, NULL, NULL, 'jose', 'Ponce', 33794204, '3764720436', 'prueba@gmail.com', '$2a$10$D9yLnzfOQSIDWugzEBXJCefZ6JBLXN1RVb6k9JkttAMVu4sxTOrgC', 'A'),
(7, NULL, NULL, 'jose', 'Ponce', 33794205, '3764720436', 'prueba@gmail.com', '$2a$10$PiSIUfZM1poZ0LgBlhzGueyVspFfMmieKRg2KC8xe8YkAy6ZJ.BIy', 'A'),
(8, NULL, NULL, 'jose', 'Ponce', 33794206, '3764720436', 'prueba@gmail.com', '$2a$10$eoiKbuCIbwEnv/kYDCleq.5cEEr1xtU5qphv0kWfYk/RJY6QXs72m', 'A'),
(9, NULL, NULL, 'jose', 'Ponce', 33794207, '3764720436', 'prueba@gmail.com', '$2a$10$WFj5jOmvBnwPkkUsIRfBmOl/wZXEulM7bHmUQccOjJlLagrSD3cLG', 'A'),
(10, NULL, NULL, 'jose', 'Ponce', 33794208, '3764720436', 'prueba@gmail.com', '$2a$10$Aj/844w5KOgc.lQJGTCdUe.oUfc2pcqvGu3UitFgfWhLF5mAVTU5.', 'A'),
(11, NULL, NULL, 'jose', 'Ponce', 33794209, '3764720436', 'prueba@gmail.com', '$2a$10$oDKA6au8WTI7nWVj2yzUPOr1Shtz0QuUSZDqw8LN4akr2igY1CqUO', 'A'),
(12, NULL, NULL, 'jose', 'Ponce', 337942010, '3764720436', 'prueba@gmail.com', '$2a$10$Hq1Xo63vCiuNIw4d9gJU6uAJkExKefsf4j/soqwi7UgT8vhEPMl/q', 'A'),
(13, NULL, NULL, 'jose', 'Ponce', 337942011, '3764720436', 'prueba@gmail.com', '$2a$10$2IiAyFi5elVevI6gWmTop.0cOdFSySFzlrQmT7i0NEEPBDpK95Czu', 'A'),
(14, NULL, NULL, 'jose', 'Ponce', 337942012, '3764720436', 'prueba@gmail.com', '$2a$10$MiJ4zYkMSa49JqGoQPBOlOtcEGA/2.UDiLfLiw63XM6IRewCYHZd.', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_cancha`
--

CREATE TABLE `user_cancha` (
  `id` int(5) DEFAULT NULL,
  `id_user` int(5) NOT NULL,
  `id_cancha` int(5) NOT NULL,
  `estado` enum('A','B') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cancha`
--
ALTER TABLE `cancha`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles_dash`
--
ALTER TABLE `roles_dash`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_rol_fk` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cancha`
--
ALTER TABLE `cancha`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `jugador`
--
ALTER TABLE `jugador`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles_dash`
--
ALTER TABLE `roles_dash`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_rol_fk` FOREIGN KEY (`id_rol`) REFERENCES `roles_dash` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
