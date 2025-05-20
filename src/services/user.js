export function getUserNameFromToken() {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const payload = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payload)); // base64 decode + JSON parse

    // Faqat kerakli qismlarini qaytaramiz
    const { active, sub } = decodedPayload;
    return { active, sub };
  } catch (error) {
    console.error("Tokenni o‘qib bo‘lmadi:", error);
    return null;
  }
}
