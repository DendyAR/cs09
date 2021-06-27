/**
 * File ini tidak perlu diubah.
 * Silahkan ubah file sort.js
 */

 const Sort = require('./insertion');

 let koleksi = [35,27,13,3,12,25,45];
 let sort = new Sort();
 let hasil = sort.insertionSort(koleksi);
 
 console.log(hasil);