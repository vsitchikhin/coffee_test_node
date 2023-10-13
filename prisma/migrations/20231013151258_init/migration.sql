-- CreateTable
CREATE TABLE `CoffeeMachines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL,
    `sizeParameterId` INTEGER NOT NULL,
    `drinksQtyParameterId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sizes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DrinksQty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CoffeeMachines` ADD CONSTRAINT `CoffeeMachines_sizeParameterId_fkey` FOREIGN KEY (`sizeParameterId`) REFERENCES `Sizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CoffeeMachines` ADD CONSTRAINT `CoffeeMachines_drinksQtyParameterId_fkey` FOREIGN KEY (`drinksQtyParameterId`) REFERENCES `DrinksQty`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
