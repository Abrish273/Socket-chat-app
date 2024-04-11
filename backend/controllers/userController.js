import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    //  means find all except the logged in user Id
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("error in the get users controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
