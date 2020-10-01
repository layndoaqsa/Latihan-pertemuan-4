var namaDepan

function namaDepann() {
   namaDepan = prompt('masukan nama depan', 'bambang')
   if (namaDepan) {
      document.getElementById('namaDepan').innerHTML = `nama depan : ${namaDepan} `
   }
}

function namaBelakang() {
   let namaBelakang = prompt('masukan nama belakang', 'sulastri')
   if (namaDepan == null) {
      alert('masukan nama depan dahulu')
   } else {
      if (namaBelakang) {
         document.getElementById('namaBelakang').innerHTML = `nama belakang : ${namaBelakang} `
         document.getElementById('namaLengkap').innerHTML = `nama lengkap : ${namaDepan} ${namaBelakang} `
      }
   }
}

function konfirmasiUmur() {
   let konfirmasiUmur = prompt('masukan nama umur', '')
   if (konfirmasiUmur > 18) {
      document.getElementById('konfirmasiUmur').innerHTML = `anda dapat akses`
   } else {
      document.getElementById('konfirmasiUmur').innerHTML = `anda tidak dapat akses karena belum berumur 18 tahun`
   }
}

function konfirmasiSpesies() {
   let konfirmasiSpesies = confirm('apakah anda manusia?', '')
   let getSpesies = document.getElementById('konfirmasiSpesies')

   getSpesies.innerHTML = konfirmasiSpesies ? 'silahkan :D' : 'pergi!!!'
}