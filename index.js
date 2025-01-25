const root = __dirname
const dConfig = require (`${root}/driveconfig.json`)

const VS = require (`${root}/virtual_storage`)

const vs = new VS

vs.map (dConfig[0])