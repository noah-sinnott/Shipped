exports.postOne = async (carrierCode, trackingNumber) => {
  const obj = {
    tracking_number: `${trackingNumber}`,
    carrier_code: `${carrierCode}`
  }
  const data = await fetch('https://api.tracktry.com/v1/trackings/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Tracktry-Api-Key': '9f587fc2-9c5e-4886-ae19-e45e202b7dfd'//add api key
    },
    body: JSON.stringify(obj)
  }).then(res => res.json()).then(data => data)
  return data
}

exports.trackOne = async (carrierCode, trackingNumber) => {
  const data = await fetch(`https://api.tracktry.com/v1/trackings/${carrierCode}/${trackingNumber}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Tracktry-Api-Key': '9f587fc2-9c5e-4886-ae19-e45e202b7dfd'//add api key
      }

    }).then(res => res.json()).then(data => data)

  return data
}
