/**
 * 记录 iframe 操作过程中遇到的坑
 */

//参考地址 https://stackoverflow.com/questions/43453213/force-keyup-event-on-iframe

//问题描述，如何去触发子iframe中的绑定在子元素上的方法
//解决方法就是在iframe 中使用$ 利如 parentIframe[0].contentWindow.$('#aa').tirgger('click');



