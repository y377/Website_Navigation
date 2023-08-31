// 获取按钮和导航栏元素
const themeToggleBtns = document.querySelectorAll('[data-bs-toggle="theme"]');
const navbar = document.querySelector('#navbar');

// 根据localStorage中的主题，或者根据用户设备选择默认主题
let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
// 设置文档根元素class和html标签的data-bs-theme属性
document.documentElement.classList.add(`theme-${theme}`);
document.querySelector('html').setAttribute('data-bs-theme', theme);

// 根据主题属性值设置文档根元素的class和html标签的data-bs-theme属性
function setTheme(theme) {
    document.documentElement.setAttribute('class', `theme-${theme}`);
    document.querySelector('html').setAttribute('data-bs-theme', theme);
    // 根据主题设置导航栏背景颜色和文本颜色
    navbar.classList.remove('navbar-light', 'bg-light', 'navbar-dark', 'bg-dark');
    if (theme === 'dark') {
        navbar.classList.add('navbar-dark', 'bg-dark');
        themeToggleBtns.forEach((btn) => {
            btn.querySelector('i').setAttribute('class', 'bi bi-sun-fill text-warning');
            btn.setAttribute('aria-label', 'Switch to light mode');
        });
    } else {
        navbar.classList.add('bg-light');
        themeToggleBtns.forEach((btn) => {
            btn.querySelector('i').setAttribute('class', 'bi bi-moon-fill');
            btn.setAttribute('aria-label', 'Switch to dark mode');
        });
    }
}

// 初始化主题
setTheme(theme);

// 绑定主题切换按钮的点击事件
themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        theme = theme === 'light' ? 'dark' : 'light';
        setTheme(theme);
        localStorage.setItem('theme', theme);
    });
});