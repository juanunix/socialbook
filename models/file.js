const TABLE_NAME = 'Files';

exports.dropTable = `
  DROP TABLE IF EXISTS ${TABLE_NAME};
`

exports.createTable = `
  CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
    id INT NOT NULL AUTO_INCREMENT,
    content BLOB NOT NULL,
    PRIMARY KEY (id)
  );
`
