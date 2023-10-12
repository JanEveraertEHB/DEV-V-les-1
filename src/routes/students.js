
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

  /**
   * GET /students
   *
   * This route retrieves a list of all students from the database.
   * It returns a JSON array containing student records if successful.
   *
   * @param {object} req - The HTTP request object.
   * @param {object} res - The HTTP response object.
   * @returns {object} JSON response with either an array of student records or an error message.
   */
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

  /**
   * GET /students/:id
   *
   * This route retrieves a specific student's information from the database based on the provided ID.
   * It expects the student's ID as a parameter in the URL.
   * If the student is found, it returns the student's information as JSON.
   * If the student is not found, it returns a 404 Not Found error.
   *
   * @param {object} req - The HTTP request object containing the student ID as a parameter.
   * @param {object} res - The HTTP response object.
   * @returns {object} JSON response with either the student's information, a 404 error if not found, or a 500 error if an error occurs.
   */
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