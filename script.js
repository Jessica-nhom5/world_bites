// Dữ liệu 6 thành viên chính thức kèm đường dẫn tiểu sử riêng
const membersData = [
    { name: "Đặng Hoài Triệu", avatar: "assets/trieu.jpg", role: "Thành viên", link: "trieu.html" },
    { name: "Phan Nguyễn Như Phúc", avatar: "assets/nphuc.jpg", role: "Thành viên", link: "phuc.html" },
    { name: "Dương Phạm Ánh Ngân", avatar: "assets/angan.jpg", role: "Thành viên", link: "angan.html" },
    { name: "Lê Huỳnh Khánh Ngọc", avatar: "assets/lngoc.jpg", role: "Thành viên", link: "lngoc.html" },
    { name: "Dương Bảo Ngọc", avatar: "assets/bngoc.jpg", role: "Thành viên", link: "bngoc.html" },
    { name: "Huỳnh Thanh Mai", avatar: "assets/tmai.jpg", role: "Thành viên", link: "tmai.html" }
];

// Dữ liệu bài tập liên kết các bài 3 đến 10
const assignmentsData = [
    { title: "Bài 3: Một số thiết bị mạng thông dụng", topic: "Mạng máy tính", description: "Tìm hiểu thiết bị mạng gia đình và kết nối di động.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai3.html" },
    { title: "Bài 4: Giao thức mạng và tên miền", topic: "Giao thức & DNS", description: "Tìm hiểu giao thức gọi điện thoại, địa chỉ IP, DNS và lệnh ping.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai4.html" },
    { title: "Bài 5: Thực hành chia sẻ tệp và thư mục", topic: "Thực hành mạng", description: "Chia sẻ thư mục quyền Read/Write giữa các máy tính.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai5.html" },
    { title: "Bài 6: Giao tiếp trong không gian mạng", topic: "Đạo đức & Xã hội", description: "Trải nghiệm giao tiếp mạng và soạn thảo email ứng xử.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai6.html" },
    { title: "Bài 7: Thực hành tạo trang web đầu tiên", topic: "HTML Cơ bản", description: "Xây dựng trang web đầu tiên với thẻ img và văn bản.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai7.html" },
    { title: "Bài 8: Định dạng văn bản trên trang web", topic: "HTML & CSS", description: "Thực hành các thẻ định dạng văn bản strong, em và màu sắc chữ.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai8.html" },
    { title: "Bài 9: Tạo bảng trong trang web", topic: "HTML & CSS Table", description: "Thực hành sử dụng thuộc tính style tạo viền và gộp ô cho bảng.", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai9.html" },
    { title: "Bài 10: Liên kết trang web", topic: "HTML Links", description: "Thực hành tạo liên kết nội bộ và liên kết ngoài (Facebook).", status: "Hoàn thành", statusClass: "status-done", author: "Nhóm 5", link: "Bai10.html" }
];

const presentationsData = [
    { title: "Chủ đề 1: ...", topic: "?", description: "...", status: "Chưa chuẩn bị", statusClass: "status-doing", author: "6 bà tiên", link: "#" },
    { title: "Chủ đề 2: ...", topic: "?", description: "...", status: "Chưa chuẩn bị", statusClass: "status-doing", author: "6 bà tiên", link: "#" }
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
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });

    // 2. Render Thành viên (có nút Xem tiểu sử riêng)
    const membersContainer = document.getElementById("members-container");
    if (membersContainer) {
        membersContainer.innerHTML = membersData.map(m => `
            <div class="member-card">
                <div class="avatar-wrapper">
                    <img src="${m.avatar}" alt="${m.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/150/ffef5a/14704f?text=PIXEL';">
                </div>
                <div class="member-name">${m.name}</div>
                <span class="member-role">${m.role}</span>
                <div style="margin-top: 15px;">
                    <a href="${m.link}" class="retro-btn" style="display: inline-block; font-size: 0.82rem; padding: 5px 14px;">📖 Xem tiểu sử</a>
                </div>
            </div>
        `).join("");
    }

    // 3. Render Bài tập
    const assignmentsContainer = document.getElementById("assignments-container");
    function renderAssignments(filter = "") {
        if (!assignmentsContainer) return;
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
                    <a href="${a.link}" class="retro-btn">Xem chi tiết</a>
                </div>
            </div>
        `).join("") : `<p style="grid-column: 1/-1; text-align: center; color: #666;">Không tìm thấy bài tập phù hợp.</p>`;
    }
    renderAssignments();

    const searchAssignmentInput = document.getElementById("search-assignment");
    if (searchAssignmentInput) {
        searchAssignmentInput.addEventListener("input", (e) => {
            renderAssignments(e.target.value);
        });
    }

    // 4. Render Thuyết trình
    const presentationsContainer = document.getElementById("presentations-container");
    function renderPresentations(filter = "") {
        if (!presentationsContainer) return;
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
                    <a href="${p.link}" class="retro-btn">Xem Slide</a>
                </div>
            </div>
        `).join("") : `<p style="grid-column: 1/-1; text-align: center; color: #666;">Không tìm thấy bài thuyết trình phù hợp.</p>`;
    }
    renderPresentations();

    const searchPresentationInput = document.getElementById("search-presentation");
    if (searchPresentationInput) {
        searchPresentationInput.addEventListener("input", (e) => {
            renderPresentations(e.target.value);
        });
    }

    // 5. Cập nhật Thống kê tự động
    const statMembers = document.getElementById("stat-members");
    const statAssignments = document.getElementById("stat-assignments");
    const statPresentations = document.getElementById("stat-presentations");

    if (statMembers) statMembers.innerText = membersData.length;
    if (statAssignments) statAssignments.innerText = assignmentsData.length;
    if (statPresentations) statPresentations.innerText = presentationsData.length;
});
