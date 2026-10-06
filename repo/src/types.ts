// Percobaan 2 - type & interface
export type Kategori = { id: number; nama: string };

export interface Buku {
  id: number;
  judul: string;
  penulis: string;
  isbn: string;
  kategori: Kategori[];
  stok?: number;            // opsional
}

export interface Anggota {
  id: number;
  nama: string;
  email: string;
  alamat?: string | null;   // opsional + union
}
