# CBT's Fairy - Website Học Tập Tin Học 12

Website tổng hợp bài tập và thuyết trình của nhóm PIXEL CLUB được thiết kế theo phong cách **Y2K + Pixel Art + Cute Retro**.

## Cấu trúc thư mục
- `index.html`: Giao diện chính của website.
- `style.css`: Bảng định dạng phong cách Retro, bảng màu chuẩn (Ocean Blue, Banana, Avocado, Bell Pepper).
- `script.js`: Xử lý điều hướng tab, render dữ liệu thành viên, bài tập, slide thuyết trình và tìm kiếm.
- `assets/avatars/`: Thư mục chứa 6 ảnh avatar chính thức của thành viên.

## Hướng dẫn đưa lên GitHub Pages từng bước:

1. **Tạo Repository mới trên GitHub**:
   - Đăng nhập vào tài khoản GitHub của bạn.
   - Nhấn nút **New repository**, đặt tên (ví dụ: `pixel-club-web`).
   - Chọn chế độ **Public** và nhấn **Create repository**.

2. **Chuẩn bị file và thư mục**:
   - Tạo thư mục `assets/avatars/` và tải đúng 6 file ảnh avatar của thành viên vào bên trong.
   - Đưa các file `index.html`, `style.css`, `script.js`, và `README.md` vào thư mục gốc của repository.

3. **Đẩy code lên GitHub**:
   - Sử dụng giao diện tải file trực tiếp (Upload files) trên trang GitHub của bạn, hoặc dùng lệnh Git:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - PIXEL CLUB website"
     git branch -M main
     git remote add origin <URL_REPOSITORY_CỦA_BẠN>
     git push -u origin main
     ```

4. **Kích hoạt GitHub Pages**:
   - Trên repository của bạn trên GitHub, chọn tab **Settings** (Cài đặt).
   - Ở cột bên trái, tìm mục **Pages** (dưới phần Code and automation).
   - Tại phần **Branch**, chọn nhánh `main` (hoặc `master`) và thư mục giữ nguyên `/ (root)`, sau đó nhấn **Save**.
   - Đợi 1–2 phút, GitHub sẽ cung cấp cho bạn một đường link trực tuyến (`https://<username>.github.io/<repo-name>/`). Bạn có thể bấm vào để xem thành quả hoàn chỉnh!
