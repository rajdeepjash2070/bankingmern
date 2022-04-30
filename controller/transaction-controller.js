const Transaction= require("../models/transaction");
const getAllTransactions = async (req, res, next) => {
  let transaction;
  try {
    transaction = await Transaction.find();
  } catch (err) {
    console.log(err);
  }

  if (!transaction) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ transaction });
};

const addtransaction = async (req, res, next) => {
    const { sendaccount,receiveaccount,amount} = req.body;
    let transaction;
    try {
      transaction = new Transaction({
        sendaccount,
        receiveaccount,
        amount,
         
      });
      await transaction.save();
    } catch (err) {
      console.log(err);
    }
    if (!transaction) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ transaction });
  };

  exports.addtransaction = addtransaction;
  
  exports.getAllTransactions=getAllTransactions;
