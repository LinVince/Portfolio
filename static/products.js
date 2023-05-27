//Text Value
const main_topic_txt="Hardware Root of Trust"
const slogan_txt="Military-grade Security"
const first_heading_txt="Coexistence with Advanced Persistent Threat is the Best Practice"
const first_content_txt = "Being penetrated by APT is inevitable. In ZTA, the point is how we can coexist with malware or persistent threat with zero data leakage."
const second_heading_txt = "Protect your data from insider and outsider threats"
const third_heading_txt = "Your Data is Stolen Before You Know it"
const third_content_txt = "It's too late when there's a system alarm. By the time it is triggered, your data has already been stolen. To resolve it, try these solutions:<p>1. <b>Zero Trust</b> - Trust no one. Always verify. Stick to the principle of least privilege on the need-to-know basis<br>2. <b>Real-time Monitor</b> - Oversee the system to detect abnormal activities<br>3. <b>Encryption</b> - Encrypt your file, Even if data is leaked, there's no way to decipher it"
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

