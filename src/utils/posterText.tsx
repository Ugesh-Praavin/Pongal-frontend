export function posterText(text: string) {
  const sentences = text.split('.');
  return sentences.slice(0, 2).join('.').trim() + '.';
}
