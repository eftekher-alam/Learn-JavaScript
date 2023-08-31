function enroll(func, getCertificate) {
    console.log("Enrollment is processing...");
    setTimeout(() => {
        func(getCertificate);
    }, 3000);
}

function courseProcessing(func) {
    console.log("Course is processing...");
    setTimeout(func, 3000);
}

function getCertificate() {
    console.log("Got Certificate....!");
}

enroll(courseProcessing, getCertificate);

