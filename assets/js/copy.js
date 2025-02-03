document.addEventListener('DOMContentLoaded', function () {
  let codeBlocks = document.getElementsByTagName('code');

  for (let i = 0; i < codeBlocks.length; i++) {
    let codeBlock = codeBlocks[i];

    // 创建复制按钮
    let button = document.createElement('button');
    button.innerHTML = '<i class="fa fa-clone" aria-hidden="true"></i>';
    button.classList.add('copy-button'); // 添加 CSS 类

    // 将按钮插入到 <code> 元素后面
    codeBlock.parentNode.insertBefore(button, codeBlock.nextSibling);

    // 初始化 Clipboard.js
    let clipboard = new ClipboardJS(button, {
      target: function (trigger) {
        return trigger.previousSibling;
      }
    });
    // 复制失败事件
    clipboard.on('error', function (e) {
      console.error('复制失败:', e.action);
    });
  }
});
