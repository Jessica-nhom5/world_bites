// Dữ liệu 6 thành viên với đúng tên và file avatar được yêu cầu
const membersData = [
    { name: "Đặng Hoài Triệu", avatar: "assets/trieu.jpg", role: "Thành viên" },
    { name: "Phan Nguyễn Như Phúc", avatar: "assets/nphuc.jpg", role: "Thành viên" },
    { name: "Dương Phạm Ánh Ngân", avatar: "assets/angan.jpg", role: "Thành viên" },
    { name: "Lê Huỳnh Khánh Ngọc", avatar: "assets/lngoc.jpg", role: "Thành viên" },
    { name: "Dương Bảo Ngọc", avatar: "assets/bngoc.jpg", role: "Thành viên" },
    { name: "Huỳnh Thanh Mai", avatar: "assets/tmai.jpg", role: "Thành viên" }
];

// Dữ liệu mẫu bài tập (Minh họa chuẩn Tin học 12)
const assignmentsData = [
    { title: "Bài 7: HTML và cấu trúc trang web", topic: "HTML Cơ bản", description: "Xây dựng khung trang web chuẩn bằng các thẻ HTML cơ bản.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm thực hiện", link: "#" },
    { title: "Bài 8: Định dạng trang web với CSS", topic: "CSS Styling", description: "Áp dụng thuộc tính màu sắc, font chữ và bố cục giao diện.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm thực hiện", link: "#" },
    { title: "Bài 9: Mô hình Client - Server", topic: "Mạng máy tính", description: "Tìm hiểu kiến trúc mạng và cách hoạt động của trang web trực tuyến.", status: "Đang thực hiện", statusClass: "status-doing", author: "Nhóm thực hiện", link: "#" }
];

// Dữ liệu mẫu bài thuyết trình
const presentationsData = [
    { title: "Chủ đề 1: Tổng quan về thiết kế web", topic: "UI/UX & HTML", description: "Slide báo cáo tổng quan về cấu trúc website học tập và định hướng phong cách Y2K.", status: "Đã trình bày", statusClass: "status-done", author: "PIXEL CLUB", link: "#" },
    { title: "Chủ đề 2: Xu hướng công nghệ số & AI", topic: "Công nghệ 12", description: "Thuyết trình về ứng dụng trí tuệ nhân tạo trong học tập và đời sống hiện đại.", status: "Đang chuẩn bị", statusClass: "status-doing", author: "PIXEL CLUB", link: "#" }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Chuyển đổi tab Navigation
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".content-section");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            navButtons.forEach(b => b.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // 2. Render Thành viên kèm xử lý fallback avatar nếu ảnh lỗi
    const membersContainer = document.getElementById("members-container");
    membersContainer.innerHTML = membersData.map(m => `
        <div class="member-card">
            <div class="avatar-wrapper">
                <img src="${m.avatar}" alt="${m.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150/ffef5a/14704f?text=PIXEL';">
            </div>
            <div class="member-name">${m.name}</div>
            <span class="member-role">${m.role}</span>
        </div>
    `).join("");

    // 3. Render Bài tập
    const assignmentsContainer = document.getElementById("assignments-container");
    function renderAssignments(filter = "") {
        const filtered = assignmentsData.filter(a => a.title.toLowerCase().includes(filter.toLowerCase()));
        assignmentsContainer.innerHTML = filtered.length ? filtered.map(a => `
            <div class="retro-card">
                <div>
                    <div class="card-header-info">
                        <span class="card-tag">${a.topic}</span>
                        <span class="card-status ${a.statusClass}">${a.status}</span>
                    </div>
                    <h3>${a.title}</h3>
                    <p>${a.description}</p>
                </div>
                <div class="card-footer-action">
                    <span class="author-tag">👤 ${a.author}</span>
                    <a href="${a.link}" target="_blank" class="retro-btn">Xem chi tiết</a>
                </div>
            </div>
        `).join("") : `<p style="grid-column: 1/-1; text-align: center; color: #666;">Không tìm thấy bài tập phù hợp.</p>`;
    }
    renderAssignments();

    // Tìm kiếm bài tập
    document.getElementById("search-assignment").addEventListener("input", (e) => {
        renderAssignments(e.target.value);
    });

    // 4. Render Thuyết trình
    const presentationsContainer = document.getElementById("presentations-container");
    function renderPresentations(filter = "") {
        const filtered = presentationsData.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()));
        presentationsContainer.innerHTML = filtered.length ? filtered.map(p => `
            <div class="retro-card">
                <div>
                    <div class="card-header-info">
                        <span class="card-tag">${p.topic}</span>
                        <span class="card-status ${p.statusClass}">${p.status}</span>
                    </div>
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                </div>
                <div class="card-footer-action">
                    <span class="author-tag">👤 ${p.author}</span>
                    <a href="${p.link}" target="_blank" class="retro-btn">Xem Slide</a>
                </div>
            </div>
        `).join("") : `<p style="grid-column: 1/-1; text-align: center; color: #666;">Không tìm thấy bài thuyết trình phù hợp.</p>`;
    }
    renderPresentations();

    // Tìm kiếm thuyết trình
    document.getElementById("search-presentation").addEventListener("input", (e) => {
        renderPresentations(e.target.value);
    });

    // 5. Cập nhật Thống kê tự động
    document.getElementById("stat-members").innerText = membersData.length;
    document.getElementById("stat-assignments").innerText = assignmentsData.length;
    document.getElementById("stat-presentations").innerText = presentationsData.length;
});
