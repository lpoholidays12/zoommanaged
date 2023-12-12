import db from "./dbController.js"


const getPackages = async (req, res) => {
  var packageLists = []
  var packageData = await db.query(`SELECT * from packages`);
  for(let i = 0; i < packageData[0].length; i++){
    packageData[0][i]['PackageList'] =[];
    var subPackageData = await db.query(`SELECT * from sub_package WHERE sub_package.package_id =`+packageData[0][i]['package_id'])
    for(let j = 0; j<subPackageData[0].length;j++){
      packageLists.push(subPackageData[0][j])
    }
    packageData[0][i]['PackageList'].push(packageLists);
    packageLists=[]
  }

  res.json({ packages:packageData[0] })
}

const getPackage = async (req, res) => {
  const { id } = req.params

  var packageData = await db.query(`SELECT * from sub_package where subPkg_id=`+id);
  
  res.status(200).json(packageData[0])
}

export {getPackages,getPackage}