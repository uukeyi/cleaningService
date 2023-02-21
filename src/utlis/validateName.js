export function preventDigits(sender) {
    sender.value = sender.value.replace(/\d/g, "");
}