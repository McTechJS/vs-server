const VIRTUALSTORAGE = class
{
  #root = __dirname
  #driveModule = require (`${this.#root}/drive.js`)

  map (prop)
  {
    if (typeof (prop) == 'object') this.#driveMapper (this.processInput (prop));
    else {};
  };

  #driveMapper (prop)
  {
    if (!(this.STORAGE)) this.STORAGE = [];
    if (!(this.COUNT)) this.COUNT = 0;
    this.STORAGE.push (new this.#driveModule (prop));
    this.COUNT ++;
  }

  processInput (prop, looper)
  {
    let data = {};
    if (looper) data = looper;
    for (let a in prop)
    {
      if (typeof (prop[a]) == 'string') data[a.toUpperCase ()] = prop[a];
      if (typeof (prop[a]) == 'number') data[a.toUpperCase ()] = prop[a];
      if (typeof (prop[a]) == 'object')
      {
        data[a.toUpperCase ()] = {};
        if (Array.isArray (prop[a])) data[a.toUpperCase ()] = [];
        this.processInput (prop[a], data[a.toUpperCase ()]);
      };
    };
    return data;
  };
};
module.exports = VIRTUALSTORAGE;