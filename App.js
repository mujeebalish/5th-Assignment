var countryarray = ["The Islamic Republic of Pakistan emerged as an independent sovereign state on 14th August 1947, under the Leadership of Quaid-e -Azam Muhammad Ali Jinnah, as a result of the division of former British India. Pakistan is the sixth most populous country in the world and is the second most populous country with a Muslim majority. It lies between 23-35 to 37- 05 north latitude and 60-50 to 77- 50 east longitude touching the Hindukush Mountains in the north and extending from the Pamirs Mountain to the Arabian Sea. Pakistan covers 796,095 sq.km with a population of 150 million (approximately). It is divided into four province", "The political history of the modern state of Afghanistan begins in 1709 with the rise of the Pashtuns, when the Hotaki dynasty was established in Kandahar followed by the rise of the Durrani Empire in 1747. In the late 19th century, Afghanistan became a buffer state in theGreat Gam between British India and the Russian Empire. Following the 1919 Anglo-Afghan War, King Amanullah began a European style modernization of the country but was stopped by ultra-conservatives. During the Cold War, after the withdrawal of the British from neighboring India in 1947, the United States and the Soviet Union began spreading influences in Afghanistan, which led in 1979 to a bloody war between the US-backed mujahideen forces and the Soviet-backed Afghan government in which over a million Afghans lost their lives. This was followed by a 1990s civil war, the rise and fall of the extremist Taliban government, and the 2001 present war.  In December 2001, the United Nations Security Council authorized the creation of the International Security Assistance Force (ISAF) to help maintain security in Afghanistan and assist the Karzai administration.", "India's earliest known civilization arose about 5,000 years ago on the Indus River in what is now Pakistan. Archaeologists uncovered the remains of two huge cities with brick houses, piped water, and sewer systems Nobody knows why, but these cities, called Harappa and Mohenjo Daro, were abandoned in 1700 India's parliamentary government was inherited from the British. After independence in 1947, one party, the Congress Party, and one family, the Nehru family, dominated politics in India for decades. Now, however, many parties compete for elected positions.India's economy is growing so fast that experts predict it will soon become one of the world's leading markets. Indians are hard workers. And though many are poorly educated, there are many others who are highly trained college graduates.", "Country  United StatesUnited States: IntroductionThe United States is a country located in North America, bordering the Atlantic Ocean and Pacific Ocean. Neighboring countries are Canada and Mexico. The geography of the United States is varied, with mountains in the west, a broad central plain, and low mountains in the east. The government system is a constitution-based federal republic with a strong democratic tradition; the president is the chief of state and head of government. The United States has an advanced mixed economy in which there is a variety of private freedom combined with centralized economic planning and government regulation. United States is a member of the Asia-Pacific Economic Cooperation APEC and the North American Free Trade Agreement (NAFTA).", "China is one of the world's most populous countries. It has a continuous culture stretching back nearly 4,000 years and originated many of the foundations of the modern world.The People's Republic of China was founded in 1949 after the Communist Party defeated the nationalist Kuomintang, who retreated to Taiwan, creating two rival Chinese states - the People's Republic on the mainland and the Republic of China on Taiwan.After stagnating for decades under the rigid totalitarian socialism of founder Mao Zedong, China reformed its economy along partly-capitalist lines to make it one of the world's fastest-growing, as well a leading exporter.China is now a major overseas investor, and is pursuing an increasingly assertive foreign and defence policy far beyond East Asia. Media China is the largest media market in the world Outlets operate under tight Communist Party control. The opening-up of the industry has extended to distribution and advertising, but not necessarily to editorial content.Beijing tries to limit access to foreign news by restricting rebroadcasting and the reach of satellite TV, and by blocking websites using an extensive filtering system known as"]



var image = document.getElementById("image");
var countryDetail = document.getElementById("para")



var country_H1Name = document.getElementById("detail-h1");
var hoverH1 = document.getElementById("hover-h1");
var findCountry = () => {
    var userInput = document.getElementById("userInp").value;
    if (userInput == "India") {
        image.src = "https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        countryDetail.innerHTML = countryarray[2];
    }
    else if (userInput == "Pakistan") {
        image.src = "https://img.freepik.com/free-photo/flag-pakistan_1401-192.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        countryDetail.innerHTML = countryarray[0];
    }
    else if (userInput == "Afghanistan") {
        image.src = "https://plus.unsplash.com/premium_photo-1675865393053-b077c9616420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZnaGFuaXN0YW4lMjBmbGFnfGVufDB8fDB8fHww";
        countryDetail.innerHTML = countryarray[1];
    }
    else if (userInput == "China") {
        image.src = "https://img.freepik.com/free-vector/china-flag-flag-round-frame_1308-71755.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        countryDetail.innerHTML = countryarray[4];
    }
    else if (userInput == "America" || userInput == "Usa") {
        image.src = "https://img.freepik.com/free-psd/american-flag_23-2150587464.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        countryDetail.innerHTML = countryarray[3];
    }
    country_H1Name.innerHTML = userInput;
    hoverH1.innerHTML = "Hover me"
}
var flag_box = document.getElementById("image-box");
var detailBox = document.getElementById("detail-box");
var hoverH1 = document.getElementById("hover-h1");
var overmousefuunc = () => {
    flag_box.style.transform = "translateX(-50%)";
    detailBox.style.left = "50%";
    hoverH1.innerHTML = ""

}
var flag_box = document.getElementById("image-box");
var detailBox = document.getElementById("detail-box");
var onmouseoutfunc = () => {
    flag_box.style.transform = "";
    detailBox.style.transform = "";
    detailBox.style.left = "";
    hoverH1.innerHTML = "Hover me"
}








var inp_Outp = () => {
    var userInput = document.getElementById("userInp").value;
    var outPutField = document.getElementById("output-field");
    outPutField.value = userInput;


}