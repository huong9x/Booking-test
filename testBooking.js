const assert   = require('chai').assert;
const mocha    = require('mocha');
const describe = mocha.describe;
const it       = mocha.it;

const Patient   = require('./src/Patient');
const Doctor    = require('./src/Doctor');
const Falcuty   = require('./src/Falcuty');
const Scheduler = require('./src/Scheduler');
const Schedule  = require('./src/DoctorAvailablePolicy');

describe('test booking', function () {
    const scheduler = new Scheduler({
        create: [new Schedule()]
    });
});