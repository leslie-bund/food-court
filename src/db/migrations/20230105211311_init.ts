import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('brands', (table) => {
      table.increments();
      table.string('name', 255).notNullable().unique();
      table.timestamps(true, true);
    })
    .createTable('categories', (table) => {
      table.increments();
      table.string('name', 255).notNullable();
      table.integer('brandId').notNullable().references('brands.id');
      table.timestamps(true, true);
    })
    .createTable('meal_addons', (table) => {
      table.increments();
      table.string('name', 255).notNullable();
      table.string('description', 1000);
      table.string('price').notNullable();
      table.integer('categoryId').notNullable().references('categories.id');
      table.integer('brandId').notNullable().references('brands.id');
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('meal_addons')
    .dropTableIfExists('categories')
    .dropTableIfExists('brands');
}
