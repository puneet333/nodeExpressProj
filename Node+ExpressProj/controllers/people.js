let { people } = require('../data');

const getPeople = (req, res) => {
    return res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if ( !name ) {
        return res.status(400).json({ success: false, msg: 'please provide a value' });
    }
    res.status(200).send({ success: true, person: name });
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if( !name) {
        return res.status(400).json({ success: false, msg: 'please provide name' });
    }
    res.status(200).send({ success: true, data: [...person, name] });
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));

    if( !person ) {
        return res.status(404).json({success: false, msg: `No person with id ${id}`});
    }
    const newpeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newpeople }); 
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${ req.params.id }`});
    }
    const newpeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newpeople });
}

module.exports = { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson };