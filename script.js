// DATA BUKU + FOTO LOKAL
let buku = [
  {judul:"Bulan", penulis:"Tere Liye", harga:85000, foto:"bulan.png"},
  {judul:"Kisah Tanah Jawa", penulis:"Tim KTJ", harga:75000, foto:"jawa.png"},
  {judul:"Hujan Bulan Juni", penulis:"Sapardi", harga:60000, foto:"hujan.png"},
  {judul:"Tentang Kamu", penulis:"Tere Liye", harga:80000, foto:"kamu.png"},
  {judul:"Cinta dalam Ikhlas", penulis:"Abay", harga:70000, foto:"cinta.png"},
  {judul:"Ayah", penulis:"Andrea Hirata", harga:90000, foto:"ayah.png"},
  {judul:"Dilan 1990", penulis:"Pidi Baiq", harga:65000, foto:"dilan.png"}
];

// TAMPILKAN BUKU
function tampilBuku(){
  let list = document.getElementById("bookList");
  list.innerHTML = "";

  buku.forEach((b, index) => {
    list.innerHTML += `
      <div class="card">
        <img src="${b.foto}" class="foto-buku">
        <h3>${b.judul}</h3>
        <p>${b.penulis}</p>
        <p class="price">Rp ${b.harga}</p>
        <button onclick="hapus(${index})">Hapus</button>
      </div>
    `;
  });
}

// TAMBAH BUKU (TANPA INPUT FOTO, DEFAULT GAMBAR)
function tambahBuku(){
  let j = document.getElementById("judul").value;
  let p = document.getElementById("penulis").value;
  let h = document.getElementById("harga").value;

  if(j=="" || p=="" || h==""){
    alert("Isi semua data!");
    return;
  }

  buku.push({
    judul:j,
    penulis:p,
    harga:h,
    foto:"img/default.jpg" // otomatis pakai gambar default
  });

  tampilBuku();
  isiDropdown();

  // reset input
  document.getElementById("judul").value = "";
  document.getElementById("penulis").value = "";
  document.getElementById("harga").value = "";
}

// HAPUS BUKU
function hapus(i){
  buku.splice(i,1);
  tampilBuku();
  isiDropdown();
}

// DROPDOWN BUKU
function isiDropdown(){
  let select = document.getElementById("buku");
  select.innerHTML = '<option value="">-- Pilih Buku --</option>';

  buku.forEach((b, index) => {
    select.innerHTML += `<option value="${index}">${b.judul}</option>`;
  });
}

// VALIDASI FORM
document.getElementById("formBeli").addEventListener("submit", function(e){
  e.preventDefault();

  let valid = true;

  let nama = document.getElementById("nama");
  let email = document.getElementById("email");
  let hp = document.getElementById("hp");

  let errNama = document.getElementById("errNama");
  let errEmail = document.getElementById("errEmail");
  let errHp = document.getElementById("errHp");

  if(nama.value==""){
    errNama.innerText="Nama wajib diisi";
    valid=false;
  } else errNama.innerText="";

  if(!email.value.includes("@")){
    errEmail.innerText="Email tidak valid";
    valid=false;
  } else errEmail.innerText="";

  if(hp.value<=0){
    errHp.innerText="No HP tidak valid";
    valid=false;
  } else errHp.innerText="";

  if(valid){
    alert("Pesanan berhasil!");
  }
});

// JALANKAN AWAL
tampilBuku();
isiDropdown();

function lihatPassword(){
  let pass = document.getElementById("password");

  if(pass.type === "password"){
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}