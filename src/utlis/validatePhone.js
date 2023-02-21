const PATTERN = /\D/g;
export const getInputNumbersValue = (value) => {
   // return only numbers
   return value.replace(PATTERN, "");
};
export const handlePhoneInput = (event) => {
   const input = event.target;
   let inputNumbersValue = getInputNumbersValue(input.value);
   let formattedInputValue = "";
   const selectionStart = input.selectionStart;

   if (!inputNumbersValue) {
      return (input.value = "");
   }

   if (input.value.length !== selectionStart) {
      return;
   }

   if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === "9") {
         inputNumbersValue = "7" + inputNumbersValue;
      }

      const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      if (inputNumbersValue.length > 1) {
         formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
         formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
         formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
         formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
   } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
   }

   input.value = formattedInputValue;
};
export const handlePhoneKeyDown = (
   // remove first symbol
   event
) => {
   const input = event.target;
   if (
      event.key === "Backspace" &&
      getInputNumbersValue(input.value).length === 1
   ) {
      input.value = "";
   }

   return input;
};
export const handlePhonePaste = (event) => {
   const pasted = event.clipboardData ?? window["clipboardData"];
   const input = event.target;
   const inputNumbersValue = getInputNumbersValue(input.value);

   if (pasted) {
      const pastedText = pasted.getData("Text");
      if (PATTERN.test(pastedText)) {
         input.value = inputNumbersValue;
      }
   }
};
