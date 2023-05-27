//Text Value
const main_topic_txt="Create Extraordinary, Build Legend"
const slogan_txt="Zero Trust in Authority, Zero Compromise in Defense"
const first_heading_txt="The complexity of key management and compliance requirements holds back most enterprises in deploying encryption and digital signatures. However, we have been dedicated to the development for decades and have standardized and platformized high-security cryptography implementations"
const first_content_txt = "<b>First,</b> we analyze customers' system-level environments, confirming possible threats, assessing potential risks and then design correspondent solutions to protect their digital assets.<p><b>Then,</b> we examined customers' threat modeling and potential risks. Given reliable risk assessment, we tailor security mechanisms to protect customers' digital assets in a cost-effective manner.</p><p><b>Finally,</b> we analyze the gap in terms of deployment and collaborate with our partners in delivering a total solution.</p>"
const second_heading_txt = "Addressing present threats while planning for the future"
//const third_heading_txt = "你的資料在告警前已被竊取"
//const third_content_txt = "通常在系統告警前，你的資料已經被竊取。因此，資安的重點是「在我們毫不知情的前提下，如何確保資料的安全」，不只外患，還要防止內憂：<p>1. <b>實施零信任策略</b>：不信任任何設備、使用者和應用程式，只授權必要的存取權限。<br>2. <b>即時監控</b>：通過即時監控和行為分析，可以識別異常活動並及時採取措施。<br>3. <b>加密資料</b>：將資料加密存儲，即使資料被竊取也無法被解密。\r\n"
const intro_box_txt = "InfoKeyVault Technology (IKV-Tech), the name of which denotes the key vault securely storing information and digital assets, was established in 2006 as a self-funded startup near National Taiwan University (NTU). <p>IKV-Tech is positioned as a leading service company specializing in hardware-based embedded security. We have guarded clients’ digital assets and accumulated rich experiences in embedded systems. The experience and expertise enable customization of security solutions and provision of security chips, security modules and system-level security deployment to ensure digital right and intellectual property protection.</p><p>Now, we focus on password-less authentication, endpoint and cloud data protection, post-quantum cryptography, expecting to provide invincible defense for now and future.</p>"
const news1_heading_txt = "AuthTron Security Key joined Microsoft"
const news1_content_txt = "WiSECURE's self-developed security key, AuthTron, passed Microsoft Azure AD compatibility test last year. This month, Microsoft officially included AuthTron in the Azure AD password-less authentication."
const news1_link_txt = "AuthTron Spec >"
const news1_link_href = "https://wisecure-tech.com/media/attachments/2022/04/01/authtron-product-briefzh.pdf"
const news2_heading_txt = "kvHSM FIPS 140-2 Level 3 Certified"
const news2_content_txt = "kvHSM, a PCIe-based hardware security module, has been validated by TUV and NIST, certified as meeting FIPS 140-2 Level 3 security requirements. Development for meeting FIPS 140-3 certification is ongoing."
const news2_link_txt = "kvHSM Spec >"
const news2_link_href = "https://wisecure-tech.com/media/attachments/2022/08/11/kvhsm-20220811zh_compressed.pdf"
const news3_heading_txt = "FileAegis Entering the Semiconductor Industry"
const news3_content_txt = "A FileAegis deployment project was launched in the semiconductor industry. Intellectual properties should be kept confidential and never be revealed to competitors to comply with supply chain regulations."
const news3_link_txt = "Video Intro >"
const news3_link_href = "https://youtu.be/A0h59XwbhP4"




//Important Elements
const main_topic = document.getElementById('main_topic')
const slogan = document.getElementById('slogan')
const first_heading = document.getElementById('first_heading')
const first_content = document.getElementById('first_content')
const second_heading = document.getElementById('second_heading')
//const third_heading = document.getElementById('third_heading')
//const third_content = document.getElementById('third_content')
const intro_box = document.getElementById('intro_box')
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
first_content.innerHTML = first_content_txt;
second_heading.innerText = second_heading_txt;
//third_heading.innerText = third_heading_txt;
//third_content.innerHTML = third_content_txt;
intro_box.innerHTML = intro_box_txt
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

