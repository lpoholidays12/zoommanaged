import db from "./dbController.js"


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

export {getPackageList,getPackage,getPackageType}