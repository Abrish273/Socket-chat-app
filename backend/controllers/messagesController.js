import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    // receive the senderId from the middleware
    const senderId = req.user._id;

    // first find all conversations from db with the given sender and receiver Id
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }, // means find all conversation with the given ids
    });
    // if no conversation in db create a new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    // create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    
    // these run one after the other
    // await conversation.save();
    // await newMessage.save();

    //  this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);
    // SOCKET.IO functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("sendMessage controller error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] }, // means find all conversation with the given ids
    }).populate("messages"); // Not reference but actual messages
    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("sendMessage controller error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
