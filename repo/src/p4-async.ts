// Percobaan 4 - async/await
const tunggu = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

async function catatPeminjaman(idBuku: number, idAnggota: number) {
  await tunggu(100);
  return { idBuku, idAnggota, tanggal: new Date().toISOString() };
}

async function main() {
  // dengan await -> dapat objeknya
  console.log("dengan await:", await catatPeminjaman(1, 1));

  // tanpa await -> masih Promise
  console.log("tanpa await:", catatPeminjaman(1, 1));

  // beberapa sekaligus
  const semua = await Promise.all([catatPeminjaman(1, 1), catatPeminjaman(2, 1)]);
  console.log("Promise.all:", semua.length, "data");

  // error handling
  try {
    await Promise.reject(new Error("gagal"));
  } catch (e) {
    console.log("error ditangkap:", (e as Error).message);
  }
}
main();
