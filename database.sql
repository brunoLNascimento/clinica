CREATE TABLE `user` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`login` VARCHAR(50) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	`password` VARCHAR(250) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
	INDEX `Index 1` (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `client` (
	`clientId` INT(11) NOT NULL AUTO_INCREMENT,
	`cpf` VARCHAR(11) NOT NULL COLLATE 'latin1_swedish_ci',
	`name` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`gender` VARCHAR(1) NOT NULL COLLATE 'latin1_swedish_ci',
	`phone` INT(11) NOT NULL,
	`birth` DATE NOT NULL,
	`height` DOUBLE NOT NULL DEFAULT '0',
	`weight` DOUBLE NOT NULL DEFAULT '0',
	PRIMARY KEY (`clientId`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `clientHistory` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`clientId` INT(11) NOT NULL,
	`date` TIMESTAMP NOT NULL,
	`description` VARCHAR(500) NOT NULL DEFAULT '' COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `FK_clientHistory_client` (`clientId`) USING BTREE,
	CONSTRAINT `FK_clientHistory_client` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientId`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `schedule` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`dateCreated` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
	`timeSchedule` TIME NOT NULL DEFAULT '00:00:00',
	`daySchedule` DATE NOT NULL DEFAULT '0000-00-00',
	`clientId` INT(11) NOT NULL DEFAULT '0',
	`status` VARCHAR(10) NOT NULL DEFAULT '0' COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `FK__client` (`clientId`) USING BTREE,
	CONSTRAINT `FK__client` FOREIGN KEY (`clientId`) REFERENCES `client` (`clientId`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;
