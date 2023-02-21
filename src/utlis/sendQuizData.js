import axios from "axios";
export const sendQuizData = async (data, setError, setSuccess) => {
   const {
      name,
      phone,
      adress,
      furniture,
      prize,
      rangeInput,
      roomType,
      typeCleaning,
      windowCleaning,
   } = data;
   try {
      let message = `<b> Заявка с квиза сайта! </b> \n`;
      message += `<b> Отправитель </b> ${name}  \n`;
      message += `<b> Номер </b> ${phone}  \n`;
      message += `<b> ${roomType.title} </b> ${roomType.answer}  \n`;
      message += `<b> ${typeCleaning.title} </b> ${typeCleaning.answer}  \n`;
      message += `<b> ${rangeInput.title} </b> ${rangeInput.answer}  \n`;
      message += `<b> ${furniture.title} </b> ${furniture.answer}  \n`;
      message += `<b> ${windowCleaning.title} </b> ${windowCleaning.answer}  \n`;
      message += `<b> ${adress.title} </b> ${adress.answer}  \n`;
      message += `<b> ${prize.title} </b> ${prize.answer}  \n`;

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
