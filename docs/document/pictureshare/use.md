---
lang: zh-CN
title: Picture Share使用方法
sidebarDepth: 2
date: 2019/3/2 18:45:12
type: post
---

# 如何使用Picture Share

## OneDrive授权

OneDrive作为独属于你的云服务，软件如果想访问相关资源，则必然要获得你的许可。

初次打开软件时，你将看到如下界面

![Welcome](http://storage.live.com/items/51816931BAB0F7A8!8903?authkey=AO7QXpgYo7-5DUU)

点击`开始连接`，软件会启动OneDrive的授权程序。如果一切顺利的话，软件会在你的OneDrive中的`应用`文件夹内建立`Picture Share`文件夹。

在此之后，软件会要求你输入授权码，关于这一步，详情参见[获取OneDrive中的Authkey](https://www.richasy.cn/others/onedrive_authkey.html)。

## 建立分组

当你初次运行软件，并授权之后，软件会自动为你创建一个名为`Default`的分组。

软件采取分组的形式对图片进行管理，你可以按需建立新的分组，在`历史记录`的右侧有一个圆形的 **+** 号，那个按钮就是添加分组的按钮了。

![Pictureshare_groupDialog](http://storage.live.com/items/51816931BAB0F7A8!8875?authkey=AO7QXpgYo7-5DUU)

输入分组名，点击确定，分组建立成功并自动切换。

## 上传图片

图片上传区域非常醒目，就在页面的左侧，那个大框框，不要告诉我你看不到哟~

![Pictureshare_uploadArea](http://storage.live.com/items/51816931BAB0F7A8!8876?authkey=AO7QXpgYo7-5DUU)

这里虽然写着拖拽上传，但实际上你也可以点击打开文件选择器，支持多选。

目前仅支持图片（毕竟是`图床`嘛）。

支持的图片格式有：

- jpg/jpeg

- png

- bmp

- gif

- webp

:::warning
如果当前有上传任务正在进行，那么拖拽或者点击都是无效的
:::

## 分组管理

点击`分组管理`按钮，你能看到当前的分组列表

![Pictureshare_groupManager](http://storage.live.com/items/51816931BAB0F7A8!8877?authkey=AO7QXpgYo7-5DUU)

在这里，你可以对组进行重命名、转移图片、删除分组的操作。

### 重命名

直接在组名的输入框内修改，然后点击后面的确认按钮即可

### 转移图片

点击删除按钮，会弹出一个对话框，提醒你是要删除分组（包括其中的图片）还是先转移图片再删除分组。

![Pictureshare_deleteGroup](http://storage.live.com/items/51816931BAB0F7A8!8878?authkey=AO7QXpgYo7-5DUU)

点击转移图片，再在弹出的对话框中选择你的目标分组，确认后，图片会完成转移，而分组将在转移后删除。

:::tip
如果目标分组是你要删除的分组，则软件会以`骚操作`为由拒绝执行这次删除任务
:::

### 删除分组

如上所述，你可以选择先转移图片，再删除分组。但如果你打算连组里的图片一并删了，那么OK，直接点击`删除`即可。

## 外链分享

当图片上传成功后，则外链就已经自动生成了。

点击对应图片，会弹出图片的详情。在这里你能看到图片的链接。

![Pictureshare_PictureInfo](http://storage.live.com/items/51816931BAB0F7A8!8879?authkey=AO7QXpgYo7-5DUU)

为了方便你的使用，我还加了两个按钮，可以帮助你生成**Markdown图片链接**和**Picture标签**

## 图片重命名

:::tip
修改图片名不会影响链接
:::

重命名有两种方式：

1. 打开单张图片，修改文件名后，点击`确认`按钮保存.

2. 打开设置界面，有`批量添加图片前缀`的功能。在这里指定组，并在后面的输入框中输入一个前缀，点击确认后，软件将会为该组内所有图片添加统一的前缀。

![settingDialog](http://storage.live.com/items/51816931BAB0F7A8!8885?authkey=AO7QXpgYo7-5DUU)

虽然软件以分组来管理图片，但在OneDrive文件夹中，图片则并没有按照不同的分组来建立文件夹并保存。

所以请对图片保持一个良好的命名习惯，给图片加上一些前缀，以保证图片名称不会冲突。

如果上传同名图片，则软件将会替换旧图片。

## 多端同步

考虑到多台设备连接到同一个OneDrive的情况，我在应用文件夹内新建了一个名为`LastAsyncTime`的文件。这个文件里记录着上一次同步的时间，

软件在启动时会进行同步检查，如果不匹配，则自动同步云端的数据库

这一切过程是自动进行的，考虑到不同地区网络情况不同，有时可能会出现软件初始化时间很长的情况，请勿见怪。

## 快捷操作

在打开图片详情时：

1. 按ESC可以关闭图片详情窗格

2. 左右方向键可以切换上一张/下一张

在主页时：

1. 按住Ctrl键点击图片，直接复制URL

2. 按住Shift键点击图片，直接复制Markdown链接

3. 按住Alt键点击图片，直接复制Picture标签

## 其它问题

### 修改AuthKey

你可以在设置（软件右上角的齿轮按钮）中修改记录的AuthKey，修改之后，软件会提醒你是否将新的AuthKey应用于之前上传的图片中，如果有必要，请选择`是`。

### 单张图片删除

打开图片详情后可以看到红色的删除按钮，点击即可删除该图片。

删除图片前请确保该图片没有任何网络引用，否则一旦删除，则链接失效，图片将无法访问。