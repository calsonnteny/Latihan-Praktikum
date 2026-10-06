// Percobaan 3 - generik
export function cariBuku<T>(
  daftar: T[],
  kataKunci: string,
  ambilJudul: (item: T) => string
): T[] {
  return daftar.filter((i) =>
    ambilJudul(i).toLowerCase().includes(kataKunci.toLowerCase())
  );
}

// contoh variasi lain
function pertama<T>(arr: T[]): T | undefined {
  return arr[0];
}
interface Respons<T> { status: number; data: T }

const hasil = cariBuku(
  [{ judul: "Belajar TypeScript" }, { judul: "Web" }],
  "type",
  (b) => b.judul
);
console.log(hasil);
console.log(pertama([10, 20, 30]));
const r: Respons<string[]> = { status: 200, data: ["a", "b"] };
console.log(r);
