---
title: 页面使用说明
lang: zh
date: 2020/8/1 11:40:23
type: post
---

## 页面使用说明

:::tip
页面(Pages)是《RSS追踪》的特色功能，不管您选择哪一个RSS服务，均可以使用。
:::

### 简介

如果说RSS可以帮助你将所需信息从种类繁多的APP中提取出来，那么`页面`则可以再进一步，对大量的订阅源进行二次信息提取，打破源与源之间的隔阂，让你不再错过自己想要的内容。

### 添加与修改页面

点击侧边栏账户卡片的➕按钮，可以添加页面，界面如下：

![](https://i.loli.net/2020/08/01/BokThRDZF3ymrJc.png)

页面是对目前已有的RSS订阅源进行操作，您需要提供一个页面的名字（顶部），在下方的订阅源列表中选择自己想抽取信息的订阅源，点击即可添加，选中的订阅源会横向显示在备选列表的上方。

在选中订阅源列表中单击单项则可以去除。

下方的过滤条件包含两种筛选方式：

- **包含内容**：支持正则表达式，简单的关键词筛选可用短竖线`|`进行区隔
- **排除内容**：同上，如果排除内容和包含内容有冲突，则优先排除

这里的信息过滤是页面的关键，它可以帮助你打破订阅源之间的藩篱，将同类信息筛出来以供阅读。

表达式后面的√按钮可用于检查当前表达式的有效性，建议输入完成后测试一下

### RSS服务适配

考虑到用户可能会在不同的RSS服务之间切换，应用在读取页面的配置时会与本地的订阅源集合相比对，以本地的订阅源为准。

因为本地的订阅源内容包含了一些特殊信息（比如ID），在进行相关操作时需要这些内容才能顺利完成与在线RSS服务的交互。

### 同步

由于是应用的特色功能，不属于其它RSS服务的范畴，所以如果您需要将您的页面配置同步到其它设备（仍需要使用RSS追踪），则您需要授权应用访问您的OneDrive服务。

在设置中选择服务设置，登录OneDrive服务即可，应用会主动进行同步（初次同步会用云端数据替换本地数据）