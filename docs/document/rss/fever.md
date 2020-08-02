---
title: Fever 说明
lang: zh
date: 2020/8/1 11:32:23
type: post
---

## Fever 说明

Fever是一种API标准，并不是RSS服务。2016年年底，该服务开发者发布声明表示不再继续开发。但由于其实用性，现在有不少RSS服务还在继续使用该API标准公开对外接口。

适配该标准的RSS服务有[TinyTinyRSS](https://tt-rss.org/), [FreshRSS](https://freshrss.org/)等。

Fever通常的表现是能读不能写，添加分类，添加订阅源的操作您都需要在您部署的RSS服务中进行。

而且通过Fever回传的数据只包含未读内容，为了保证用户体验，应用会进行文章的本地缓存。但是对于初次请求，则无法获取以前的已读文章。

如果您在不同端阅读Fever的内容发现有些文章没有同步，就是这个原因（您已读过）。

---

在RSS Stalker中配置Fever，和您在其它应用中的配置并无二致，您需要提供以下信息：

**域名**

通常适配Fever的RSS服务是部署在自有服务器上的，您需要提供服务器对应的网址或IP地址，在您部署RSS服务后，不同的RSS服务会提供不同的Fever API地址，这个您需要根据自己部署的服务来填写。常见的TTRSS和FreshRSS的域名大致如下：

- TinyTinyRSS: https://mydomain.com/plugins/fever
- FreshRSS: https://mydomain.com/api/fever.php

**用户名**

在其他的应用上这里可能是邮箱，不过意思是一样的，就是您登录RSS服务时所使用的用户名，或者是您在服务中设置的对外账户的用户名，比如TinyTinyRSS默认是`admin`。

**密码**

该密码和用户名相类，是您登录时使用的密码。