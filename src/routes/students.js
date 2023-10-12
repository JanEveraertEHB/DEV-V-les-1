
/**
 * Struct student object and parameters
 * 
 * @param id (integer): Unique identifier for the student.
 * @param name (string): Name of the student.
 * @param age (integer): Age of the student.
 * @param classgroup (string): Class group information for the student.
 * @param grade (double): Grade information for the student.
 * @param created_at (string): Timestamp of when the student record was created.
 * @param updated_at (string): Timestamp of when the student record was last updated.
 */


function initEndpoints(app, db) {

  app.get('/students', async (req, res) => {
    db('students')
      .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching students.' });
      })
  });

  app.get('/students/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      db('students').where({ id }).first().then((student) => {
        if (student) {
        res.json(student);
        } else {
          res.status(404).json({ error: 'Student not found' });
        }
      }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the student.' });
      })
  });

}

module.exports = initEndpoints;