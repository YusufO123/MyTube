// Video Yükleme ve Görüntüleme
document.getElementById("uploadButton").addEventListener("click", function () {
    const videoUpload = document.getElementById("videoUpload");
    const videoGrid = document.getElementById("videoGrid");

    // Eğer bir dosya seçilmediyse uyarı ver
    if (!videoUpload.files.length) {
        alert("Lütfen bir video seçin!");
        return;
    }

    // Yüklenen dosyayı al
    const file = videoUpload.files[0];
    const videoUrl = URL.createObjectURL(file);

    // Yeni bir video kartı oluştur
    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");

    videoCard.innerHTML = `
        <video class="video-thumbnail" controls>
            <source src="${videoUrl}" type="${file.type}">
            Tarayıcınız video oynatmayı desteklemiyor.
        </video>
        <h3>${file.name}</h3>
    `;

    // Video kartını grid'e ekle
    videoGrid.appendChild(videoCard);

    // Yükleme tamamlandıktan sonra dosya alanını temizle
    videoUpload.value = "";
});

