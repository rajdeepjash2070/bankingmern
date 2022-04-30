const User = require("../models/user");
const getAllUsers = async (req, res, next) => {
  let user;
  try {
    user = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ user });
};

const adduser = async (req, res, next) => {
    const { name, accountnumber,phonenumber,secondphonenumber,pin,password,confirmpassword} = req.body;
    let user;
    try {
      user = new User({
        name,
        accountnumber,
        
        phonenumber,
        secondphonenumber,
        pin,
       
        password,
        confirmpassword,
       
    
        
      });
      await user.save();
    } catch (err) {
      console.log(err);
    }
    if (!user) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ user });
  };
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
      user = await User.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ user });
  };

  exports.adduser = adduser;
  exports.getById = getById;
  exports.getAllUsers=getAllUsers;

  