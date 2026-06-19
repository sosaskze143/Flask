document.addEventListener("DOMContentLoaded", () => {
    const btnGlowUp = document.getElementById("btnGlowUp");
    const btnProfile = document.getElementById("btnProfile");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");

    // التنفيذ التتابعي عند الضغط على زر تحميل قلو اب الأول
    btnGlowUp.addEventListener("click", () => {
        // حجب الخطوة الأولى وإظهار الخطوة الثانية المخصصة للبروفايل مباشرة
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
    });

    // سحب وتحميل ملف التكوين الفعلي من السيرفر عند ضغط الزر الثاني
    btnProfile.addEventListener("click", () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "files/profile.mobileconfig";
        downloadLink.download = "GlowUp_Blocker.mobileconfig";
        
        // إدخال الرابط في الخلفية وتنفيذ الضغط التلقائي الآمن ثم حذفه
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});
