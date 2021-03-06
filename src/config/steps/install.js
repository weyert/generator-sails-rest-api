/**
 * Step 7
 * Where installation are run (npm, bower)
 */

const DEPENDENCIES = [
  'sails-disk',
  'sails-memory'
];

export default function () {
  let adapter = `sails-${this.options['database-adapter'].toLowerCase()}`;

  this.npmInstall(DEPENDENCIES.concat([adapter]), {save: true});
};
