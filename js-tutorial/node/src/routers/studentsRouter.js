import express from 'express';

const router = express.Router();

let students = [];

router.get("/", (req, res) => {
    return res.status(200).send(students);
});

router.post("/", (req, res) => {
    const {
        name,
        age
    } = req.body;

    const student = {
        id: students.length + 1,
        name,
        age
    };

    students.push(student);

    return res.status(202).send(student);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    let searchedStudent;

    students.forEach(student => {
        if (student.id === parseInt(id)) {
            searchedStudent = student;
        }
    })

    return res.status(200).send(searchedStudent);
});

// INSERT
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {
        name,
        age
    } = req.body;

    let newStudents = [];
    const newStudent = {
        id,
        name,
        age
    };

    students.forEach(student => {
        if (student.id === id) {
            newStudents.push(newStudent);
        } else newStudents.push(student);
    })

    students = newStudents;

    return res.status(200).send(newStudent);
});

// DELETE
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let newStudents = [];

    students.forEach(student => {
        if (student.id !== id) {
            newStudents.push(student);
        }
    })

    students = newStudents;

    return res.status(200).send(newStudents);

});

export default router;