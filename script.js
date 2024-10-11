/* navbar */
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/* fitur search */
// Daftar kata kunci dengan URL tujuan yang terkait
let availableKeywords = [
    { keyword: 'Olahraga', url: 'panduan.html' },
    { keyword: 'Latihan Kardio', url: 'panduan.html' },
    { keyword: 'Latihan kekuatan', url: 'panduan.html' },
    { keyword: 'latihan fleksibilitas', url: 'panduan.html' },


    { keyword: 'Resep', url: 'resep.html' },
    { keyword: 'Smoothie Buah', url: 'resep.html' },
    { keyword: 'Ayam panggang', url: 'resep.html' },
    { keyword: 'Salad segar', url: 'resep.html' },

    { keyword: 'Rekomendasi', url: 'rekomendasi.htlml' },
    { keyword: 'Vitamin', url: 'rekomendasi.htlml' },
    { keyword: 'Protein', url: 'rekomendasi.htlml' },
    { keyword: 'Latihan', url: 'rekomendasi.htlml' },

    { keyword: 'Tips Nutrisi', url: 'tips.html' },
    { keyword: 'Panduan makanan sehat', url: 'tips.html' },
    { keyword: 'makanan yang harus dihindari', url: 'tips.html' },
    { keyword: 'Tentang kami', url: 'tips.html' },
    
];

const searchIcon = document.getElementById("search-icon");
const searchBox = document.querySelector(".search-box");
const inputBox = document.getElementById("input-box");
const resultsBox = document.querySelector(".result-box");
const searchButton = document.querySelector("button");

// Variabel untuk menyimpan URL yang dipilih
let selectedUrl = '';

// Ketika ikon pencarian diklik
searchIcon.addEventListener("click", function(e) {
    e.preventDefault();
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "block";
        inputBox.focus();
    } else {
        searchBox.style.display = "none";
    }
});

// Fungsi pencarian
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((item)=>{
            return item.keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

// Fungsi untuk menampilkan hasil pencarian
function display(result){
    const content = result.map((item)=>{
        return "<li onclick=selectInput(this) data-url='" + item.url + "'>" + item.keyword + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

// Fungsi untuk memilih hasil pencarian dan menyimpan URL
function selectInput(list){
    inputBox.value = list.innerHTML;
    selectedUrl = list.getAttribute("data-url");
    resultsBox.innerHTML = '';
}

// Fungsi untuk mengarahkan ke URL saat tombol "Search" diklik
searchButton.addEventListener("click", function() {
    if (selectedUrl) {
        window.location.href = selectedUrl; 
    } else {
        alert('Silakan pilih kata kunci dari daftar terlebih dahulu.');
    }
});

// end of search

// button hover home
let buttons = document.querySelectorAll('.btn-custom');
    buttons.forEach(button => {
    let text = button.textContent;
    button.innerHTML = ''; 

    for (let char of text) {
        let span = document.createElement('span'); 
        span.textContent = char === ' ' ? '\u00A0' : char;
        button.appendChild(span); 
    }
    let spans = button.querySelectorAll('span');

    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover');
            }, index * 50);
        });
    });

    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover'); 
            }, index * 50);
        });
    });
});


/* Array untuk semua panduan */
// array yang berisi card panduan
const guides = [
	{
		title: "Latihan Kardio",
		image:
			"https://olimpsport.com/media/mageplaza/blog/post/image//w/y/wyprobuj-5-najlepszych-cwiczen-cardio-na-silowni_5.jpg",
		description:
			"Panduan latihan kardio untuk membakar lemak dan meningkatkan kesehatan jantung.",
	},
	{
		title: "Latihan Kekuatan",
		image:
			"https://assets.unileversolutions.com/v1/117638821.jpg",
		description:
			"Latihan kekuatan membantu membangun otot dan meningkatkan kekuatan tubuh secara keseluruhan.",
	},
	{
		title: "Latihan Fleksibilitas",
		image:
			"https://willfitness.id/will-media/2023/10/LELA-7-freepik-Copy.jpg",
		description:
			"Panduan untuk meningkatkan fleksibilitas dengan latihan peregangan yang mudah dilakukan.",
	},
];

const recommendations = [
	{
		title: "Vitamin",
		image:
			"https://img.freepik.com/free-vector/vitamin-complex-package_23-2148488954.jpg?ga=GA1.1.1322720273.1722496061&semt=ais_hybrid",
		description:
			"Resep salad sehat dengan kombinasi sayuran segar dan dressing rendah kalori.",
	},
	{
		title: "Protein",
		image:
			"https://as1.ftcdn.net/v2/jpg/02/13/71/36/1000_F_213713637_G1Jp5JkgLN13xZZVxXR8YQC34PXKnI1t.jpg",
		description: "Nikmati smoothie penuh nutrisi untuk sarapan sehat Anda.",
	},
	{
		title: "Latihan",
		image:
			"https://img.freepik.com/free-photo/athlete-stretching-outdoors-before-jogging_23-2148531052.jpg?ga=GA1.1.1322720273.1722496061&semt=ais_hybrid",
		description: "Resep ayam panggang rendah lemak yang kaya protein.",
	},
];

const recipes = [
	{
		title: "Salad Segar",
		image:
			"https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?ga=GA1.1.1322720273.1722496061&semt=ais_hybrid",
		description:
			"Resep salad sehat dengan kombinasi sayuran segar dan dressing rendah kalori.",
	},
	{
		title: "Smoothie Buah",
		image:
			"https://t3.ftcdn.net/jpg/02/59/32/30/240_F_259323042_XHov0Lty6V40zHHqHiNwNCjVGQ5wWoqu.jpg",
		description: "Nikmati smoothie penuh nutrisi untuk sarapan sehat Anda.",
	},
	{
		title: "Ayam Panggang",
		image:
			"https://img.freepik.com/free-photo/grilled-chicken_144627-9151.jpg?ga=GA1.1.1322720273.1722496061&semt=ais_hybrid",
		description: "Resep ayam panggang rendah lemak yang kaya protein.",
	},
];

const tips = [
	{
		title: "Panduan Makanan Seimbang",
		description:
			"Pelajari cara menjaga keseimbangan gizi dalam makanan harian Anda.",
	},
	{
		title: "Makanan yang Harus Dihindari",
		description:
			"Ketahui jenis makanan yang harus Anda hindari untuk menjaga kesehatan tubuh.",
	},
];


const panduanContainer = document.querySelector(".panduan-olahraga");
const rekomendasiContainer = document.querySelector(".rekomendasi");
const resepContainer = document.querySelector(".resep");
const tipsContainer = document.querySelector(".tips");

guides.forEach((guide) => {
	const cardHTML = `
        <div class="card-container">
            <img src="${guide.image}" alt="${guide.title}" />
            <h3>${guide.title}</h3>
            <p>${guide.description}</p>
            <a href="panduan.html">
			 <button class="learn-more" >
                Pelajari Lebih Lanjut
            </button>
			</a>
        </div>
    `;
	panduanContainer.innerHTML += cardHTML;
});

recommendations.forEach((reccomendation) => {
	const cardHTML = `
        <div class="card-container">
            <img src="${reccomendation.image}" alt="${reccomendation.title}" />
            <h3>${reccomendation.title}</h3>
            <p>${reccomendation.description}</p>
             <a href="rekomendasi.html">
			 <button class="learn-more" >
                Temukan informasi lebih lanjut
            </button>
			</a>
        </div>
    `;
	rekomendasiContainer.innerHTML += cardHTML;
});

recipes.forEach((resep) => {
	const cardHTML = `
        <div class="card-container">
            <img src="${resep.image}" alt="${resep.title}" />
            <h3>${resep.title}</h3>
            <p>${resep.description}</p>
            <a href="resep.html">
			 <button class="learn-more" >
				Cek Resep
            </button>
			</a>
        </div>
    `;
	resepContainer.innerHTML += cardHTML;
});

tips.forEach((tip) => {
	const cardHTML = `
        <div class="card-tips-container">
            <h3>${tip.title}</h3>
            <p>${tip.description}</p>
             <a href="tips.html">
			 <button class="learn-more" >
                Baca Selengkapnya
            </button>
			</a>
        </div>
    `;
	tipsContainer.innerHTML += cardHTML;
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function showSlides(n) {
	let slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "flex";
}

function toggleMenu() {
	const navLinks = document.getElementById("nav-links");
	navLinks.classList.toggle("active");
}


// carousel 
/* hover pada menu home*/
    document.addEventListener("DOMContentLoaded", function() {
        let slideIndex = 0;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (n >= slides.length) {
                slideIndex = 0;
            }
            if (n < 0) {
                slideIndex = slides.length - 1;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex].style.display = "flex";
        }

        // Tambahkan interval otomatis untuk berpindah slide setiap 5 detik
        setInterval(function() {
            plusSlides(1);
        }, 5000); // 5000ms = 5 detik
    });
/* END hover menu home*/


document.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

