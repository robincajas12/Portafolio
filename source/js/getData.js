const { get } = require("express/lib/response");

async function getData()
{
    return await fetch('data.json').then(res=>{JSON.parse(res)});
}

exports.getData = getData;