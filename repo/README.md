# Catatan Praktikum Pengembangan Aplikasi Web - Minggu 1

## Setup dari nol
```bash
mkdir praktikum && cd praktikum
npm init -y
npm i -D typescript tsx
npx tsc --init
```
Di `package.json` tambah:
```json
"type": "module",
"scripts": { "build": "tsc", "dev": "tsx src/index.ts" }
```

## Perintah penting
| Perintah | Fungsi |
|---|---|
| `npx tsx src/file.ts` | jalankan file TS langsung |
| `npx tsc --noEmit` | cek tipe saja (tanpa output JS) |
| `npx tsc` | kompilasi ke folder `dist` |
| `npm run p1` ... `p4` | jalankan contoh percobaan 1-4 |

## Pola yang sering dipakai
```ts
// opsional + union
alamat?: string | null
// generik
function f<T>(arr: T[]): T[] { ... }
// tunggu 100 ms
await new Promise((r) => setTimeout(r, 100));
// impor antar file ESM -> pakai .js
import { x } from "./types.js";
```

## Link cari jawaban
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- MDN Promise / async: https://developer.mozilla.org
- Error ESM: cari `ERR_MODULE_NOT_FOUND typescript .js extension`

## Percobaan
- `src/p1-setup.ts` - proyek jalan
- `src/types.ts`, `src/p2-tipe.ts` - type & interface
- `src/p3-generik.ts` - generik
- `src/p4-async.ts` - async/await
