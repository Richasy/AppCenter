---
title: 订阅源使用说明
lang: zh
date: 2020/8/1 11:35:23
type: post
---

## 订阅源使用说明

:::tip
不同的RSS服务对订阅源操作的支持程度不尽相同，下面的操作可能你所选的服务并不支持，详情请查看[服务支持列表](./service.html)
:::

### 订阅源的搜索与添加

在进入主界面后，如果您需要添加订阅源，可以点击账户卡片右下角的➕按钮，选择添加订阅源：

![](https://i.loli.net/2020/08/01/ZqveOC2EPd1koJx.png)

您可以直接输入订阅源的地址及其名称，如果不填名称，则为订阅源的默认名称。

抑或是您可以选择使用Feedly提供的RSS源搜索服务，使用该服务要求您翻墙，否则是搜不到任何结果的。

使用Feedly搜索时可以一次添加多个订阅源。

:::warning
**在 `应用设置->基础设置` 中您还可以导入OPML，但该导入过程有以下限制：**

1. 所选服务支持对分类、订阅源的添加操作，并且在非OneDrive服务中，只有订阅源列表为空时才支持导入OPML，否则请在所选RSS服务中进行操作
2. 使用OneDrive时，导入的OPML会取代原有的订阅源列表
:::

### 订阅源的修改与删除

右键单击（触屏为长按）订阅源，会弹出二级菜单，选择`修改`即可对订阅源进行修改，目前仅支持修改订阅源名称。

![](https://i.loli.net/2020/08/01/yrisaNdh8Fx165u.png)

同样的，您也可以在菜单中选择`删除`，意味着您取消订阅。

`移动`是一项复合操作，在选择目标分类后，它会先将订阅源从当前分类中删除，并将其添加到新的分类中。

### 其它操作

你也发现了，二级菜单中还有一些其它的选项。

- **设置已读**：应用对调用服务对应的功能，将该订阅源下的所有文章设置为已读。
- **添加到通知列表**：应用本身具备新文章的通知功能，但考虑到实际需求，并不是所有的订阅源都需要通知，您可以将您需要时刻关注的订阅源添加进通知列表，应用会每隔15分钟检查一次内容，如果有更新会提醒你。
- **添加到全文列表**：有些订阅源的文章只包含摘要，尽管在阅读界面提供了获取全文的按钮，但对于那些只提供了摘要的订阅源来说，您可以将其加入全文列表，这样每次在打开该订阅源内的文章时，都会获取网页的内容并将其转化为可读文本。
- **设为首页**：您可以将订阅源或页面设置为首页，这样每次在打开应用时，都会默认打开该订阅源并获取相应内容。

### 分类与订阅源的未读计数

:::tip
OneDrive的未读计数显示比较特殊，由于没有一个一直运行着的服务器进行统计，所以你必须要打开`自动缓存`设置项，且应用已经缓存过至少一次的数据后才会显示未读计数
:::

部分RSS服务提供了对应的接口，应用会进行相应的显示，但如果没提供，则不会显示未读计数。

当然，有时候这个数字可能有一点奇怪，比如文章列表只显示了30篇文章，但是未读计数却显示有500+，这是因为该计数还统计了过去的文章（可能是RSS服务自己缓存的），这个看平台。