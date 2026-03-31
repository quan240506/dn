const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Cho phép dùng file HTML
app.use(express.static(__dirname));

// API login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123456") {
    res.json({ message: "Đăng nhập thành công" });
  } else {
    res.json({ message: "Sai tài khoản hoặc mật khẩu" });
  }
});

// Quan trọng: dùng PORT của Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running...");
});
