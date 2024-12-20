---
id: 729
title: Javascript new Date không hợp lệ trên IE và Safari
date: 2019-12-27
author: Ime Share
description: 'Trong Javascript có cung cấp một đối tượng xử lý thời gian là <strong>new Date()</strong>, đây là đối tượng sử dụng rất nhiều để xử lý thời gian ngoài frontend.'
layout: post
permalink: /javascript-new-date-khong-hop-le-tren-ie-va-safari/
post_views_count:
  - "113"
categories: [JavaScript]
tags: [JavaScript]
authors:
  - name: 'anhkevin'
---
Trong Javascript có cung cấp một đối tượng xử lý thời gian là **new Date()**, đây là hàm được cho là sử dụng rất nhiều để xử lý thời gian ngoài frontend.

Tôi đã từng gặp phải một lỗi với IE và Safari khi tôi đang làm việc với hàm **Date()** của JavaScript.  
**Hàm có nội dung như sau:**

```javascript
<script type="text/javascript">
	var valDate = "2019-12-26 20:10:06";
	var getDate = new Date(valDate);
</script>
```

- Đoạn code trên chạy trên Chrome thì chạy OK  
- Nhưng khi chạy trên IE và Safari thì bị lỗi "Invalid Date" or "NaN"

**Kinh nghiệm:** Không nên sử dụng format "yyyy-mm-dd hh:mm:ss" cho hàm **new Date()** của Javascript

**Giải pháp:** Ngày và giờ cho phân cách bằng chữ T đó là yyyy-mm-ddThh:mm:ss

```javascript
<script type="text/javascript">
	var valDate = "2019-12-26T20:10:06";
	var getDate = new Date(valDate);
</script>
```

=> Nó đã hoạt động OK với format trên trong các trình duyệt IE, Safari, Chrome, Firefox.