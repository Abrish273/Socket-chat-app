import { useState } from "react"
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
   const [loading , setLoading] = useState();
   const {
     messages,
     setMessages,
     selectedConversation,
   } = useConversation();

   const sendMessage = async (message) => {
      setLoading(true);
      try {
         const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({message}),
         });
         const data = await res.json();
         if (data.error) {
            // toast.error(data.error);
            console.log(data.error)
         } else {
            setMessages([...messages, data.message]);
         }
      } catch (error) {
         console.error(error);
      } finally {
         setLoading(false);
      }
   };

   return { sendMessage, loading };

}

export default useSendMessage