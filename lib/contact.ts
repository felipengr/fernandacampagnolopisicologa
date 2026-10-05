// "(11) 97376-5109" -> "https://wa.me/5511973765109?text=..."
export function whatsappLink(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "");
  const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${withCountry}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:+55${phone.replace(/\D/g, "")}`;
}

// "https://www.instagram.com/psico.fernandacampagnolo/" -> "@psico.fernandacampagnolo"
export function instagramHandle(url: string) {
  const handle = url.replace(/\/+$/, "").split("/").pop();
  return handle ? `@${handle}` : "";
}
