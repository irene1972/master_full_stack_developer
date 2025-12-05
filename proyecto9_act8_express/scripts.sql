-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mi_blog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mi_blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mi_blog` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mi_blog` ;

-- -----------------------------------------------------
-- Table `mi_blog`.`autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_blog`.`autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `imagen` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish_ci;


-- -----------------------------------------------------
-- Table `mi_blog`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_blog`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion` VARCHAR(100) NULL DEFAULT NULL,
  `fecha_creacion` VARCHAR(45) NULL DEFAULT NULL,
  `new_tablecol` DATETIME NULL DEFAULT NULL,
  `categoría` VARCHAR(45) NULL DEFAULT NULL,
  `autores_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_autores_idx` (`autores_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_autores`
    FOREIGN KEY (`autores_id`)
    REFERENCES `mi_blog`.`autores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
