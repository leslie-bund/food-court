import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Truncate all exiisting tables
  await knex.raw('TRUNCATE TABLE "brands" CASCADE');
  await knex.raw('TRUNCATE TABLE "categories" CASCADE');
  await knex.raw('TRUNCATE TABLE "meal_addons" CASCADE');

  // Inserts seed entries
  await knex('brands').insert([
    { id: 1, name: 'Cimetidine' },
    { id: 2, name: 'Perphenazine' },
    { id: 3, name: 'Coppertone wet n clear' },
    { id: 4, name: 'Pantoprazole Sodium' },
    { id: 5, name: 'ADVAIR' },
    { id: 6, name: 'TOPCARE' },
    { id: 7, name: 'Health Mart Gas Relief' },
    { id: 8, name: 'Vexol' },
    { id: 9, name: 'childrens ibuprofen' },
    { id: 10, name: 'Alcohol Prep Pads Lightweight Non-Sterile' },
  ]);

  await knex('categories').insert([
    { id: 1, brandId: 10, name: 'Books' },
    { id: 2, brandId: 9, name: 'Shoes' },
    { id: 3, brandId: 1, name: 'Outdoors' },
    { id: 4, brandId: 3, name: 'Automotive' },
    { id: 5, brandId: 7, name: 'Electronics' },
    { id: 6, brandId: 4, name: 'Sports' },
    { id: 7, brandId: 6, name: 'Toys' },
    { id: 8, brandId: 2, name: 'Books' },
    { id: 9, brandId: 8, name: 'Baby' },
    { id: 10, brandId: 5, name: 'Electronica' },
  ]);

  await knex('meal_addons').insert([
    {
      id: 1,
      name: 'GranTurismo',
      description: 'Persevering web-enabled complexity',
      price: '$6.94',
      categoryId: 1,
      brandId: 1,
    },
    {
      id: 2,
      name: 'SC',
      description: 'Balanced disintermediate architecture',
      price: '$5.92',
      categoryId: 2,
      brandId: 2,
    },
    {
      id: 3,
      name: 'Grand Caravan',
      description: 'Ameliorated 4th generation access',
      price: '$3.11',
      categoryId: 3,
      brandId: 3,
    },
    {
      id: 4,
      name: 'Phaeton',
      description: 'Assimilated multi-tasking projection',
      price: '$8.47',
      categoryId: 4,
      brandId: 4,
    },
    {
      id: 5,
      name: 'Passat',
      description: 'Intuitive non-volatile paradigm',
      price: '$0.0',
      categoryId: 5,
      brandId: 5,
    },
    {
      id: 6,
      name: 'Accord',
      description: 'Horizontal encompassing conglomeration',
      price: '$8.61',
      categoryId: 6,
      brandId: 6,
    },
    {
      id: 7,
      name: 'Lucerne',
      description: 'Decentralized interactive archive',
      price: '$0.71',
      categoryId: 7,
      brandId: 7,
    },
    {
      id: 8,
      name: 'B9 Tribeca',
      description: 'Synergistic non-volatile open system',
      price: '$7.55',
      categoryId: 8,
      brandId: 8,
    },
    {
      id: 9,
      name: 'Miata MX-5',
      description: 'Down-sized coherent open system',
      price: '$6.85',
      categoryId: 9,
      brandId: 9,
    },
    {
      id: 10,
      name: 'Mirage',
      description: 'Pre-emptive even-keeled circuit',
      price: '$1.5',
      categoryId: 10,
      brandId: 10,
    },
  ]);
}
