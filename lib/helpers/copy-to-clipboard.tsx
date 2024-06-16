/**
 * Copies the provided text to the clipboard.
 *
 * @format
 * @param text - The text to be copied to the clipboard.
 * @returns A promise that resolves to true if the copy was successful, otherwise false.
 */

export const copyTextToClipboard = (text: string) => {
  if (!navigator.clipboard) {
    console.error("Clipboard API is not available");
    return false;
  }

  try {
    navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy text: ", error);
    return false;
  }
};
