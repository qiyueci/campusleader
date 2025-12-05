const courseData = {
    "25ds1": {
        "1": {
            "1": { course: "大学语文", teacher: "肖南讲师", weeks: "2-16(周)", location: "励学楼(SJ1)213", period: "第一二节 [01-02]" },
            "2": { course: "大学英语 II", teacher: "谢辉副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)512", period: "第三四节 [03-04]" },
            "6": { course: "国家安全教育", teacher: "欧歆讲师", weeks: "17-18(周)", location: "励学楼(SJ1)206", period: "第十一节后 [11-12]" }
        },
        "2": {
            "3": { course: "国家安全教育", teacher: "欧歆讲师", weeks: "17-18(周)", location: "励学楼(SJ1)206", period: "第五六节 [05-06]" },
            "4": { course: "国家安全教育", teacher: "欧歆讲师", weeks: "17-18(周)", location: "励学楼(SJ1)206", period: "第七八节 [07-08]" },
            "3_2": { course: "形势与政策 I", teacher: "陈娟副教授", weeks: "6,8,14,16(周)", location: "笃行楼(SJ2)212", period: "第五六节 [05-06]" }
        },
        "3": {
            "1": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "励学楼(SJ1)109", period: "第一二节 [01-02]" },
            "2": { course: "高等代数Ⅰ", teacher: "谭学忠副教授", weeks: "2-16(周)", location: "拓新楼(SS1)333", period: "第三四节 [03-04]" },
            "3": { course: "程序设计基础（C语言）", teacher: "陈冰川副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)405", period: "第五六节 [05-06]" },
            "4": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "励学楼(SJ1)213", period: "第七八节 [07-08]" },
            "6": { course: "国家安全教育", teacher: "欧歆讲师", weeks: "17-18(周)", location: "励学楼(SJ1)206", period: "第十一节后 [11-12]" }
        },
        "4": {
            "1": { course: "人工智能导论", teacher: "刘可", weeks: "2-16(周)", location: "厚德楼(SJ3)110", period: "第一二节 [01-02]" },
            "2": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)303", period: "第三四节 [03-04]" },
            "4": { course: "程序设计基础（C语言）", teacher: "陈冰川副教授", weeks: "2-16(单周)", location: "拓新楼204（计算机基础实验室）", period: "第七八节 [07-08]" }
        },
        "5": {
            "1": { course: "军事理论", teacher: "高清林讲师", weeks: "2-16(单周)", location: "励学楼(SJ1)108", period: "第一二节 [01-02]" },
            "1_2": { course: "高等代数Ⅰ", teacher: "谭学忠副教授", weeks: "2-16(双周)", location: "励学楼(SJ1)301", period: "第一二节 [01-02]" },
            "2": { course: "职业生涯与发展规划", teacher: "张桂鹏", weeks: "2-5(周)", location: "笃行楼(SJ2)117", period: "第三四节 [03-04]" },
            "3": { course: "大学生心理健康教育", teacher: "曹秀华副教授", weeks: "2-16(单周)", location: "励学楼(SJ1)307", period: "第五六节 [05-06]" },
            "4": { course: "湾区财经概论", teacher: "朱丽讲师", weeks: "2-16(周)", location: "笃行楼(SJ2)218", period: "第七八节 [07-08]" }
        },
        "6": {},
        "0": {}
    },
    "25ds2": {
        "1": {},
        "2": {
            "4": { course: "形势与政策 I", teacher: "陈娟副教授", weeks: "6,8,14,16(周)", location: "笃行楼(SJ2)212", period: "第七八节 [07-08]" }
        },
        "3": {
            "1": { course: "程序设计基础（C语言）", teacher: "陈冰川副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)405", period: "第一二节 [01-02]" },
            "2": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "励学楼(SJ1)109", period: "第三四节 [03-04]" },
        },
        "4": {
            "1": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)303", period: "第一二节 [01-02]" },
            "2": { course: "人工智能导论", teacher: "刘可", weeks: "2-16(周)", location: "厚德楼(SJ3)110", period: "第三四节 [03-04]" },
            "3": { course: "数学分析Ia", teacher: "欧柳曼副教授", weeks: "2-16(周)", location: "励学楼(SJ1)210", period: "第五六节 [05-06]" },
            "4": { course: "大学生心理健康教育", teacher: "曹秀华副教授", weeks: "2-16(单周)", location: "励学楼(SJ1)306", period: "第七八节 [07-08]" },
            "4_2": { course: "程序设计基础（C语言）", teacher: "陈冰川副教授", weeks: "2-16(双周)", location: "拓新楼204（计算机基础实验室）", period: "第七八节 [07-08]" }
        },
        "5": {
            "4": { course: "湾区财经概论", teacher: "刘艳艳副教授", weeks: "2-16(周)", location: "笃行楼(SJ2)418", period: "第七八节 [07-08]" }
        },
        "6": {},
        "0": {}
    },
    "25cs1": {
        "1": {
            "1": { course: "计算机组成原理", teacher: "赵教授", weeks: "2-16(周)", location: "励学楼(SJ1)301", period: "第一二节 [01-02]" }
        },
        "2": {}, "3": {}, "4": {}, "5": {}, "6": {}, "0": {}
    },
    "25cs2": {}, "25se1": {}, "25se2": {}, "25ai1": {}, "25ai2": {}
};

// 星期映射
const weekdayMap = {
    "0": "星期日",
    "1": "星期一",
    "2": "星期二",
    "3": "星期三",
    "4": "星期四",
    "5": "星期五",
    "6": "星期六"
};

// 节次映射
const periodMap = {
    "1": "第一二节",
    "2": "第三四节",
    "3": "第五六节",
    "4": "第七八节",
    "5": "第九十节",
    "6": "第十一节后"
};

// DOM元素
const classSelect = document.getElementById('class-select');
const weekdaySelect = document.getElementById('weekday-select');
const periodSelect = document.getElementById('period-select');
const queryBtn = document.getElementById('query-btn');
const resetBtn = document.getElementById('reset-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const resultSection = document.getElementById('result-section');
const noResultSection = document.getElementById('no-result-section');
const resultBody = document.getElementById('result-body');
const queryInfo = document.getElementById('query-info');
const courseDetail = document.getElementById('course-detail');

// 详细信息元素
const detailCourse = document.getElementById('detail-course');
const detailTeacher = document.getElementById('detail-teacher');
const detailWeeks = document.getElementById('detail-weeks');
const detailLocation = document.getElementById('detail-location');
const detailPeriod = document.getElementById('detail-period');
const detailWeekday = document.getElementById('detail-weekday');

// 查询按钮点击事件
queryBtn.addEventListener('click', function () {
    const classValue = classSelect.value;
    const weekdayValue = weekdaySelect.value;
    const periodValue = periodSelect.value;

    // 验证选择
    if (!classValue) {
        alert('请选择班级');
        classSelect.focus();
        return;
    }

    // 隐藏所有结果区域
    resultSection.classList.add('hidden');
    noResultSection.classList.add('hidden');

    // 生成查询信息
    const className = classSelect.options[classSelect.selectedIndex].text;
    const weekdayName = weekdayValue ? weekdayMap[weekdayValue] : '全部星期';
    const periodName = periodValue ? periodMap[periodValue] : '全部节次';

    queryInfo.textContent = `查询条件：${className} | ${weekdayName} | ${periodName}`;

    // 获取对应班级的课程数据
    const classCourses = courseData[classValue] || {};
    let hasResult = false;

    // 清空结果表格
    resultBody.innerHTML = '';

    // 生成表格行（按节次）
    for (let period = 1; period <= 6; period++) {
        const periodName = periodMap[period];
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 transition-custom';

        // 节次列
        const periodCell = document.createElement('td');
        periodCell.className = 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50';
        periodCell.textContent = periodName;
        row.appendChild(periodCell);

        // 星期列（一到日）
        for (let weekday = 1; weekday <= 7; weekday++) {
            const weekdayKey = weekday === 7 ? '0' : weekday.toString();
            const weekdayName = weekdayMap[weekdayKey];

            const cell = document.createElement('td');
            cell.className = 'px-4 py-3 whitespace-normal text-sm text-gray-500 border-r border-gray-100';

            // 检查是否需要过滤
            const filterByWeekday = !!weekdayValue && weekdayKey !== weekdayValue;
            const filterByPeriod = !!periodValue && period.toString() !== periodValue;

            if (filterByWeekday || filterByPeriod) {
                cell.innerHTML = '<span class="text-gray-300">--</span>';
                row.appendChild(cell);
                continue;
            }

            // 获取课程数据 - 精准匹配+去重修复
            const dayCourses = classCourses[weekdayKey] || {};
            const courses = [];
            const courseKeys = new Set(); // 用于去重的唯一标识集合

            // 1. 定义需要匹配的键（按优先级排序，避免重复）
            const targetKeys = [
                period.toString(),          // 单节次（如"1"）
                `${period}_2`,              // 双周标记（如"1_2"）
                `${period}_${period + 1}`     // 节次组（如"1_2"）
            ];

            // 2. 遍历匹配键，避免重复收集
            targetKeys.forEach(key => {
                if (dayCourses[key]) {
                    // 生成课程唯一标识（避免重复）
                    const courseId = `${dayCourses[key].course}_${dayCourses[key].weeks}_${dayCourses[key].teacher}`;

                    // 仅当该课程未被收集过时，才添加
                    if (!courseKeys.has(courseId)) {
                        courses.push(dayCourses[key]);
                        courseKeys.add(courseId); // 记录已收集的课程
                    }
                }
            });

            if (courses.length > 0) {
                hasResult = true;
                // 有课程 - 支持多课程展示（去重后）
                cell.className = 'px-4 py-3 whitespace-normal text-sm border-r border-gray-100 bg-blue-50';

                // 构建多课程HTML结构
                let courseHtml = '';
                courses.forEach((course, index) => {
                    // 为每个课程生成独立条目，添加分隔线（最后一个不加）
                    const divider = index < courses.length - 1 ? '<div class="my-2 border-b border-blue-100"></div>' : '';

                    courseHtml += `
                <div class="font-medium text-primary cursor-pointer course-item ${index > 0 ? 'mt-3' : ''}" 
                     data-class="${classValue}" 
                     data-weekday="${weekdayKey}" 
                     data-period="${period}"
                     data-course="${course.course}"
                     data-teacher="${course.teacher}"
                     data-weeks="${course.weeks}"
                     data-location="${course.location}">
                    ${course.course}
                </div>
                <div class="text-xs text-gray-500 mt-1">${course.teacher}</div>
                <div class="text-xs text-gray-400 mt-1">${course.location}</div>
                <div class="text-xs text-gray-400 mt-1">${course.weeks}</div>
                ${divider}
            `;
                });

                cell.innerHTML = courseHtml;
            } else {
                // 无课程
                cell.innerHTML = '<span class="text-gray-300">--</span>';
            }

            row.appendChild(cell);
        }

        resultBody.appendChild(row);

        // 添加分隔线（除了最后一行）
        if (period < 6) {
            const separatorRow = document.createElement('tr');
            const separatorCell = document.createElement('td');
            separatorCell.className = 'px-6 py-1';
            separatorCell.colSpan = 8;
            separatorCell.innerHTML = '<div class="h-px bg-gray-100"></div>';
            separatorRow.appendChild(separatorCell);
            resultBody.appendChild(separatorRow);
        }
    }

    // 显示结果或无结果提示
    if (hasResult) {
        resultSection.classList.remove('hidden');
        courseDetail.classList.add('hidden'); // 默认隐藏详情
    } else {
        noResultSection.classList.remove('hidden');
    }

    // 滚动到结果区域
    if (hasResult) {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        noResultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// 重置按钮点击事件
resetBtn.addEventListener('click', function () {
    classSelect.value = '';
    weekdaySelect.value = '';
    periodSelect.value = '';

    // 隐藏结果区域
    resultSection.classList.add('hidden');
    noResultSection.classList.add('hidden');

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 重新查询按钮点击事件
tryAgainBtn.addEventListener('click', function () {
    noResultSection.classList.add('hidden');
    classSelect.focus();

    // 滚动到查询区域
    document.querySelector('#query-btn').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// 课程项点击事件（事件委托）
resultBody.addEventListener('click', function (e) {
    const courseItem = e.target.closest('.course-item');
    if (courseItem) {
        // 显示详情卡片
        courseDetail.classList.remove('hidden');

        // 填充详情数据
        detailCourse.textContent = courseItem.dataset.course;
        detailTeacher.textContent = courseItem.dataset.teacher;
        detailWeeks.textContent = courseItem.dataset.weeks;
        detailLocation.textContent = courseItem.dataset.location;
        detailPeriod.textContent = periodMap[courseItem.dataset.period];
        detailWeekday.textContent = weekdayMap[courseItem.dataset.weekday];

        // 滚动到详情区域
        courseDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 高亮选中的课程项
        document.querySelectorAll('.course-item').forEach(item => {
            item.classList.remove('bg-primary/20', 'rounded', 'p-1');
        });
        courseItem.classList.add('bg-primary/20', 'rounded', 'p-1');
    }
});

// 页面加载完成后的动画效果
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('opacity-100');
            section.classList.remove('opacity-0', 'translate-y-4');
        }, 100 * index);
    });
});// 为课程条目绑定点击事件（支持多课程）
document.querySelectorAll('.course-item').forEach(item => {
    item.addEventListener('click', function () {
        const course = this.dataset.course;
        const teacher = this.dataset.teacher;
        const weeks = this.dataset.weeks;
        const location = this.dataset.location;
        const className = this.dataset.class;
        const weekday = this.dataset.weekday;
        const period = this.dataset.period;

        // 星期文字转换
        const weekdayMap = {
            '1': '星期一', '2': '星期二', '3': '星期三',
            '4': '星期四', '5': '星期五', '6': '星期六', '0': '星期日'
        };

        alert(`
课程详情
————————
班级：${className}
时间：${weekdayMap[weekday]} 第${period}节
课程：${course}
教师：${teacher}
地点：${location}
周次：${weeks}
        `);
    });
});