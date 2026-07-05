// ایجاد یک تایم‌لاین برای هماهنگی انیمیشن‌ها پشت سر هم
const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

// ۱. انیمیشن ورود کانتینر اصلی بنر (بزرگ شدن و محو شدن ملایم)
tl.from(".banner-container", {
    scale: 0.95,
    opacity: 0,
    duration: 1.2
});

// ۲. ورود نورهای پس‌زمینه به آرامی
tl.from(".bg-glow", {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3
}, "-=0.8"); // ۸ دهم ثانیه زودتر اجرا شود

// ۳. انیمیشن متن‌ها و عنوان اصلی بنر (ظهور از راست به چپ)
tl.from(".animate-text", {
    x: 50,
    opacity: 0,
    duration: 0.8
}, "-=1");

// ۴. ورود توضیحات متنی بنر
tl.from(".animate-p", {
    x: 30,
    opacity: 0,
    duration: 0.8
}, "-=0.5");

// ۵. انیمیشن دکمه عملیاتی (ظهور از پایین به بالا همراه با کشیدگی جزئی bounce)
tl.from(".btn-action", {
    y: 20,
    opacity: 0,
    ease: "back.out(1.7)",
    duration: 0.6
}, "-=0.4");

// ۶. ورود المان‌های گرافیکی سمت راست (کره اصلی و اجزای شناور)
tl.from(".main-sphere", {
    scale: 0,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    duration: 1.2
}, "-=0.8");

tl.from(".sub-element", {
    y: -30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8
}, "-=0.8");


// ۷. انیمیشن‌های بی‌انتهای شناور (Looping Animations)
// این بخش باعث می‌شود المان‌ها بعد از لود شدن، مدام حرکت ملایم داشته باشند تا بنر زنده بماند.
gsap.to(".main-sphere", {
    y: 15,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});

gsap.to(".elem-1", { y: -10, rotation: 360, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut" });
gsap.to(".elem-2", { y: 12, rotation: -180, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
gsap.to(".elem-3", { x: 10, y: -10, duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut" });