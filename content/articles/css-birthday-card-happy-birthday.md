---
title: 3D CSS Birthday Card - Happy Birthday
description: How to make "3D CSS Birthday Card" using HTML/CSS
date: 2023-05-22
categories: [CSS]
tags: [CSS]
math: true
authors:
  - name: 'anhkevin'
---

<div class="text-center">
  <iframe width="800" height="500" src="https://www.youtube.com/embed/w9FvnLwV-so?autoplay=1" title="YouTube video player" allow="autoplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

***
**HTML:**
```html
<div class="birthday-card">
    <!-- Inner -->
    <div class="cover-inner">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5n439L9Qd0vjVe_SJd2TteNwCAIRTXqkJXUbw6jORxlq7S1XO7NLzPRUi-RSiA3suzW8&usqp=CAU" width="100%">
    </div>

    <!-- Outer -->
    <div class="cover-outer">
        <img src="https://images.esellerpro.com/3274/I/318/37/lrgscaleAO002.jpg" width="100%">
    </div>

    <!-- Text -->
    <div class="text">
        <p class="title">
            Happy Birthday! <br> TianDev
        </p>
        <p>
            I hope your special day will bring you lots of happiness,
            love, and fun.
            You deserve them a lot. Enjoy!
        </p>
        <p>Hope your day goes great!</p>
    </div>
</div>
```

***
**CSS:**
```css
body {
  background: #fbdcdc;
  height: 100%;
  margin: 0;
}

.birthday-card {
  position: relative;
  width: 300px;
  height: 395px;
  border: 10px solid #ef5050;
  margin: 60px auto 0 auto;
  -webkit-box-shadow: inset 10px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: inset 10px 0px 15px 0px rgba(0, 0, 0, 0.1);
  background-image: -webkit-gradient(linear, left top, left bottom, from(white), to(rgba(255, 255, 255, 0.5))), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxBT3o0SFFDbVdEa3x8ZW58MHx8fHw%3D&w=1000&q=80");
  background-image: linear-gradient(to bottom, white, rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxBT3o0SFFDbVdEa3x8ZW58MHx8fHw%3D&w=1000&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.birthday-card .text {
  width: 80%;
  height: 80%;
  margin: auto;
  font-family: 'Nobile', sans-serif;
}

.birthday-card .text > p {
  font-size: 1.1em;
  color: #331717;
  list-style: 1.4;
  font-style: italic;
  text-align: center;
  margin: 30px auto 0 auto;
}

.birthday-card .text .title {
  font-size: 1.5em;
  margin: 60px auto 60px auto;
}

.birthday-card .cover-outer {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: -10px 0 0 -10px;
  border: 10px solid #ef5050;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
  -webkit-transform: perspective(800px) rotateY(0deg);
          transform: perspective(800px) rotateY(0deg);
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
}

.birthday-card .cover-outer img {
  -webkit-box-shadow: 0px 6px 11px 7px rgba(0, 0, 0, 0.22);
          box-shadow: 0px 6px 11px 7px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
}

.birthday-card .cover-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 10px solid #ef5050;
  background-color: #ef5050;
  margin: -10px 0px 0 -10px;
  -webkit-backface-visibility: visible;
          backface-visibility: visible;
  -webkit-filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
  -webkit-transform: perspective(800px) rotateY(0deg);
          transform: perspective(800px) rotateY(0deg);
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  overflow: hidden;
}

.birthday-card .cover-inner img {
  -webkit-transform: rotateY(170deg);
          transform: rotateY(170deg);
}

.birthday-card:hover .cover-outer {
  -webkit-transform: perspective(800px) rotateY(-170deg);
          transform: perspective(800px) rotateY(-170deg);
}

.birthday-card:hover .cover-inner {
  -webkit-transform: perspective(800px) rotateY(-170deg);
          transform: perspective(800px) rotateY(-170deg);
  -webkit-box-shadow: 7px 0 5px 0 rgba(0, 0, 0, 0.3), inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 7px 0 5px 0 rgba(0, 0, 0, 0.3), inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1);
}
```
