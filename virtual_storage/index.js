const VIRTUALSTORAGE = class
{
  async map (prop)
  {
    const data = {};

    if (typeof (prop) == 'object') data.prop = await this.processInput (prop);
    else {};
    
    console.log (data)
  };

  async processInput (prop, looper)
  {
    let data = {};
    if (await looper) data = await looper;
    for (let a in prop)
    {
      if (typeof (prop[a]) == 'string') data[a.toUpperCase ()] = prop[a];
      if (typeof (prop[a]) == 'number') data[a.toUpperCase ()] = prop[a];
      if (typeof (prop[a]) == 'object')
      {
        data[a.toUpperCase ()] = {};
        if (Array.isArray (prop[a])) data[a.toUpperCase ()] = [];
        await this.processInput (prop[a], data[a.toUpperCase ()]);
      };
    };
    return data;
  };
};
module.exports = VIRTUALSTORAGE;