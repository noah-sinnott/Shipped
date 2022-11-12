const { json } = require("express");

exports.postOne = async (carrier_code, tracking_number) => {
  let obj = {
        "tracking_number": `${tracking_number}`,
    "carrier_code": `${carrier_code}`
        }
let data = await fetch(`https://api.tracktry.com/v1/trackings/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Tracktry-Api-Key': '9f587fc2-9c5e-4886-ae19-e45e202b7dfd'
  },
  body: JSON.stringify(obj)
}).then(res => res.json()).then(data => data)
  return data
}

exports.trackOne = async (carrier_code, tracking_number) => {
    
  let data = await fetch(`https://api.tracktry.com/v1/trackings/${carrier_code}/${tracking_number}`,
    {
    method: 'GET',
    headers: {
          'Content-Type': 'application/json',
          'Tracktry-Api-Key': '9f587fc2-9c5e-4886-ae19-e45e202b7dfd'
    }
    
}).then(res => res.json()).then(data => data)
  
  return data
}

//df175341108gb
//RN448381278GB