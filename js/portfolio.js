// ******************** typing animation***********************
// var typed = new Typed(".typing", {
//     strings: ["", "web Designer", "Frontend Developer", "Software Developer", "Backend Specialist"],
//     typeSpeed: 150,
//     BackSpeed: 60,
//     loop: true
// })
// ******************** typing animation***********************
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = (element.getAttribute("href")).split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalSection; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".contact-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".about-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".portfolio-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})


document.querySelector(".contact-me1").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".about-me1").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".portfolio-me1").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
}
for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open")
}

document.querySelector(".contact-me2").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".about-me2").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".portfolio-me2").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})


document.querySelector(".contact-me3").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".about-me3").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".portfolio-me3").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".contact-me4").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".about-me4").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

document.querySelector(".portfolio-me4").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSections(sectionIndex);
    
})

 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }


 var modal1 = document.getElementById("myModal1");

 var img1 = document.getElementById("myImg1");
 var modalImg1 = document.getElementById("img02");
 var captionText1 = document.getElementById("caption1");
 img1.onclick = function(){
   modal1.style.display = "block";
   modalImg1.src = this.src;
   captionText1.innerHTML = this.alt;
 }

 // Get the <span> element that closes the modal
 var span1 = document.getElementsByClassName("close1")[0];

 // When the user clicks on <span> (x), close the modal
 span1.onclick = function() { 
   modal1.style.display = "none";
 }

 var modal2 = document.getElementById("myModal2");

 var img2 = document.getElementById("myImg2");
 var modalImg2 = document.getElementById("img03");
 var captionText2 = document.getElementById("caption2");
 img2.onclick = function(){
   modal2.style.display = "block";
   modalImg2.src = this.src;
   captionText2.innerHTML = this.alt;
 }

 // Get the <span> element that closes the modal
 var span2 = document.getElementsByClassName("close2")[0];

 // When the user clicks on <span> (x), close the modal
 span2.onclick = function() { 
   modal2.style.display = "none";
 }

 var modal3 = document.getElementById("myModal3");

 var img3 = document.getElementById("myImg3");
 var modalImg3 = document.getElementById("img04");
 var captionText3 = document.getElementById("caption3");
 img3.onclick = function(){
   modal3.style.display = "block";
   modalImg3.src = this.src;
   captionText3.innerHTML = this.alt;
 }

 // Get the <span> element that closes the modal
 var span3 = document.getElementsByClassName("close3")[0];

 // When the user clicks on <span> (x), close the modal
 span3.onclick = function() { 
   modal3.style.display = "none";
 }


 var modal4 = document.getElementById("myModal4");

 var img4 = document.getElementById("myImg4");
 var modalImg4 = document.getElementById("img05");
 var captionText4 = document.getElementById("caption4");
 img4.onclick = function(){
   modal4.style.display = "block";
   modalImg4.src = this.src;
   captionText4.innerHTML = this.alt;
 }

 // Get the <span> element that closes the modal
 var span4 = document.getElementsByClassName("close4")[0];

 // When the user clicks on <span> (x), close the modal
 span4.onclick = function() { 
   modal4.style.display = "none";
 }