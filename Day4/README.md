# primary_code
前端初级阶段代码

#Day1
## 综合案例1-新闻网页案例
## 效果图

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5bb96ebc4304b048f1969b28f3b7ec9~tplv-k3u1fbpfcp-watermark.image?)
### 1、 a标签去下划线
` a{
text-decoration: none;
}`
### 2、 首行缩进
`.content {
    text-indent: 2em;
}
`
### 3、 两个盒子的布局（创新）
#### 注意必须要设计大盒子大小（里面有内容）
`#wide {
    width: 800px;
    margin: 0 auto;
    /* 让当前新闻整体div大盒子水平居中 */
}
`
### 4、 字体设计
#### (文字水平居中)
`text-align: center;`
#### 字体加粗
`font-weight:700;`

## 综合案例2-卡片居中案例
## 效果图

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/469f1eb93c074469b2e0564201131056~tplv-k3u1fbpfcp-watermark.image?)
### 1、 背景颜色
`body{background-color: #f5f5f5;
    /* 可以通过给body标签设置背景颜色完成设置浏览器的背景颜色 */
}
`
### 2、文字设计
#### div是块级标签通过height和font-size调整行间距和字体大小
` text-align: center;
    /* 让内部的img和文本类型的元素水平居中 */`
    
