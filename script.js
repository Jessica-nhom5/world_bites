// Dữ liệu 6 thành viên chính thức kèm đường dẫn tiểu sử riêng
const membersData = [
    { name: "Đặng Hoài Triệu", avatar: "assets/trieu.jpg", role: "Tiên cầm đầu", link: "htriu.html" },
    { name: "Phan Nguyễn Như Phúc", avatar: "assets/nphuc.jpg", role: "Tiên vai gãy", link: "phuc.html" },
    { name: "Dương Phạm Ánh Ngân", avatar: "assets/angan.jpg", role: "Tiên điên", link: "angan.html" },
    { name: "Lê Huỳnh Khánh Ngọc", avatar: "assets/lngoc.jpg", role: "Út Khỉ", link: "kngoc.html" },
    { name: "Dương Bảo Ngọc", avatar: "assets/bngoc.jpg", role: "Thành viên", link: "bngoc.html" },
    { name: "Huỳnh Thanh Mai", avatar: "assets/tmai.jpg", role: "Tiên thú", link: "tmai.html" }
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
    // --- BỔ SUNG: Hiệu ứng chuột lấp lánh & Âm thanh click pixel ---
    const symbols = ["⭐", "✨", "💖", "💫"];
    document.addEventListener("mousemove", (e) => {
        if (Math.random() < 0.15) {
            const span = document.createElement("span");
            span.className = "cursor-particle";
            span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            span.style.left = e.pageX + "px";
            span.style.top = e.pageY + "px";
            span.style.position = "absolute";
            span.style.fontSize = "14px";
            span.style.pointerEvents = "none";
            span.style.zIndex = "9999";
            span.style.transition = "transform 0.8s ease, opacity 0.8s ease";
            document.body.appendChild(span);

            setTimeout(() => {
                span.style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${-50 - Math.random() * 30}px) scale(0.5)`;
                span.style.opacity = "0";
            }, 20);

            setTimeout(() => span.remove(), 800);
        }
    });

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    function playClickSound() {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.08);
        
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    }

    document.querySelectorAll("button, a").forEach(el => {
        el.addEventListener("click", playClickSound);
    });
    // --- HẾT PHẦN BỔ SUNG HIỆU ỨNG ---

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

    // --- BỔ SUNG: 6. Tính năng Sổ lưu bút (Guestbook) ---
    const guestbookForm = document.getElementById("guestbook-form");
    const messagesList = document.getElementById("messages-list");

    let savedMessages = JSON.parse(localStorage.getItem("pixel_guestbook")) || [
        { name: "Cô giáo Tin Học", text: "Trang web nhóm Sáu bà tiên sáng tạo và rất đẹp mắt!", time: "Hôm nay" }
    ];

    function renderMessages() {
        if (!messagesList) return;
        messagesList.innerHTML = savedMessages.map(m => `
            <div style="background: #fff; border: 2px solid #14704f; padding: 10px; border-radius: 6px; box-shadow: 2px 2px 0px rgba(20,112,79,0.2);">
                <strong style="color: #00a0b5;">👤 ${m.name}</strong> <span style="font-size: 0.75rem; color: #888; float: right;">${m.time}</span>
                <p style="margin-top: 5px; font-size: 0.95rem; color: #333;">${m.text}</p>
            </div>
        `).join("");
    }
    renderMessages();

    if (guestbookForm) {
        guestbookForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("guest-name").value.trim();
            const text = document.getElementById("guest-msg").value.trim();
            if (name && text) {
                savedMessages.unshift({ name, text, time: new Date().toLocaleDateString("vi-VN") });
                localStorage.setItem("pixel_guestbook", JSON.stringify(savedMessages));
                renderMessages();
                guestbookForm.reset();
            }
        });
    }

// --- 7. Mini-game Catcher (Hứng Điểm 10) ---
    const basket = document.getElementById("player-basket");
    const item = document.getElementById("falling-item");
    const container = document.getElementById("game-canvas-container");
    const scoreDisplay = document.getElementById("game-score");
    const startBtn = document.getElementById("start-game-btn");

    let gameInterval;
    let score = 0;
    let basketX = 200;
    let itemX = 150, itemY = 0;
    let isPlaying = false;

    if (startBtn && container) {
        // Lắng nghe di chuyển chuột điều khiển giỏ
        container.addEventListener("mousemove", (e) => {
            if (!isPlaying) return;
            const rect = container.getBoundingClientRect();
            basketX = e.clientX - rect.left - 35;
            if (basketX < 0) basketX = 0;
            if (basketX > container.clientWidth - 70) basketX = container.clientWidth - 70;
            basket.style.left = basketX + "px";
        });

        startBtn.addEventListener("click", () => {
            if (isPlaying) return;
            isPlaying = true;
            score = 0;
            scoreDisplay.innerText = score;
            startBtn.style.display = "none";
            resetItem();

            // Xóa interval cũ nếu có để tránh chạy chồng chéo
            if (gameInterval) clearInterval(gameInterval);

            gameInterval = setInterval(() => {
                if (!isPlaying) return;
                itemY += 4; // Tốc độ rơi
                item.style.top = itemY + "px";
                item.style.left = itemX + "px";

                // Vị trí đáy của giỏ (cách đáy khung 35px)
                const basketTop = container.clientHeight - 35;

                // Khi vật phẩm rơi tới tầm của giỏ
                if (itemY >= basketTop && itemY <= basketTop + 15) {
                    // Kiểm tra xem có bắt trúng giỏ không (giỏ rộng 70px)
                    if (itemX + 15 >= basketX && itemX <= basketX + 70) {
                        score += 10;
                        scoreDisplay.innerText = score;
                        resetItem();
                    }
                }

                // Nếu rơi chạm đáy khung mà không bắt được -> tạo vật phẩm mới
                if (itemY >= container.clientHeight - 20) {
                    resetItem();
                }
            }, 25);
        });
    }

    function resetItem() {
        itemY = 0;
        if (container) {
            itemX = Math.random() * (container.clientWidth - 40);
        }
        item.style.top = itemY + "px";
        item.style.left = itemX + "px";
        item.innerText = Math.random() > 0.3 ? "⭐" : "🍏";
    }

    function resetItem() {
        itemY = 0;
        itemX = Math.random() * (container.clientWidth - 40);
        item.innerText = Math.random() > 0.3 ? "⭐" : "🍏";
    }

    // 5. Cập nhật Thống kê tự động
    const statMembers = document.getElementById("stat-members");
    const statAssignments = document.getElementById("stat-assignments");
    const statPresentations = document.getElementById("stat-presentations");

    if (statMembers) statMembers.innerText = membersData.length;
    if (statAssignments) statAssignments.innerText = assignmentsData.length;
    if (statPresentations) statPresentations.innerText = presentationsData.length;
});
