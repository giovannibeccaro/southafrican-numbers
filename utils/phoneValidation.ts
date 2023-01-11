export default function phoneValidation(num: string): string {
  if (num.length === 11) return "correct";
  return "incorrect";
}
