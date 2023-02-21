import axios from "axios";

export const sendData = async (data, setError, setSuccess) => {
   const { phone, name } = data;
   try {
      let message = `<b> Заявка с сайта! </b> \n`;
      message += `<b> Отправитель </b> ${name}  \n`;
      message += `<b> Номер </b> ${phone}  \n`;
      const response = await axios.post(
         "https://api.telegram.org/bot6057681319:AAHD0J5e1pZptn10Q4mYaCbqsIeAbGK9wfk/sendMessage",
         {
            chat_id: "-1001760066914",
            parse_mode: "html",
            text: message,
         }
      );
      if (response.data.ok) {
         setSuccess(true);
      }
   } catch (error) {
      setError(true);
   }
};
