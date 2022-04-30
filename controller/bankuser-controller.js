const BankUser = require("../models/bankuser");
const getAllbankUsers = async (req, res, next) => {
  let bankuser;
  try {
    bankuser = await BankUser.find();
  } catch (err) {
    console.log(err);
  }

  if (!bankuser) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ bankuser });
};

const addbankuser = async (req, res, next) => {
    const { accountnumber,phonenumber,pin,amount} = req.body;
    let bankuser;
    try {
      bankuser = new BankUser({
       
        accountnumber,
        
        phonenumber,
       
        pin,
        amount,
       
       
    
        
      });
      await bankuser.save();
    } catch (err) {
      console.log(err);
    }
    if (!bankuser) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ bankuser });
  };

  const updatebankuser = async (req, res, next) => {
    const id = req.params.id;
    const {amount} = req.body;
    let bankuser;
    try {
      bankuser = await BankUser.findByIdAndUpdate(id, {
      amount,
         
      });
     bankuser= await bankuser.save();
    } catch (err) {
      console.log(err);
    }
    if (!bankuser) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ bankuser });
  };
  

  exports.addbankuser = addbankuser;
  exports.updatebankuser = updatebankuser;
  exports.getAllbankUsers=getAllbankUsers;

  