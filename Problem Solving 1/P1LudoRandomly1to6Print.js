//লুডু খেলায় আমরা কি ভাবে ১ থেকে ৬ পর্যন্ত রেন্ডমলি প্রিন্ট করি
function print1to6() {
    document.getElementById("result").innerHTML =
        Math.floor((Math.random() * (6 - 1 + 1)) + 1);
    //Math.random() * (max - min + 1)+min
}