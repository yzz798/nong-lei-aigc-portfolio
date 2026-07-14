const sampleText = `设备首次使用前请先连接电源  然后长按开机键3秒
如果屏幕无反应 请检查电源线是否插紧

校准流程：
1进入设置
2选择系统校准
3等待设备自动检测
注意不要在校准过程中移动设备

清洁说明   使用干燥软布擦拭外壳  不要使用酒精或腐蚀性液体
如果设备连续报警 请先重启设备 若仍然报警 联系技术支持`;

const sourceText = document.querySelector("#sourceText");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const taskBadge = document.querySelector("#taskBadge");
const qualityBadge = document.querySelector("#qualityBadge");
const loadSample = document.querySelector("#loadSample");
const copyResult = document.querySelector("#copyResult");
const downloadResult = document.querySelector("#downloadResult");
const actionButtons = document.querySelectorAll("[data-action]");

sourceText.value = sampleText;

loadSample.addEventListener("click", () => {
  sourceText.value = sampleText;
  runTask("clean");
});

actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    actionButtons.forEach((item) => item.classList.remove("is-primary"));
    button.classList.add("is-primary");
    runTask(button.dataset.action);
  });
});

copyResult.addEventListener("click", async () => {
  await navigator.clipboard.writeText(resultText.textContent);
  copyResult.textContent = "已复制";
  setTimeout(() => {
    copyResult.textContent = "复制";
  }, 1200);
});

downloadResult.addEventListener("click", () => {
  const blob = new Blob([resultText.textContent], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ai-document-assistant-output.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});

function runTask(action) {
  const input = sourceText.value.trim();

  if (!input) {
    updateResult("请输入文档", "Empty", "请先在左侧输入需要整理的文档。");
    return;
  }

  const selectedAction = action === "route" ? routeTask(input) : action;
  const clean = cleanText(input);
  const actions = {
    clean: {
      title: "清洗文本",
      badge: "Document Cleansing",
      output: clean,
    },
    summary: {
      title: "生成摘要",
      badge: "Summarization",
      output: buildSummary(clean),
    },
    faq: {
      title: "生成 FAQ",
      badge: "FAQ Generation",
      output: buildFaq(clean),
    },
    manual: {
      title: "生成用户手册",
      badge: "Manual Drafting",
      output: buildManual(clean),
    },
  };

  const result = actions[selectedAction] || actions.clean;
  const title = action === "route" ? `智能判断：${result.title}` : result.title;
  updateResult(title, result.badge, result.output);
}

function updateResult(title, badge, output) {
  resultTitle.textContent = title;
  taskBadge.textContent = badge;
  qualityBadge.textContent = "Local PoC Demo";
  resultText.textContent = output;
}

function cleanText(text) {
  return text
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/([。！？；：])\s+/g, "$1\n")
    .replace(/(\d+)\s*([^\d\s])/g, "$1. $2")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map(addPunctuation)
    .join("\n");
}

function addPunctuation(line) {
  if (/[:：]$/.test(line) || /[。！？；]$/.test(line)) return line;
  if (/^\d+\./.test(line)) return `${line}。`;
  return `${line}。`;
}

function splitSentences(text) {
  return text
    .replace(/\n/g, "。")
    .split(/[。！？；]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 3);
}

function buildSummary(text) {
  const sentences = splitSentences(text);
  const keywords = ["需要", "请", "注意", "流程", "步骤", "检查", "选择", "等待", "联系", "不要", "如果"];
  const scored = sentences
    .map((sentence, index) => ({
      sentence,
      index,
      score: keywords.reduce((sum, keyword) => sum + (sentence.includes(keyword) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 5)
    .sort((a, b) => a.index - b.index);

  const selected = scored.length ? scored : sentences.slice(0, 5).map((sentence, index) => ({ sentence, index }));
  return ["文档摘要：", ...selected.map((item, index) => `${index + 1}. ${item.sentence}。`)].join("\n");
}

function buildFaq(text) {
  const sentences = splitSentences(text);
  const startup = sentences.find((item) => /首次|开机|连接|电源/.test(item));
  const calibration = sentences.find((item) => /校准|设置|检测/.test(item));
  const cleaning = sentences.find((item) => /清洁|擦拭|酒精|腐蚀/.test(item));
  const issue = sentences.find((item) => /无反应|报警|重启|技术支持|如果/.test(item));

  const faq = [
    ["首次使用设备前需要做什么？", startup || "请先检查设备、电源和基础连接状态。"],
    ["如何完成设备校准？", calibration || "进入系统设置后选择校准功能，并等待设备自动检测完成。"],
    ["设备应该如何清洁？", cleaning || "建议使用干燥软布清洁，避免使用腐蚀性液体。"],
    ["遇到异常情况怎么办？", issue || "请先检查连接并尝试重启，问题仍未解决时联系技术支持。"],
  ];

  return ["FAQ：", ...faq.map(([q, a], index) => `Q${index + 1}：${q}\nA${index + 1}：${a}。`)].join("\n\n");
}

function buildManual(text) {
  const sentences = splitSentences(text);
  const steps = sentences.filter((item) => /进入|选择|等待|连接|长按|检查/.test(item));
  const cautions = sentences.filter((item) => /注意|不要|避免|禁止/.test(item));
  const troubleshooting = sentences.filter((item) => /如果|无反应|报警|重启|技术支持/.test(item));

  return [
    "用户手册草稿",
    "",
    "一、适用场景",
    "本说明适用于设备首次使用、基础校准、日常清洁和异常处理。",
    "",
    "二、操作步骤",
    ...(steps.length ? steps : sentences.slice(0, 4)).map((item, index) => `${index + 1}. ${item}。`),
    "",
    "三、注意事项",
    ...(cautions.length ? cautions : ["请在操作过程中保持设备稳定，并避免使用不合适的清洁液体。"]).map(
      (item, index) => `${index + 1}. ${item}。`,
    ),
    "",
    "四、异常处理",
    ...(troubleshooting.length ? troubleshooting : ["如设备无法正常工作，请检查连接状态，重启后仍异常则联系技术支持。"]).map(
      (item, index) => `${index + 1}. ${item}。`,
    ),
  ].join("\n");
}

function routeTask(text) {
  const lower = text.toLowerCase();
  if (/faq|问答|问题|q&a/.test(lower)) return "faq";
  if (/手册|说明书|操作指南|manual/.test(lower)) return "manual";
  if (/摘要|总结|概括|summary/.test(lower)) return "summary";
  if (/乱|清洗|格式|空行|preprocess|clean/.test(lower)) return "clean";
  return text.length > 220 ? "summary" : "clean";
}

runTask("clean");
