-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mi_franquicia
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mis_restaurantes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mis_restaurantes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mis_restaurantes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci ;
USE `mis_restaurantes` ;

-- -----------------------------------------------------
-- Table `mis_restaurantes`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mis_restaurantes`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(15) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `mis_restaurantes`.`restaurantes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mis_restaurantes`.`restaurantes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(100) NULL DEFAULT NULL,
  `telefono` VARCHAR(15) NULL DEFAULT NULL,
  `nombre_responsable` VARCHAR(45) NULL DEFAULT NULL,
  `abierto` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `mis_restaurantes`.`favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mis_restaurantes`.`favoritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clientes_id` INT NOT NULL,
  `restaurantes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_favoritos_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  INDEX `fk_favoritos_restaurantes1_idx` (`restaurantes_id` ASC) VISIBLE,
  CONSTRAINT `fk_favoritos_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `mis_restaurantes`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favoritos_restaurantes1`
    FOREIGN KEY (`restaurantes_id`)
    REFERENCES `mis_restaurantes`.`restaurantes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `mis_restaurantes`.`mesas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mis_restaurantes`.`mesas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero_mesa` INT NOT NULL,
  `numero_comensales` INT NULL DEFAULT NULL,
  `restaurantes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mesas_restaurantes_idx` (`restaurantes_id` ASC) VISIBLE,
  CONSTRAINT `fk_mesas_restaurantes`
    FOREIGN KEY (`restaurantes_id`)
    REFERENCES `mis_restaurantes`.`restaurantes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `mis_restaurantes`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mis_restaurantes`.`reservas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL DEFAULT NULL,
  `restaurantes_id` INT NOT NULL,
  `mesas_id` INT NOT NULL,
  `clientes_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reservas_restaurantes1_idx` (`restaurantes_id` ASC) VISIBLE,
  INDEX `fk_reservas_mesas1_idx` (`mesas_id` ASC) VISIBLE,
  INDEX `fk_reservas_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_reservas_restaurantes1`
    FOREIGN KEY (`restaurantes_id`)
    REFERENCES `mis_restaurantes`.`restaurantes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservas_mesas1`
    FOREIGN KEY (`mesas_id`)
    REFERENCES `mis_restaurantes`.`mesas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reservas_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `mis_restaurantes`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


# Inserción de datos en la tabla restaurantes
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante1', 'Calle1', '111111111', 'Responsable1', '1');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante2', 'Calle2', '222222222', 'Responsable2', '0');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante3', 'Calle3', '333333333', 'Responsable3', '0');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante4', 'Calle4', '444444444', 'Responsable4', '0');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante5', 'Calle5', '555555555', 'Responsable5', '1');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante6', 'Calle6', '666666666', 'Responsable6', '1');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante7', 'Calle7', '777777777', 'Responsable7', '1');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante8', 'Calle8', '888888888', 'Responsable8', '0');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante9', 'Calle9', '999999999', 'Responsable9', '1');
INSERT INTO `mis_restaurantes`.`restaurantes` (`nombre`, `direccion`, `telefono`, `nombre_responsable`, `abierto`) VALUES ('Restaurante10', 'Calle10', '101010101', 'Responsable10', '0');

# Inserción de datos en la tabla mesas
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '3', '1');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '4', '1');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '10', '2');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '5', '2');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '3', '3');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '1', '3');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '9', '4');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '5', '4');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '4', '5');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '5', '5');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '2', '6');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '2', '6');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '2', '7');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '2', '7');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '2', '8');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '2', '8');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '2', '9');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '7', '9');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('1', '15', '10');
INSERT INTO `mis_restaurantes`.`mesas` (`numero_mesa`, `numero_comensales`, `restaurantes_id`) VALUES ('2', '2', '10');

# Inserción de datos en la tabla clientes
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente1', '010101010', 'cliente1@cliente1.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente2', '020202020', 'cliente2@cliente2.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente3', '030303030', 'cliente3@cliente3.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente4', '040404040', 'cliente4@cliente4.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente5', '050505050', 'cliente5@cliente5.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente6', '060606060', 'cliente6@cliente6.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente7', '070707070', 'cliente7@cliente7.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente8', '080808080', 'cliente8@cliente8.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente9', '090909090', 'cliente9@cliente9.es');
INSERT INTO `mis_restaurantes`.`clientes` (`nombre`, `telefono`, `email`) VALUES ('Cliente10', '101010101', 'cliente10@cliente10.es');

# Inserción de datos en la tabla favoritos
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('1', '10');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('1', '1');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('3', '5');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('4', '1');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('4', '5');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('4', '8');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('4', '7');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('6', '1');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('6', '10');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('6', '5');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('7', '10');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('8', '1');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('8', '2');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('8', '5');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('8', '10');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('9', '10');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('9', '1');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('9', '8');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('9', '9');
INSERT INTO `mis_restaurantes`.`favoritos` (`clientes_id`, `restaurantes_id`) VALUES ('9', '5');

# Inserción de datos en la tabla reservas
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('1', '1', '1', '2026-01-29 13:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('1', '2', '2', '2026-01-29 12:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('1', '1', '3', '2026-01-28 12:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('1', '1', '4', '2026-01-28 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('2', '1', '5', '2026-01-28 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('2', '2', '6', '2026-01-27 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('3', '1', '7', '2026-01-28 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('3', '2', '8', '2026-01-28 12:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('3', '2', '9', '2026-01-28 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('4', '1', '1', '2026-01-10 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('4', '1', '2', '2026-01-10 13:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('4', '2', '3', '2026-01-10 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('5', '1', '4', '2026-01-11 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('5', '1', '5', '2026-01-11 12:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('5', '1', '6', '2026-01-11 13:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('6', '11', '7', '2026-01-12 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('6', '12', '8', '2026-01-12 13:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('7', '13', '9', '2026-01-13 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('8', '14', '1', '2026-01-13 12:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `clientes_id`, `fecha`) VALUES ('9', '15', '2', '2026-01-13 13:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `fecha`) VALUES ('6', '16', '2026-01-12 12:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `fecha`) VALUES ('6', '17', '2026-01-12 13:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `fecha`) VALUES ('6', '18', '2026-01-12 14:00:00');
INSERT INTO `mis_restaurantes`.`reservas` (`restaurantes_id`, `mesas_id`, `fecha`) VALUES ('6', '19', '2026-01-12 15:00:00');

# Sentencia SQL de selección para obtener todas las reservas que tiene un
restaurante para un día concreto, mostrando los datos del cliente y de la mesa
reservada.
select r.id,r.fecha,rest.nombre,c.nombre,m.numero_mesa,m.numero_comensales from reservas as r 
inner join restaurantes as rest on r.restaurantes_id=rest.id
inner join clientes as c on r.clientes_id=c.id
inner join mesas as m on r.mesas_id=m.id
where r.restaurantes_id=1 
and r.fecha between '2026-01-29 00:00:00' and '2026-01-29 23:59:59'

# Sentencia SQL de selección para obtener todos los nombres de los restaurantes
favoritos y que estén abiertos, para un cliente concreto.
select rest.nombre,rest.direccion,rest.telefono,rest.nombre_responsable from favoritos as f
inner join restaurantes as rest on f.restaurantes_id=rest.id
where f.clientes_id=1 and rest.abierto=1

# Sentencia SQL de actualización para poder modificar la fecha y hora de una
reserva
update reservas
set fecha='2026-01-15 13:00:00'
where id=5;

# Sentencia SQL de eliminación para poder eliminar todos los restaurantes favoritos
que no se encuentren abiertos para un cliente concreto.
delete from favoritos where id in (select id 
from (select f.id from favoritos as f
inner join restaurantes as rest on f.restaurantes_id=rest.id
where f.clientes_id=7 and rest.abierto=0) 
as temp)

# Sentencia SQL de selección para obtener el nombre de los restaurantes con más
de tres reservas de cuatro o más comensales para un día específico
select count(r.restaurantes_id) as reservas,rest.nombre 
from reservas as r
inner join restaurantes as rest on r.restaurantes_id=rest.id
inner join mesas as m on m.id=r.mesas_id
where r.restaurantes_id=3 and m.numero_comensales >= 4 and r.fecha between '2026-01-28 00:00:00' and '2026-01-28 23:59:59'
having reservas > 3

# Sentencia SQL de selección para obtener el aforo máximo de un restaurante
concreto.
select sum(m.numero_comensales) as aforo
from reservas as r
inner join mesas as m on r.mesas_id=m.id
where r.restaurantes_id=1

# Sentencia SQL de selección para obtener las mesas que dispongan de espacio para
dos comensales y que se encuentren disponibles (sin reserva) en un restaurante
específico para una fecha y hora concretos.
select r.mesas_id,r.clientes_id,m.numero_mesa,m.numero_comensales from reservas as r
inner join mesas as m on r.mesas_id=m.id
where m.numero_comensales=2 and r.clientes_id is null

# Sentencia SQL de selección para obtener el nombre del cliente que ha realizado
más reservas en un restaurante específico dentro de un rango de fechas dado.
select count(c.id) as num_reservas, c.nombre from reservas as r
right join clientes as c on r.clientes_id=c.id
where r.fecha between '2026-01-01 00:00:00' and '2026-01-30 23:59:59'
group by c.id
order by num_reservas desc limit 1