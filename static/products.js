//Text Value
const main_topic_txt="硬體信任根（Root of Trust）"
const slogan_txt="軍規級安全規格"
const first_heading_txt="面對多變威脅情勢（Threat Landscape）的最佳實踐"
const first_content_txt = "邊界防禦（Perimeter-based Security）已經無法抵擋現有攻擊，重點是要和多變的攻擊手法共存，即便系統已被長期滲透（APT），仍能確保設備數據、通訊資料、客戶個資、營業秘密等受到最高層級的保護，將企業聲譽及財產的損失降至於零。"
const second_heading_txt = "除了防止外部攻擊，企業內部威脅同樣重要"
const third_heading_txt = "你的資料在告警前已被竊取"
const third_content_txt = "通常在系統告警前，你的資料已經被竊取。因此，資安的重點是「在我們毫不知情的前提下，如何確保資料的安全」，不只外患，還要防止內憂：<p>1. <b>實施零信任策略</b>：不信任任何設備、使用者和應用程式，只授權必要的存取權限。<br>2. <b>即時監控</b>：通過即時監控和行為分析，可以識別異常活動並及時採取措施。<br>3. <b>加密資料</b>：將資料加密存儲，即使資料被竊取也無法被解密。\r\n"
const news1_heading_txt = "AuthTron 安全金鑰加入 Microsoft Azure 生態系"
const news1_content_txt = "匯智安全 (品牌子公司) AuthTron FIDO2 Level 2 安全金鑰通過 Microsoft Azure AD 相容性測試，今年三月底，將正式加入 Microsoft Azure AD 的無密碼身分認證登入生態系"
const news1_link_txt = "AuthTron Spec >"
const news1_link_href = "https://wisecure-tech.com/media/attachments/2022/04/01/authtron-product-briefzh.pdf"
const news2_heading_txt = "kvHSM 通過 FIPS 140-2 Level 3 認證"
const news2_content_txt = "PCIe 卡式硬體安全模組 kvHSM 已由 TUV 實驗室和美國標準局（NIST）認證，通過 FIPS 140-2 Level 3 認證，符合機敏機關、銀行等安規需求。下個階段將進行 FIPS 140-3 Level 3 認證。"
const news2_link_txt = "kvHSM Spec >"
const news2_link_href = "https://wisecure-tech.com/media/attachments/2022/08/11/kvhsm-20220811zh_compressed.pdf"
const news3_heading_txt = "檔案保護系統 FileAegis 成功進入半導體產業"
const news3_content_txt = "使用密碼學金鑰實現最小權限原則的 FileAegis 檔案保護系統，已成功打入半導體產業，保護智慧財產及營業秘密，持續創造更多成功案例！"
const news3_link_txt = "Video Intro >"
const news3_link_href = "https://youtu.be/A0h59XwbhP4"


//Important Elements
const top_logo = document.getElementById('top_logo')
const initiatives_nav = document.getElementById('initiatives_nav')
const products_nav = document.getElementById('products_nav')
const solutions_nav = document.getElementById('solutions_nav')
const industries_nav = document.getElementById('industries_nav')
const partners_nav = document.getElementById('partners_nav')
const company_nav = document.getElementById('company_nav')
const language_nav = document.getElementById('language')
const main_topic = document.getElementById('main_topic')
const slogan = document.getElementById('slogan')
const first_heading = document.getElementById('first_heading')
const first_content = document.getElementById('first_content')
const second_heading = document.getElementById('second_heading')
const third_heading = document.getElementById('third_heading')
const third_content = document.getElementById('third_content')
const news1_heading = document.getElementById('news1_heading')
const news1_content = document.getElementById('news1_content')
const news1_link = document.getElementById('news1_link')
const news2_heading = document.getElementById('news2_heading')
const news2_content = document.getElementById('news2_content')
const news2_link = document.getElementById('news2_link')
const news3_heading = document.getElementById('news3_heading')
const news3_content = document.getElementById('news3_content')
const news3_link = document.getElementById('news3_link')

//Render Element Values
main_topic.innerText = main_topic_txt;
slogan.innerText = slogan_txt;
first_heading.innerText = first_heading_txt;
first_content.innerText = first_content_txt;
second_heading.innerText = second_heading_txt;
third_heading.innerText = third_heading_txt;
third_content.innerHTML = third_content_txt;
news1_heading.innerText = news1_heading_txt;
news1_content.innerText = news1_content_txt;
news1_link.innerText = news1_link_txt;
news1_link.href = news1_link_href;
news2_heading.innerText = news2_heading_txt;
news2_content.innerText = news2_content_txt;
news2_link.innerText = news2_link_txt;
news2_link.href = news2_link_href;
news3_heading.innerText = news3_heading_txt;
news3_content.innerText = news3_content_txt;
news3_link.innerText = news3_link_txt;
news3_link.href = news3_link_href;


// Action
// Go to the frontpage
top_logo.addEventListener('click', function(){
	window.location.href = "../index.html"
})


// Click Company to company page
company_nav.addEventListener('click', function(){
	window.location.href = "../company/index.html";
})


// Go the the English page
language_nav.addEventListener('click', function(){
	window.location.href = "../en/product/index.html";
})

