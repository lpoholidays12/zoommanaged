import db from "./dbController.js"


const data = {
  formData: {
    
    selectDate: '2023-12-24',
    numOfAdults: '1',
    numOfChildren6To11: '1',
    numOfChildren2To5: '0',
    numOfInfants: '0',
    flight: 'yes',
    visa: 'yes',
    discountAmount: '15000',
    activities: 'boating',
    others: 'nothing',
    streetAddress: 'wall street',
    selectState: 'Gujarat',
    pinCode: '543765',
    country: 'Other'
  },
  guests: [
    { name: 'Mr james', age: '45', passport: '123456789' },
    { name: 'John Doe', age: '34', passport: '1823682173' }
  ]
}

const getPackageType = async (req, res) => {
  var packageTypeData = await db.query(`SELECT * from packages`)

  res.json({ packages:packageTypeData[0] })
}

const getPackageList = async (req, res) => {
  const { id } = req.params

  var packageData = await db.query(`SELECT * from sub_package where package_id=`+id);


  res.json({ packageList:packageData[0] })
}

const getPackage = async (req, res) => {
  const { id } = req.params

  var packageData = await db.query(`SELECT * from sub_package where subPkg_id=`+id);
  
  res.status(200).json({package:packageData[0]})
}

const getBookingData = async (req, res) => {



}

export {getPackageList,getPackage,getPackageType}