document.addEventListener("DOMContentLoaded", () => {
    const downloadGlowUpBtn = document.getElementById("downloadGlowUpBtn");
    const downloadProfileBtn = document.getElementById("downloadProfileBtn");

    // عند الضغط على "تحميل قلو اب"
    downloadGlowUpBtn.addEventListener("click", () => {
        // إخفاء الزر الأول
        downloadGlowUpBtn.classList.add("hidden");
        // إظهار زر تحميل البروفايل
        downloadProfileBtn.classList.remove("hidden");
    });

    // عند الضغط على "تحميل بروفايل"
    downloadProfileBtn.addEventListener("click", () => {
        // إنشاء رابط وهمي لتحميل ملف الـ Profile
        const link = document.createElement("a");
        link.href = "files/profile.mobileconfig"; // مسار الملف
        link.download = "GlowUp_Blocker.mobileconfig"; // اسم الملف عند التحميل
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert("بدأ تحميل البروفايل! يرجى اتباع التعليمات بالأسفل لتثبيته في الإعدادات.");
    });
});
