    // 获取DOM元素
    const indicators = document.querySelectorAll('.indicator');
    const imgs = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    // 定义更新轮播状态的函数
    function updateCarousel(index) {
        // 移除所有指示器的active类
        indicators.forEach(i => i.classList.remove('active'));
        // 给当前指示器添加active类
        indicators[index].classList.add('active');
        
        // 隐藏所有图片
        imgs.forEach(img => img.style.display = 'none');
        // 显示当前图片
        imgs[index].style.display = 'block';
    }

    // 初始化显示第一张图片
    updateCarousel(currentIndex);

    // 点击指示器切换图片
    indicators.forEach((item, index) => {
        item.onclick = () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        };
    });

    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % indicators.length;
        updateCarousel(currentIndex);
    }, 3000);