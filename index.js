const root = __dirname

const dConfig = require (`${root}/driveconfig.json`)

const VS = require (`${root}/virtual_storage`)

const vs = new VS

vs.map (dConfig[0])
vs.map (dConfig[1])

console.dir (vs, {depth : 4})