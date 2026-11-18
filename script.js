/* =========================================================
   MYSTERY DROP // 19.11
   ADVANCED JAVASCRIPT ENGINE
   ========================================================= */

/* =========================================================
   01. RECIPIENT DATABASE
   ========================================================= */

const RECIPIENTS = {

    "KOD-7X4-TH9": {
        name: "Nguyễn Trần Phước Thiện",
        role: "THE STRATEGIST",
        rarity: "EPIC",
        level: "07",
        skill: "TACTICS • LOGIC • FOCUS",
        wish: "Mong mày luôn giữ được cái đầu lạnh, sự tập trung và cái chất riêng của mình.",
        message: `
            Phước Thiện,

            Có những người không cần phải nói quá nhiều nhưng vẫn khiến người khác
            nhận ra rằng họ đang có một màu sắc rất riêng. Và tao nghĩ mày là một
            trong số đó.

            Tuổi học sinh có thể sẽ còn rất nhiều thứ thay đổi. Hôm nay có thể
            thân với người này, ngày mai có thể quen thêm một người khác. Có những
            chuyện tưởng như rất quan trọng nhưng vài năm sau nhìn lại lại chẳng
            còn đáng nhớ.

            Nhưng những khoảnh khắc mình từng có với nhau thì vẫn sẽ trở thành
            một phần của quãng thời gian này.

            Chúc mày học tốt, chơi vui, làm được những thứ mày muốn và quan trọng
            nhất là đừng đánh mất sự tự tin của mình.

            Nếu sau này mỗi đứa đi một hướng, hy vọng khi nhìn lại cái "19.11"
            này, mày vẫn nhớ rằng đã từng có một nhóm người cùng nhau tạo nên
            một khoảng thời gian rất đáng nhớ.

            Đây không phải món quà lớn.

            Nhưng nó là một kỷ niệm được làm riêng cho mày.
        `
    },

    "KOD-3M8-DT2": {
        name: "Nguyễn Hoàng Đạt",
        role: "THE EXPLORER",
        rarity: "RARE",
        level: "07",
        skill: "ENERGY • CURIOSITY • ADAPT",
        wish: "Chúc mày luôn giữ được sự tò mò và năng lượng để khám phá những điều mới.",
        message: `
            Hoàng Đạt,

            Có lẽ điều thú vị nhất của tuổi học sinh là mình vẫn còn rất nhiều
            thứ để thử.

            Một môn học mới. Một trò chơi mới. Một người bạn mới. Một sở thích
            mới. Một ý tưởng mà trước đây mình chưa từng nghĩ tới.

            Và tao mong mày sẽ luôn giữ được sự tò mò đó.

            Đừng ngại thử những thứ mới chỉ vì sợ mình không giỏi. Không ai bắt
            đầu một thứ gì đó mà đã giỏi ngay từ đầu cả.

            Có thể sẽ có những lần thất bại, có những lần làm sai, có những
            chuyện khiến mình hơi nản.

            Nhưng chính những chuyện đó mới tạo nên phiên bản tốt hơn của mình
            sau này.

            Chúc mày luôn vui, học hành tiến bộ, có thật nhiều kỷ niệm đẹp và
            quan trọng nhất là mỗi ngày đều có ít nhất một chuyện khiến mày
            cảm thấy hôm nay đáng nhớ.
        `
    },

    "KOD-9Q2-TN6": {
        name: "Nguyễn Ngô Đức Tín",
        role: "THE ANALYST",
        rarity: "EPIC",
        level: "07",
        skill: "LOGIC • ANALYSIS • PRECISION",
        wish: "Chúc mày càng ngày càng thông minh, bản lĩnh và luôn biết mình muốn gì.",
        message: `
            Đức Tín,

            Có những người có khả năng nhìn một vấn đề theo cách rất khác.
            Có thể người khác nhìn thấy một đống thứ rối tung, còn họ lại bắt
            đầu tìm cách chia nhỏ nó ra.

            Tao mong mày sẽ luôn giữ được khả năng đó.

            Trong học tập cũng như trong cuộc sống, không phải lúc nào mọi thứ
            cũng có sẵn đáp án. Có những bài toán phải suy nghĩ rất lâu.
            Có những quyết định phải cân nhắc rất nhiều.

            Nhưng chỉ cần đủ kiên nhẫn, cuối cùng mình sẽ tìm được hướng đi.

            Chúc mày không chỉ học giỏi hơn mà còn trưởng thành hơn qua từng
            năm. Có mục tiêu thì cứ tiến tới. Có thất bại thì sửa. Có thành
            công thì đừng quên những người đã đồng hành với mình.

            Và nếu một ngày nào đó mày quên mất hôm nay là ngày gì...

            thì ít nhất cái website này vẫn còn bằng chứng.
        `
    },

    "KOD-5R7-KH4": {
        name: "Lê Anh Khôi",
        role: "THE VANGUARD",
        rarity: "LEGENDARY",
        level: "07",
        skill: "COURAGE • ACTION • IMPACT",
        wish: "Chúc mày luôn mạnh mẽ, tự tin và dám làm những điều mình thật sự muốn.",
        message: `
            Anh Khôi,

            Người ta thường nói rằng chỉ cần có tài năng là đủ.

            Nhưng thật ra không phải.

            Có những người rất giỏi nhưng không dám thử.
            Có những người biết mình muốn gì nhưng lại sợ bắt đầu.
            Và cũng có những người chẳng cần hoàn hảo nhưng vẫn cứ bước tiếp.

            Tao mong mày sẽ là người thứ ba.

            Không cần lúc nào cũng phải đứng đầu.
            Không cần lúc nào cũng phải hoàn hảo.
            Chỉ cần khi có một thứ thật sự muốn làm, mày đủ can đảm để bắt đầu.

            Sau này chắc chắn sẽ có rất nhiều thứ thay đổi.

            Nhưng nếu vẫn giữ được sự tự tin và tinh thần tiến về phía trước,
            tao tin mày sẽ còn đi được rất xa.

            Chúc mày có một tuổi học sinh thật đáng nhớ.
        `
    },

    "KOD-8P3-MN1": {
        name: "Lê Gia Minh",
        role: "THE ARCHITECT",
        rarity: "EPIC",
        level: "07",
        skill: "CREATIVITY • BUILD • VISION",
        wish: "Chúc mày luôn có những ý tưởng hay và đủ kiên trì để biến chúng thành sự thật.",
        message: `
            Gia Minh,

            Ý tưởng chỉ thật sự có giá trị khi mình biến nó thành một thứ tồn tại
            ngoài đầu mình.

            Có thể là một bài làm.
            Một dự án.
            Một trò chơi.
            Một sản phẩm.
            Hay đơn giản chỉ là một điều gì đó khiến mình tự hào.

            Tao mong mày luôn giữ được khả năng nghĩ ra những điều mới và quan
            trọng hơn là đủ kiên trì để hoàn thành chúng.

            Vì đôi khi thứ khó nhất không phải là bắt đầu.

            Mà là đi đến cuối cùng.

            Chúc mày học tốt, vui vẻ, có nhiều trải nghiệm mới và sau này nhìn
            lại những gì mình từng làm có thể mỉm cười:

            "Ừ, hồi đó mình cũng đã từng làm được những thứ khá hay."
        `
    },

    "KOD-4V9-QC7": {
        name: "Anh Quốc",
        role: "THE MAVERICK",
        rarity: "RARE",
        level: "07",
        skill: "STYLE • HUMOR • CHAOS",
        wish: "Chúc mày luôn giữ được sự vui vẻ và cái chất rất riêng của mình.",
        message: `
            Anh Quốc,

            Nếu cuộc sống là một game thì chắc chắn không phải nhân vật nào cũng
            có cùng một bộ kỹ năng.

            Có người thiên về học tập.
            Có người thiên về thể thao.
            Có người thiên về sáng tạo.
            Có người chuyên tạo ra những tình huống mà chẳng ai đoán trước được.

            Và điều đó mới làm một tập thể trở nên thú vị.

            Tao mong mày cứ tiếp tục là chính mình.

            Vui thì cứ vui.
            Có ý tưởng thì cứ thử.
            Sai thì sửa.
            Và nếu có một ngày mọi thứ trở nên quá nghiêm túc...

            thì nhớ rằng cuộc đời vẫn còn rất nhiều chuyện để cười.

            Chúc mày có thật nhiều kỷ niệm đáng nhớ.
        `
    },

    "KOD-6N2-BA8": {
        name: "Đoàn Trường Bảo",
        role: "THE GUARDIAN",
        rarity: "EPIC",
        level: "07",
        skill: "LOYALTY • TRUST • TEAMWORK",
        wish: "Chúc mày luôn có những người bạn tốt và trở thành một người mà người khác có thể tin tưởng.",
        message: `
            Trường Bảo,

            Có một thứ rất khó tìm trong cuộc sống:

            một người mà mình có thể tin tưởng.

            Vì vậy tao mong sau này mày sẽ luôn gặp được những người bạn tốt,
            những người sẵn sàng giúp đỡ nhau khi cần.

            Và bản thân mày cũng sẽ trở thành một người như vậy.

            Có thể bây giờ chúng ta chưa nghĩ nhiều về chuyện sau này.
            Nhưng thời gian trôi nhanh hơn mình tưởng.

            Một ngày nào đó những lớp học này sẽ trở thành ký ức.

            Những buổi học, những lần nói chuyện, những trò đùa tưởng như
            bình thường hôm nay lại có thể là những thứ mình nhớ nhất.

            Chúc mày học tốt, sống vui và có một thanh xuân thật đẹp.
        `
    },

    "KOD-1T8-KH5": {
        name: "Khoa",
        role: "THE UNKNOWN",
        rarity: "RARE",
        level: "07",
        skill: "MYSTERY • ENERGY • POTENTIAL",
        wish: "Chúc Khoa luôn vui vẻ, tự tin và có thật nhiều điều bất ngờ thú vị phía trước.",
        message: `
            Khoa,

            Hồ sơ này có một vấn đề rất lớn.

            Hệ thống không có đủ dữ liệu để mô tả chính xác nhân vật.

            Nhưng có lẽ điều đó cũng không hẳn là xấu.

            Bởi vì đôi khi một người không cần phải được định nghĩa bằng vài
            dòng dữ liệu.

            Cứ tiếp tục trải nghiệm.
            Cứ thử những điều mới.
            Cứ tạo ra những câu chuyện của riêng mình.

            Rồi vài năm nữa, chính những trải nghiệm đó sẽ trở thành hồ sơ
            thật sự của mày.

            Chúc mày luôn vui vẻ, học tốt và có thật nhiều kỷ niệm đáng nhớ.

            SYSTEM NOTE:

            PROFILE STATUS = STILL DEVELOPING...
        `
    },

    "KOD-7L3-PH6": {
        name: "Xuân Phong",
        role: "THE MOMENTUM",
        rarity: "EPIC",
        level: "07",
        skill: "MOMENTUM • DRIVE • PROGRESS",
        wish: "Chúc mày luôn tiến về phía trước, dù nhanh hay chậm.",
        message: `
            Xuân Phong,

            Không phải lúc nào tiến bộ cũng có nghĩa là phải nhanh hơn người khác.

            Đôi khi chỉ cần hôm nay tốt hơn hôm qua một chút là đủ.

            Một bài học hiểu thêm.
            Một kỹ năng làm tốt hơn.
            Một lần dám thử điều mình từng sợ.

            Tất cả đều là tiến bộ.

            Tao mong mày đừng quá áp lực với việc phải trở thành một phiên bản
            hoàn hảo.

            Cứ tiến lên từng bước.

            Vì nếu mỗi ngày tiến thêm một chút, vài năm sau nhìn lại,
            mày sẽ bất ngờ vì mình đã đi xa đến đâu.
        `
    },

    "KOD-2X9-DP4": {
        name: "MYSTERY RECIPIENT 01",
        role: "THE UNKNOWN PLAYER",
        rarity: "RARE",
        level: "07",
        skill: "POTENTIAL • DISCOVERY • FUTURE",
        wish: "Chúc mày có một năm thật nhiều niềm vui và những bất ngờ đáng nhớ.",
        message: `
            Có một điều khá đặc biệt:

            Hệ thống chưa xác định được danh tính chính xác của người sở hữu
            mã này.

            Nhưng nếu mày đang đọc đến đây thì có nghĩa là:

            CODE VERIFIED.

            Và món quà này là dành cho mày.

            Chúc mày luôn vui vẻ, học tốt, có những người bạn thật tốt và có
            thật nhiều kỷ niệm đẹp trong những năm tháng đi học.

            Đừng quên tận hưởng những ngày bình thường.

            Vì sau này chính những ngày bình thường đó có thể lại là thứ
            mình nhớ nhất.
        `
    },

    "KOD-5M1-DP8": {
        name: "MYSTERY RECIPIENT 02",
        role: "THE UNKNOWN PLAYER",
        rarity: "EPIC",
        level: "07",
        skill: "POTENTIAL • DISCOVERY • FUTURE",
        wish: "Chúc mày luôn giữ được năng lượng và sự vui vẻ của tuổi học trò.",
        message: `
            PROFILE DETECTED.

            Danh tính: UNKNOWN.
            Tiềm năng: UNKNOWN.
            Tương lai: UNKNOWN.

            Nhưng có một thứ chắc chắn:

            Mày đang sở hữu một món quà được chuẩn bị riêng cho ngày hôm nay.

            Không cần phải trở thành người giỏi nhất.

            Chỉ cần trở thành phiên bản tốt hơn của chính mình.

            Chúc mày học tốt, chơi vui và có một khoảng thời gian học sinh
            thật đáng nhớ.
        `
    },

    "KOD-8Q6-DP2": {
        name: "MYSTERY RECIPIENT 03",
        role: "THE SECRET PLAYER",
        rarity: "LEGENDARY",
        level: "07",
        skill: "SECRET • CHAOS • POTENTIAL",
        wish: "Chúc mày có thật nhiều điều bất ngờ tuyệt vời trong thời gian tới.",
        message: `
            Nếu mày nhìn thấy trang này...

            thì xin chúc mừng.

            Mày đã vượt qua hệ thống bảo mật của MYSTERY DROP.

            Không có nhiều thông tin về nhân vật này.

            Không có thống kê đầy đủ.
            Không có hồ sơ hoàn chỉnh.
            Không có dữ liệu dự đoán tương lai.

            Chỉ có một lời chúc:

            Mong những năm tháng phía trước sẽ mang đến cho mày thật nhiều
            điều đáng nhớ.

            Và biết đâu vài năm nữa...

            chính mày sẽ trở thành một phần trong những câu chuyện mà cả nhóm
            nhắc lại.
        `
    },

    /* =====================================================
       TEACHER
       ===================================================== */

    "MYT-7C9-LEG": {
        name: "THẦY CƯỜNG",
        role: "TECH LEAD • TEACHER",
        rarity: "MYTHIC",
        level: "∞",
        skill: "TEACHING • LEADERSHIP • INSPIRATION",
        wish: "Cảm ơn thầy vì đã đồng hành, chỉ dẫn và truyền cảm hứng cho chúng em.",
        message: `
            THẦY CƯỜNG,

            Nếu học sinh là những người đang bắt đầu hành trình của mình,
            thì thầy chính là một trong những người đã giúp chúng em tìm được
            hướng đi.

            Có những bài học chúng em có thể quên.

            Có những dòng code có thể sau này không còn nhớ.

            Có những bài tập rồi cũng sẽ được thay thế bằng những bài toán
            khó hơn.

            Nhưng cách một người thầy kiên nhẫn giải thích một vấn đề,
            sửa một lỗi sai, chỉ ra một hướng suy nghĩ khác và khuyến khích
            học sinh tiếp tục cố gắng...

            thì rất khó quên.

            Chúng em biết rằng để đứng trước lớp và truyền đạt kiến thức
            không hề đơn giản.

            Có những lúc học sinh chưa hiểu.
            Có những lúc làm sai.
            Có những lúc còn thiếu tập trung.
            Có những lúc một bài toán tưởng như đơn giản lại khiến cả nhóm
            suy nghĩ rất lâu.

            Nhưng chính trong những khoảnh khắc đó, chúng em lại học được
            nhiều hơn một công thức hay một đoạn code.

            Chúng em học cách kiên nhẫn.

            Học cách thử lại.

            Học cách tìm lỗi.

            Học cách không bỏ cuộc khi chương trình chạy sai.

            Và có lẽ đó mới là những bài học quan trọng nhất.

            Nhân ngày Nhà giáo Việt Nam, chúng em muốn gửi đến thầy một lời
            cảm ơn thật đơn giản:

            CẢM ƠN THẦY.

            Cảm ơn thầy vì những buổi học.

            Cảm ơn thầy vì những lần sửa bài.

            Cảm ơn thầy vì những lời góp ý.

            Cảm ơn thầy vì đã dành thời gian cho chúng em.

            Và cảm ơn thầy vì đã khiến môn Tin học trở nên thú vị hơn.

            Sau này chúng em có thể sẽ học những ngôn ngữ lập trình khác,
            giải những bài toán khó hơn, bước vào những môi trường khác nhau
            và gặp thêm rất nhiều người.

            Nhưng thầy sẽ luôn là một phần trong những bước đầu tiên đó.

            Chúc thầy thật nhiều sức khỏe, luôn vui vẻ, luôn giữ được nhiệt
            huyết với nghề và tiếp tục truyền cảm hứng cho thật nhiều thế hệ
            học sinh.

            HAPPY VIETNAMESE TEACHER'S DAY.

            FROM YOUR STUDENTS.

            WITH RESPECT.
            WITH GRATITUDE.
            WITH MEMORIES.
        `
    }
};


/* =========================================================
   02. GLOBAL STATE
   ========================================================= */

let currentRecipient = null;
let currentPage = 1;
let isDecrypting = false;
let audioEnabled = true;

const TOTAL_PAGES = 10;


/* =========================================================
   03. DOM SHORTCUTS
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   04. INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeStars();
    initializeMatrix();
    initializeCursor();
    initializeNavigation();
    initializeCodeInput();
    initializeKeyboard();
    initializeCardTilt();
    initializeAudioToggle();
    initializeEasterEggs();

    updatePageCounter();
    updateDots();

    console.log(`
╔══════════════════════════════════════╗
║        MYSTERY DROP // 19.11         ║
║          SYSTEM ONLINE               ║
╠══════════════════════════════════════╣
║  ACCESS LEVEL: STUDENT               ║
║  ENCRYPTION: SIMULATED               ║
║  DATABASE: ONLINE                    ║
║  STATUS: WAITING FOR CODE...         ║
╚══════════════════════════════════════╝
    `);
});


/* =========================================================
   05. PAGE NAVIGATION
   ========================================================= */

function goToPage(pageNumber) {

    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > TOTAL_PAGES) pageNumber = TOTAL_PAGES;

    currentPage = pageNumber;

    $$(".page").forEach((page) => {
        page.classList.remove("active");
    });

    const target = $(`#page${pageNumber}`);

    if (target) {
        target.classList.add("active");
    }

    updatePageCounter();
    updateDots();

    playBeep(180, 0.035);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function nextPage() {

    if (currentPage < TOTAL_PAGES) {
        goToPage(currentPage + 1);
    }
}


function previousPage() {

    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}


function updatePageCounter() {

    const counter = $("#pageCounter");

    if (counter) {
        counter.textContent =
            `${String(currentPage).padStart(2, "0")} / ${String(TOTAL_PAGES).padStart(2, "0")}`;
    }
}


function updateDots() {

    const dotsContainer = $("#dots");

    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";

    for (let i = 1; i <= TOTAL_PAGES; i++) {

        const dot = document.createElement("button");

        dot.className = "page-dot";

        if (i === currentPage) {
            dot.classList.add("active");
        }

        dot.dataset.page = i;

        dot.addEventListener("click", () => {
            goToPage(i);
        });

        dotsContainer.appendChild(dot);
    }
}


/* =========================================================
   06. KEYBOARD CONTROLS
   ========================================================= */

function initializeKeyboard() {

    document.addEventListener("keydown", (event) => {

        if (event.key === "ArrowRight") {
            nextPage();
        }

        if (event.key === "ArrowLeft") {
            previousPage();
        }

        if (event.key === "Escape") {
            goToPage(1);
        }

        if (event.key === "Enter") {

            const input = $("#codeInput");

            if (
                input &&
                document.activeElement === input
            ) {
                verifyCode();
            }
        }
    });
}


/* =========================================================
   07. CODE INPUT
   ========================================================= */

function initializeCodeInput() {

    const input = $("#codeInput");

    if (!input) return;

    input.addEventListener("input", () => {

        input.value = input.value
            .toUpperCase()
            .replace(/[^A-Z0-9-]/g, "");

        const length = input.value.length;

        if (length >= 5) {
            input.classList.add("valid-format");
        } else {
            input.classList.remove("valid-format");
        }
    });

    input.addEventListener("focus", () => {
        playBeep(260, 0.025);
    });
}


function verifyCode() {

    if (isDecrypting) return;

    const input = $("#codeInput");

    if (!input) return;

    const code = input.value.trim().toUpperCase();

    if (!code) {
        showTerminalError("ERROR // EMPTY ACCESS CODE");
        shakeElement(input);
        playErrorSound();
        return;
    }

    if (!RECIPIENTS[code]) {

        showTerminalError("ACCESS DENIED // INVALID CODE");

        input.classList.add("error");

        setTimeout(() => {
            input.classList.remove("error");
        }, 700);

        shakeElement(input);
        playErrorSound();

        return;
    }

    currentRecipient = RECIPIENTS[code];

    localStorage.setItem(
        "mysteryDropLastCode",
        code
    );

    startDecryption(code);
}


/* =========================================================
   08. TERMINAL ERROR
   ========================================================= */

function showTerminalError(message) {

    const terminal = $(".terminal-status");

    if (!terminal) return;

    terminal.textContent = message;

    terminal.classList.add("error-text");

    setTimeout(() => {
        terminal.classList.remove("error-text");
    }, 1500);
}


function shakeElement(element) {

    if (!element) return;

    element.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(-7px)" },
            { transform: "translateX(7px)" },
            { transform: "translateX(0)" }
        ],
        {
            duration: 400
        }
    );
}


/* =========================================================
   09. DECRYPTION SEQUENCE
   ========================================================= */

function startDecryption(code) {

    isDecrypting = true;

    goToPage(3);

    const progressBar = $("#progressBar");
    const progressNumber = $("#progressNumber");

    let progress = 0;

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (progressNumber) {
        progressNumber.textContent = "000";
    }

    const messages = [
        "INITIALIZING SECURE CONNECTION...",
        "VERIFYING ACCESS TOKEN...",
        "SEARCHING RECIPIENT DATABASE...",
        "MATCH FOUND.",
        "DECRYPTING PERSONAL DATA...",
        "LOADING MEMORY FRAGMENTS...",
        "GENERATING PERSONALIZED MESSAGE...",
        "BUILDING PLAYER PROFILE...",
        "FINALIZING DROP...",
        "ACCESS GRANTED."
    ];

    let messageIndex = 0;

    const messageTimer = setInterval(() => {

        const terminal = $(".decrypt-status");

        if (terminal) {
            terminal.textContent =
                messages[messageIndex % messages.length];
        }

        messageIndex++;

    }, 420);


    const progressTimer = setInterval(() => {

        progress += Math.floor(Math.random() * 8) + 3;

        if (progress >= 100) {
            progress = 100;
        }

        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        if (progressNumber) {
            progressNumber.textContent =
                String(progress).padStart(3, "0");
        }

        playBeep(
            300 + progress * 2,
            0.018
        );

        if (progress >= 100) {

            clearInterval(progressTimer);
            clearInterval(messageTimer);

            setTimeout(() => {

                loadRecipientData();

                goToPage(4);

                isDecrypting = false;

                launchConfetti();

            }, 700);
        }

    }, 180);
}


/* =========================================================
   10. LOAD RECIPIENT
   ========================================================= */

function loadRecipientData() {

    if (!currentRecipient) return;

    const data = currentRecipient;

    setText("#revealName", data.name);
    setText("#revealRole", data.role);

    setText("#cardName", data.name);
    setText("#cardRole", data.role);

    setText("#rarity", data.rarity);
    setText("#raritySmall", data.rarity);
    setText("#raritySymbol", getRaritySymbol(data.rarity));

    setText("#level", data.level);
    setText("#skill", data.skill);

    setText("#messageTitle", `MESSAGE // ${data.name}`);
    setText("#messageText", data.message);
    setText("#shortWish", data.wish);

    setText("#signature", "MYSTERY DROP // 19.11");

    const avatar = $("#avatar");

    if (avatar) {

        avatar.textContent =
            getInitials(data.name);

    }

    applyRarityTheme(data.rarity);

    animateIdentityReveal();
}


function setText(selector, text) {

    const element = $(selector);

    if (!element) return;

    element.textContent = text;
}


function getInitials(name) {

    if (!name) return "?";

    if (name === "THẦY CƯỜNG") {
        return "TC";
    }

    const words = name
        .replace(/[^A-Za-zÀ-ỹ0-9\s]/g, "")
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    }

    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();
}


/* =========================================================
   11. RARITY SYSTEM
   ========================================================= */

function getRaritySymbol(rarity) {

    const symbols = {

        COMMON: "◆",
        RARE: "◇",
        EPIC: "✦",
        LEGENDARY: "★",
        MYTHIC: "♛"

    };

    return symbols[rarity] || "◆";
}


function applyRarityTheme(rarity) {

    document.body.dataset.rarity = rarity;

    const card = $("#playerCard");

    if (!card) return;

    card.classList.remove(
        "rarity-common",
        "rarity-rare",
        "rarity-epic",
        "rarity-legendary",
        "rarity-mythic"
    );

    card.classList.add(
        `rarity-${rarity.toLowerCase()}`
    );
}


/* =========================================================
   12. IDENTITY REVEAL
   ========================================================= */

function animateIdentityReveal() {

    const name = $("#revealName");
    const role = $("#revealRole");

    if (!name || !role) return;

    name.style.opacity = "0";
    name.style.transform = "translateY(25px)";

    role.style.opacity = "0";
    role.style.transform = "translateY(15px)";

    setTimeout(() => {

        name.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(25px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 800,
                fill: "forwards"
            }
        );

    }, 200);


    setTimeout(() => {

        role.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(15px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 600,
                fill: "forwards"
            }
        );

    }, 600);
}


/* =========================================================
   13. PLAYER CARD 3D EFFECT
   ========================================================= */

function initializeCardTilt() {

    const card = $("#playerCard");

    if (!card) return;

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 10;

        const rotateX =
            ((centerY - y) / centerY) * 10;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `perspective(1000px)
             rotateX(0deg)
             rotateY(0deg)
             translateY(0)`;

    });
}


/* =========================================================
   14. CURSOR GLOW
   ========================================================= */

function initializeCursor() {

    const glow = $("#cursorGlow");

    if (!glow) return;

    document.addEventListener("mousemove", (event) => {

        glow.style.left =
            `${event.clientX}px`;

        glow.style.top =
            `${event.clientY}px`;

    });
}


/* =========================================================
   15. STAR PARTICLES
   ========================================================= */

function initializeStars() {

    const canvas = $("#stars");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars = [];

    const STAR_COUNT =
        Math.min(
            180,
            Math.floor(
                (width * height) / 8000
            )
        );

    for (let i = 0; i < STAR_COUNT; i++) {

        stars.push({

            x: Math.random() * width,
            y: Math.random() * height,

            radius:
                Math.random() * 1.6 + 0.3,

            speed:
                Math.random() * 0.25 + 0.05,

            opacity:
                Math.random() * 0.8 + 0.2

        });
    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        for (const star of stars) {

            star.y -= star.speed;

            if (star.y < 0) {
                star.y = height;
                star.x = Math.random() * width;
            }

            ctx.beginPath();

            ctx.arc(
                star.x,
                star.y,
                star.radius,
                0,
                Math.PI * 2
            );

            ctx.globalAlpha = star.opacity;

            ctx.fillStyle = "#ffffff";

            ctx.fill();
        }

        ctx.globalAlpha = 1;

        requestAnimationFrame(animate);
    }

    animate();


    window.addEventListener("resize", () => {

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

    });
}


/* =========================================================
   16. MATRIX EFFECT
   ========================================================= */

function initializeMatrix() {

    const canvas = $("#matrix");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const chars =
        "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%<>[]{}";

    const fontSize = 13;

    let columns =
        Math.floor(width / fontSize);

    let drops =
        Array(columns).fill(1);


    function draw() {

        ctx.fillStyle =
            "rgba(3, 5, 10, 0.08)";

        ctx.fillRect(
            0,
            0,
            width,
            height
        );

        ctx.font =
            `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {

            const char =
                chars[
                    Math.floor(
                        Math.random() * chars.length
                    )
                ];

            const x =
                i * fontSize;

            const y =
                drops[i] * fontSize;

            ctx.fillStyle =
                "rgba(255,255,255,0.08)";

            ctx.fillText(
                char,
                x,
                y
            );

            if (
                y > height &&
                Math.random() > 0.975
            ) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }


    setInterval(draw, 45);


    window.addEventListener("resize", () => {

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        columns =
            Math.floor(width / fontSize);

        drops =
            Array(columns).fill(1);
    });
}


/* =========================================================
   17. AUDIO ENGINE
   ========================================================= */

let audioContext = null;


function getAudioContext() {

    if (!audioEnabled) {
        return null;
    }

    if (!audioContext) {

        const AudioCtx =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioCtx) return null;

        audioContext =
            new AudioCtx();
    }

    return audioContext;
}


function playBeep(
    frequency = 440,
    duration = 0.05
) {

    const ctx = getAudioContext();

    if (!ctx) return;

    try {

        const oscillator =
            ctx.createOscillator();

        const gain =
            ctx.createGain();

        oscillator.type = "sine";

        oscillator.frequency.value =
            frequency;

        gain.gain.setValueAtTime(
            0.04,
            ctx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start();

        oscillator.stop(
            ctx.currentTime + duration
        );

    } catch (error) {

        console.warn(
            "Audio unavailable:",
            error
        );
    }
}


function playErrorSound() {

    playBeep(140, 0.08);

    setTimeout(() => {
        playBeep(100, 0.12);
    }, 90);
}


/* =========================================================
   18. AUDIO TOGGLE
   ========================================================= */

function initializeAudioToggle() {

    const button =
        $("#audioToggle");

    if (!button) return;

    button.addEventListener(
        "click",
        () => {

            audioEnabled =
                !audioEnabled;

            button.textContent =
                audioEnabled
                    ? "SOUND: ON"
                    : "SOUND: OFF";

            if (audioEnabled) {
                playBeep(600, 0.06);
            }
        }
    );
}


/* =========================================================
   19. CONFETTI
   ========================================================= */

function launchConfetti() {

    const canvas =
        $("#confetti");

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 100; i++) {

        pieces.push({

            x:
                window.innerWidth / 2,

            y:
                window.innerHeight / 2,

            size:
                Math.random() * 5 + 3,

            speedX:
                (Math.random() - 0.5) * 12,

            speedY:
                (Math.random() - 0.5) * 12,

            gravity:
                0.18,

            rotation:
                Math.random() * Math.PI,

            rotationSpeed:
                (Math.random() - 0.5) * 0.2,

            life:
                100

        });
    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        let alive = false;

        for (const p of pieces) {

            if (p.life <= 0) {
                continue;
            }

            alive = true;

            p.x += p.speedX;
            p.y += p.speedY;

            p.speedY += p.gravity;

            p.rotation +=
                p.rotationSpeed;

            p.life--;

            ctx.save();

            ctx.translate(
                p.x,
                p.y
            );

            ctx.rotate(
                p.rotation
            );

            ctx.globalAlpha =
                p.life / 100;

            ctx.fillStyle =
                "#ffffff";

            ctx.fillRect(
                -p.size / 2,
                -p.size / 2,
                p.size,
                p.size
            );

            ctx.restore();
        }

        if (alive) {
            requestAnimationFrame(
                animate
            );
        } else {
            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );
        }
    }

    animate();
}


/* =========================================================
   20. EASTER EGGS
   ========================================================= */

function initializeEasterEggs() {

    let sequence = "";

    const secretSequence =
        "MYSTERY";

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key.length !== 1
            ) {
                return;
            }

            sequence +=
                event.key.toUpperCase();

            if (
                sequence.length >
                secretSequence.length
            ) {
                sequence =
                    sequence.slice(
                        -secretSequence.length
                    );
            }

            if (
                sequence ===
                secretSequence
            ) {

                activateSecretMode();

                sequence = "";
            }
        }
    );
}


function activateSecretMode() {

    document.body.classList.toggle(
        "secret-mode"
    );

    playBeep(900, 0.1);

    console.log(
        "%c SECRET MODE ACTIVATED ",
        "background:#fff;color:#000;padding:8px;font-weight:bold;"
    );

    alert(
        "◆ SECRET MODE UNLOCKED ◆\n\n" +
        "You found the hidden layer of MYSTERY DROP."
    );
}


/* =========================================================
   21. COPY MESSAGE
   ========================================================= */

async function copyMessage() {

    if (!currentRecipient) {
        return;
    }

    try {

        await navigator.clipboard.writeText(
            currentRecipient.message.trim()
        );

        showToast(
            "MESSAGE COPIED TO CLIPBOARD"
        );

    } catch (error) {

        showToast(
            "COPY FAILED"
        );
    }
}


/* =========================================================
   22. TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        $("#systemToast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id =
            "systemToast";

        toast.className =
            "system-toast";

        document.body.appendChild(
            toast
        );
    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 1800);
}


/* =========================================================
   23. RANDOM SYSTEM LOG
   ========================================================= */

function generateSystemLog() {

    const logs = [

        "PACKET RECEIVED",
        "SIGNAL STABLE",
        "MEMORY LOADED",
        "IDENTITY VERIFIED",
        "PROFILE SYNCHRONIZED",
        "MESSAGE DECRYPTED",
        "DROP READY",
        "CONNECTION SECURE",
        "TIMESTAMP VERIFIED",
        "SYSTEM NOMINAL"

    ];

    return logs[
        Math.floor(
            Math.random() *
            logs.length
        )
    ];
}


/* =========================================================
   24. TERMINAL TYPING EFFECT
   ========================================================= */

function typeText(
    element,
    text,
    speed = 25
) {

    if (!element) return;

    element.textContent = "";

    let index = 0;

    const timer =
        setInterval(() => {

            element.textContent +=
                text[index];

            index++;

            if (
                index >= text.length
            ) {

                clearInterval(
                    timer
                );
            }

        }, speed);
}


/* =========================================================
   25. SYSTEM CLOCK
   ========================================================= */

function updateSystemClock() {

    const clock =
        $("#systemClock");

    if (!clock) return;

    const now =
        new Date();

    const time =
        now.toLocaleTimeString(
            "vi-VN",
            {
                hour12: false
            }
        );

    clock.textContent =
        time;
}


setInterval(
    updateSystemClock,
    1000
);

updateSystemClock();


/* =========================================================
   26. RANDOM TERMINAL LOGS
   ========================================================= */

function injectRandomLogs() {

    const terminal =
        $("#terminalLogs");

    if (!terminal) return;

    const line =
        document.createElement("div");

    line.textContent =
        `> ${generateSystemLog()}`;

    terminal.appendChild(
        line
    );

    while (
        terminal.children.length > 7
    ) {
        terminal.removeChild(
            terminal.firstChild
        );
    }
}


setInterval(
    injectRandomLogs,
    2500
);


/* =========================================================
   27. PAGE VISIBILITY
   ========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            console.log(
                "MYSTERY DROP // PAUSED"
            );

        } else {

            console.log(
                "MYSTERY DROP // RESUMED"
            );
        }
    }
);


/* =========================================================
   28. RESIZE HANDLER
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

        const canvas =
            $("#confetti");

        if (canvas) {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;
        }
    }
);


/* =========================================================
   29. DEV CONSOLE
   ========================================================= */

window.MYSTERY_DROP = {

    recipients: RECIPIENTS,

    currentRecipient: () =>
        currentRecipient,

    currentPage: () =>
        currentPage,

    goToPage,

    nextPage,

    previousPage,

    verifyCode,

    launchConfetti,

    copyMessage

};


/* =========================================================
   30. FINAL SYSTEM MESSAGE
   ========================================================= */

console.log(
    "%c MYSTERY DROP // SYSTEM READY ",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "%c Hint: Try typing MYSTERY... ",
    "font-size:12px;"
);