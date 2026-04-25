function scrollToContact() {
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
 }

 document.getElementById("contactForm").addEventListener("submit", function(event){event.preventDefault();
    document.getElementById("message").innerText = "Pesan berhasil di kirim. Terimakasih!";
    this.reset();
 });
