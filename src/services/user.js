export function getUserNameFromToken() {
  try {
    const token = localStorage.getItem("token"); // token nomini siz qanday saqlagan bo‘lsangiz, shunday yozing
    if (!token) return null;

    const payload = token.split(".")[1]; // ikkinchi bo‘lak — payload
    const decodedPayload = JSON.parse(atob(payload)); // Base64 decoding + JSON parse

    return (
      decodedPayload.userName || decodedPayload.sub || decodedPayload.email
    ); // nimasi bo‘lsa
  } catch (error) {
    console.error("Tokenni o‘qib bo‘lmadi:", error);
    return null;
  }
}
