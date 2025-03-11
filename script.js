// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.boxShadow = 'none';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    // 添加淡入效果
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // 技能卡片动画
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 500 + index * 100);
    });
});

// 移动端导航菜单
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');
    
    // 创建汉堡菜单按钮
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // 添加按钮到导航栏
    nav.insertBefore(menuButton, navLinks);
    
    // 添加点击事件
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
};

// 在移动端初始化菜单
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// 窗口大小改变时重新初始化菜单
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            createMobileMenu();
        }
    } else {
        const menuButton = document.querySelector('.mobile-menu-btn');
        if (menuButton) {
            menuButton.remove();
            document.querySelector('.nav-links').classList.remove('active');
        }
    }
}); 