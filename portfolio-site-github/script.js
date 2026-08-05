const projects = {
  "cinematic-opening": {
    type: "Cinematic Opening",
    title: "电影开头概念片",
    video: "./videos/cinematic-opening.mp4",
    summary:
      "使用可灵生成的电影片头概念视频，定位为超写实电影级视觉开场。项目重点展示 AIGC 视频生成中的氛围建立、镜头运动、真实质感和开场叙事感。",
    role: "视觉概念设定 / AIGC 视频生成 / 片头氛围设计 / 作品筛选与包装",
    tools: "Kling / AIGC Video / 剪辑包装",
    highlight: "适合作为作品集中的 AIGC 视频代表作，能快速证明你能用 AI 做出具备电影感和开场吸引力的视觉片段。",
  },
  "slow-aging": {
    type: "Short Video Editing",
    title: "西装赴约，青春已老",
    video: "./videos/slow-aging-preview.webm",
    links: [
      {
        label: "抖音完整版",
        href: "https://v.douyin.com/UFTgTvA-lPQ/",
      },
      {
        label: "复制抖音口令",
        copyText:
          "4.12 复制打开抖音，看看【鸣的作品】《慢点变老》 她说我穿西装最好看，可她再也看不到了... https://v.douyin.com/UFTgTvA-lPQ/ 05/30 bAG:/ M@j.cN :9pm",
      },
    ],
    summary:
      "作品集内展示《慢点变老》30 秒节选，完整作品已发布在抖音。项目重点展示情绪叙事、竖屏节奏、字幕钩子和短视频包装能力。",
    role: "故事改编 / 封面设计 / 节奏剪辑 / 字幕包装 / 画面调性控制",
    tools: "剪映 / Photoshop / 视频关键帧整理",
    highlight: "通过黑白影调、雨景倒影和强情绪标题，把故事主题快速传达给观看者。",
  },
  "laundry-ad": {
    type: "Commercial Video",
    title: "超能洗衣液广告",
    video: "./videos/laundry-ad.mp4",
    images: ["./assets/image-works/laundry-storyboard.jpg"],
    summary:
      "品牌广告方向作品，适合展示商业短片的产品卖点表达、画面节奏和广告包装思路。可作为视频剪辑与内容营销方向的案例补充。",
    role: "广告剪辑 / 产品信息组织 / 画面包装 / 成片输出",
    tools: "Premiere Pro / 剪映 / 品牌短片剪辑",
    highlight: "比单纯练习更贴近商业内容场景，适合放在作品集中证明你能处理产品广告类素材。",
  },
  "game-performance-ad": {
    type: "Game Performance Ad",
    title: "游戏买量广告",
    video: "./videos/game-performance-ad.mp4",
    summary: "面向游戏信息流投放制作的买量广告，通过真人开场钩子、角色与抽卡展示、实机战斗和福利信息推动观看与转化。",
    role: "素材筛选 / 广告结构 / 节奏剪辑 / 游戏录屏混剪 / 福利包装",
    tools: "Premiere Pro / 剪映 / Game Advertising / Performance Creative",
    highlight: "将真人素材、角色展示、实机画面与转化信息组织成完整的商业投放视频，体现买量素材制作能力。",
  },
  "pr-editing": {
    type: "Premiere Editing",
    title: "PR 剪辑作品",
    video: "./videos/pr-editing-preview.mp4",
    links: [
      {
        label: "查看高清原片",
        href: "https://pan.quark.cn/s/73f608bca72e",
      },
    ],
    summary:
      "剪辑作品预览版，用来展示基础剪辑能力、镜头组织、节奏处理和完整视频输出。",
    role: "素材整理 / 剪辑组接 / 节奏调整 / 成片导出",
    tools: "Premiere Pro / 剪辑时间线 / 视频输出",
    highlight: "适合作为作品集中的基础剪辑能力证明，建议后续补一张时间线截图和 80 字项目说明。",
  },
  "doc-assistant": {
    type: "AI Application Demo",
    title: "AI 文档整理助手",
    generated: true,
    link: "./doc-assistant.html",
    summary:
      "面向 AI Intern 岗位准备的轻量 AI 应用 Demo。用户粘贴混乱文档后，可一键生成清洗文本、摘要、FAQ 和用户手册草稿。",
    role: "场景定义 / 功能设计 / Prompt 模板 / Demo 界面 / 项目说明文档",
    tools: "HTML / JavaScript / LLM API Concept / Documentation",
    highlight: "覆盖 document cleansing、preprocessing、technical documentation 和 PoC validation 等岗位关键词。",
  },
  "coca-cola-ad": {
    type: "Commercial / AIGC Video",
    title: "可口可乐广告设计",
    video: "./videos/coca-cola-ad.mp4",
    summary: "围绕可口可乐品牌调性完成的商业广告影像设计，通过鲜明的红色视觉、产品特写和节奏化镜头强化清爽、活力与分享感。",
    role: "广告创意 / 视觉概念 / AIGC 画面生成 / 剪辑包装 / 成片输出",
    tools: "AIGC Video / Premiere Pro / 剪映 / 品牌广告设计",
    highlight: "将品牌识别、产品表现与情绪节奏整合为完整广告短片，展示商业视觉与动态内容创作能力。",
  },
  "jianwu-app-ui": {
    type: "App UI Design",
    title: "简物 APP UI 设计",
    embed: "./jianwu-app-ui.html",
    link: "./jianwu-app-ui.html",
    summary: "面向移动端电商场景设计的交互式 UI 原型，包含首页、分类、商品详情、购物车与个人中心等核心页面。",
    role: "产品结构 / UI 视觉设计 / 交互原型 / 前端 Demo",
    tools: "React / HTML / CSS / JavaScript / Material Design",
    highlight: "以深墨蓝与珊瑚橙建立统一视觉系统，并用可操作原型完整呈现核心购物流程。",
  },
  "ai-visual-workflow": {
    type: "AIGC Visual / Workflow",
    title: "AI 视觉与工作流",
    images: ["./assets/image-works/ai-image-to-video.png", "./assets/image-works/ai-workflow.png"],
    summary: "从 AI 图像生成、镜头设定到图生视频的流程展示，呈现电影感场景设计和 AIGC 内容生产方法。",
    role: "场景构思 / 提示词设计 / 图像生成 / 工作流整理",
    tools: "AIGC Image / AIGC Video / Prompt Design",
    highlight: "同时展示最终视觉与创作流程，让作品不仅有结果，也能说明实现方法。",
  },
  "information-visualization": {
    type: "Information Visualization",
    title: "信息可视化设计",
    images: ["./assets/image-works/information-visualization.png"],
    summary: "围绕茶文化主题进行信息层级、数据图形和东方视觉元素的整合设计。",
    role: "信息整理 / 版式设计 / 图形表达 / 视觉统一",
    tools: "Photoshop / Illustrator / Information Design",
    highlight: "用清晰的信息层级承载较高内容密度，并保持统一的东方审美。",
  },
  "commercial-posters": {
    type: "Commercial Poster Design",
    title: "商业海报设计",
    images: ["./assets/image-works/poster-design.png", "./assets/image-works/promo-poster.png"],
    summary: "包含可口可乐商业海报与东方建筑主题宣传海报，探索品牌冲击力和文化视觉表达。",
    role: "创意构图 / 主视觉设计 / 字体排版 / 氛围塑造",
    tools: "Photoshop / AIGC Image / Poster Design",
    highlight: "覆盖商业快消与文化宣传两种不同调性，体现多风格视觉控制能力。",
  },
  "ecommerce-ads": {
    type: "E-commerce Advertising",
    title: "电商广告设计",
    images: ["./assets/image-works/ecommerce-ad-01.jpg", "./assets/image-works/ecommerce-ad-02.jpg"],
    summary: "围绕耳机产品完成深色科技与浅色生活方式两套电商广告视觉。",
    role: "产品卖点提炼 / KV 设计 / 电商排版 / 视觉合成",
    tools: "Photoshop / E-commerce Design / AIGC Image",
    highlight: "同一产品以两种视觉策略表达，兼顾科技感和轻盈生活方式。",
  },
  "movie-poster": {
    type: "Movie Poster",
    title: "电影海报设计",
    images: ["./assets/image-works/movie-poster.jpg"],
    summary: "以悬疑电影《Midnight Signal》为概念进行人物、光影和标题系统设计。",
    role: "概念设定 / 人物视觉 / 海报合成 / 字体排版",
    tools: "Photoshop / AIGC Image / Poster Design",
    highlight: "利用冷色环境、背光轮廓与金色视线建立紧张的悬疑叙事。",
  },
  "winter-campaign": {
    type: "Game Campaign Visual",
    title: "无尽冬日广告视觉",
    images: ["./assets/image-works/winter-ad-cover.jpg"],
    summary: "面向冰雪生存题材游戏制作的横版广告封面，强化世界观、人物与生存氛围。",
    role: "广告封面 / 场景合成 / 氛围设计 / 标题布局",
    tools: "Photoshop / Game Advertising / AIGC Image",
    highlight: "在横向画幅中建立明确的前后景层次，并快速传达冰雪生存题材。",
  },
  "perfume-visuals": {
    type: "Brand / Product Visual",
    title: "香水品牌视觉设计",
    images: ["./assets/image-works/perfume-product.png", "./assets/image-works/perfume-ecommerce-01.jpg", "./assets/image-works/perfume-ecommerce-02.jpg", "./assets/image-works/perfume-ecommerce-03.jpg", "./assets/image-works/perfume-ecommerce-04.jpg"],
    summary: "围绕香水产品建立统一品牌质感，并延展出黑木、柔光、琥珀与暗红果实等系列电商视觉。",
    role: "产品视觉 / 场景设定 / 系列化设计 / 电商延展",
    tools: "Photoshop / AIGC Image / Product Visualization",
    highlight: "一套主产品视觉延展为五张风格统一、气质各异的系列画面。",
  },
};

const filterButtons = document.querySelectorAll(".filter");
const rows = document.querySelectorAll(".work-row");
const previewMedia = document.querySelector("#previewMedia");
const previewType = document.querySelector("#previewType");
const previewTitle = document.querySelector("#previewTitle");
const previewSummary = document.querySelector("#previewSummary");
const openCurrent = document.querySelector("#openCurrent");
const dialog = document.querySelector("#projectDialog");
const dialogMedia = document.querySelector("#dialogMedia");
const dialogType = document.querySelector("#dialogType");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogSummary = document.querySelector("#dialogSummary");
const dialogRole = document.querySelector("#dialogRole");
const dialogTools = document.querySelector("#dialogTools");
const dialogHighlight = document.querySelector("#dialogHighlight");
const dialogActions = document.querySelector("#dialogActions");
const dialogClose = document.querySelector(".dialog-close");

let currentProjectId = "cinematic-opening";

function mediaMarkup(project, mode = "preview") {
  if (project.embed) {
    return `<iframe src="${project.embed}" title="${project.title} 交互式预览" loading="lazy"></iframe>`;
  }

  if (project.video) {
    const controls = mode === "dialog" ? "controls" : "autoplay muted loop";
    const start = project.clipStart ?? 0;
    const end = project.clipEnd ?? "";
    const loopClip = mode === "preview" ? "true" : "false";
    const video = `<video src="${project.video}" ${controls} playsinline preload="metadata" data-start="${start}" data-end="${end}" data-loop-clip="${loopClip}"></video>`;
    if (mode === "dialog" && project.images?.length) {
      return `<div class="project-media-stack">${video}${galleryMarkup(project)}</div>`;
    }
    return video;
  }

  if (project.images?.length) {
    if (mode === "dialog") return galleryMarkup(project);
    return `<img src="${project.images[0]}" alt="${project.title} 项目封面" />`;
  }

  if (project.image) {
    return `<img src="${project.image}" alt="${project.title} 项目预览图" />`;
  }

  return '<div class="generated-preview">AI Document<br />Assistant</div>';
}

function galleryMarkup(project) {
  return `<div class="image-gallery">${project.images
    .map((src, index) => `<a href="${src}" target="_blank" rel="noopener noreferrer"><img src="${src}" alt="${project.title} 作品图 ${index + 1}" loading="lazy" /></a>`)
    .join("")}</div>`;
}

function setPreview(projectId) {
  const project = projects[projectId];
  if (!project) return;

  currentProjectId = projectId;
  previewMedia.innerHTML = mediaMarkup(project);
  initClipVideo(previewMedia);
  previewType.textContent = project.type;
  previewTitle.textContent = project.title;
  previewSummary.textContent = project.summary;

  rows.forEach((row) => {
    row.classList.toggle("is-active", row.dataset.project === projectId);
  });
}

function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  dialogType.textContent = project.type;
  dialogTitle.textContent = project.title;
  dialogSummary.textContent = project.summary;
  dialogRole.textContent = project.role;
  dialogTools.textContent = project.tools;
  dialogHighlight.textContent = project.highlight;
  dialogMedia.innerHTML = mediaMarkup(project, "dialog");
  initClipVideo(dialogMedia);
  const actionLinks = [
    ...(project.link ? [{ label: project.embed ? "全屏查看原型" : "打开 Demo", href: project.link }] : []),
    ...(project.links || []),
  ];
  dialogActions.innerHTML = actionLinks
    .map((link) => {
      if (link.copyText) {
        return `<button class="dialog-link" type="button" data-copy-text="${encodeURIComponent(link.copyText)}">${link.label}</button>`;
      }

      return `<a class="dialog-link" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
    })
    .join("");

  dialog.showModal();
}

rows.forEach((row) => {
  row.addEventListener("mouseenter", () => setPreview(row.dataset.project));
  row.addEventListener("focus", () => setPreview(row.dataset.project));
  row.addEventListener("click", () => openProject(row.dataset.project));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    let firstVisible = null;
    rows.forEach((row) => {
      const categories = row.dataset.category.split(" ");
      const visible = filter === "all" || categories.includes(filter);
      row.hidden = !visible;
      if (visible && !firstVisible) firstVisible = row.dataset.project;
    });

    if (firstVisible) setPreview(firstVisible);
  });
});

openCurrent.addEventListener("click", () => openProject(currentProjectId));

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) dialog.close();
});

dialog.addEventListener("close", () => {
  dialogMedia.innerHTML = "";
});

dialogActions.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy-text]");
  if (!copyButton) return;

  const text = decodeURIComponent(copyButton.dataset.copyText);
  await navigator.clipboard.writeText(text);
  const originalText = copyButton.textContent;
  copyButton.textContent = "已复制";
  setTimeout(() => {
    copyButton.textContent = originalText;
  }, 1200);
});

function initClipVideo(container) {
  const video = container.querySelector("video[data-start]");
  if (!video) return;

  const start = Number(video.dataset.start || 0);
  const end = Number(video.dataset.end || 0);
  const loopClip = video.dataset.loopClip === "true";

  const seekToStart = () => {
    if (Number.isFinite(start) && start > 0) {
      video.currentTime = start;
    }
  };

  video.addEventListener("loadedmetadata", seekToStart, { once: true });
  video.addEventListener("timeupdate", () => {
    if (!end || video.currentTime < end) return;

    if (loopClip) {
      video.currentTime = start;
      video.play();
    } else {
      video.pause();
    }
  });
}

setPreview(currentProjectId);
