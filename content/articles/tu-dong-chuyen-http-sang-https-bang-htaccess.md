---
id: 156
title: Tự động chuyển http sang https bằng htaccess
description: Để sử dụng https thì bạn phải cài SSL, vậy SSL là gì? SSL viết tắt là Secure Sockets Layer. Đây là một tiêu chuẩn an ninh công nghệ toàn cầu tạo ra liên kết giữa máy chủ web và trình duyệt.
date: 2019-10-09
author: Ime Share
layout: post
permalink: /tu-dong-chuyen-http-sang-https-bang-htaccess/
post_views_count:
  - "68"
categories: [Orther]
tags: [Htaccess]
authors:
  - name: 'anhkevin'
---
**<span style="font-size: 13pt;">Để sử dụng https thì bạn phải cài SSL, vậy SSL là gì?</span>**  
**SSL** viết tắt là Secure Sockets Layer. Đây là một tiêu chuẩn an ninh công nghệ toàn cầu tạo ra liên kết giữa máy chủ web và trình duyệt. Liên kết này đảm bảo tất cả dữ liệu trao đổi giữa máy chủ web và trình duyệt luôn được bảo mật và an toàn, tạo độ tin cây cho người dùng truy cập và nhập thông tin trên web của bạn.

**Chèn đoạn mã dưới đây vào file .htaccess**

```shell
<IfModule mod_rewrite.c>
	RewriteEngine on
	RewriteCond %{HTTPS} !=on [NC]
	RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
```