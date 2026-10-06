import type { Buku, Anggota } from "./types.js";   // impor pakai .js

const buku: Buku = {
  id: 1, judul: "Belajar TS", penulis: "Andi", isbn: "111",
  kategori: [{ id: 1, nama: "Teknologi" }],
};
const anggota: Anggota = { id: 1, nama: "Calson", email: "c@mail.com", alamat: null };

console.log(buku);
console.log(anggota);
