import db from "./dbController.js"


const getAllPackages = async (req, res) => {
    var packageData = await db.query(`SELECT * from packages`);

  const packages = packageData[0].reduce((result, packageItem) => {
    const packageType = packageItem.package_type;

    result[packageType] = result[packageType] || [];

    // Push the package to the array
    result[packageType].push(packageItem);

    return result;
  }, {});

  res.json({ packages })
}

export {getAllPackages}