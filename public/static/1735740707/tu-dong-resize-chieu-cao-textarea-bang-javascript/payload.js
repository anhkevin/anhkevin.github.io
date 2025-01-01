__NUXT_JSONP__("/tu-dong-resize-chieu-cao-textarea-bang-javascript", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{article:{slug:"tu-dong-resize-chieu-cao-textarea-bang-javascript",description:"Thêm CSS cho textarea để tự động resize chiều cao textarea bằng javascript",id:391,title:"Tự động resize chiều cao textarea bằng javascript",date:"2019-10-29T00:00:00.000Z",author:"Ime Share",layout:"post",permalink:"\u002Ftu-dong-resize-chieu-cao-textarea-bang-javascript\u002F",post_views_count:["107"],categories:[h],tags:[h],authors:[{name:"anhkevin"}],toc:[],body:{type:"root",children:[{type:b,tag:i,props:{id:"span-stylecolor-0000001-thêm-css-cho-textareaspan"},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#span-stylecolor-0000001-th%C3%AAm-css-cho-textareaspan",tabIndex:l},children:[{type:b,tag:e,props:{className:[m,n]},children:[]}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{style:o},children:[{type:a,value:"1. Thêm CSS cho textarea"}]}]}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"textarea { \n    resize: none; \n    overflow: hidden; \n    box-sizing: border-box; \n}\n"}]}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"resize"}]},{type:a,value:": none =\u003E không cho thay đổi chiều ngang textarea"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"overflow"}]},{type:a,value:": hidden =\u003E làm ẩn thanh scroll"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"box-sizing"}]},{type:a,value:": border-box =\u003E thiết lập cho height sẽ bao gồm cho cả phần nội dung, padding và border nhưng không bao gồm margin"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{id:"span-stylecolor-0000002-đoạn-javascript-xử-lý-thay-đổi-chiều-cao-textareaspan"},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#span-stylecolor-0000002-%C4%91o%E1%BA%A1n-javascript-x%E1%BB%AD-l%C3%BD-thay-%C4%91%E1%BB%95i-chi%E1%BB%81u-cao-textareaspan",tabIndex:l},children:[{type:b,tag:e,props:{className:[m,n]},children:[]}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{style:o},children:[{type:a,value:"2. Đoạn javascript xử lý thay đổi chiều cao textarea"}]}]}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"var textarea = document.querySelectorAll('textarea'); \ntextarea.forEach(function(item) { \n    item.style.height = item.scrollHeight + \"px\"; \n    if (item.clientHeight \u003C item.scrollHeight) { \n        item.style.height = (item.scrollHeight * 2 - item.clientHeight) + \"px\"; \n    } \n});\n"}]}]}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"clientHeight"}]},{type:a,value:": chiều cao hiển thị tại thời điểm đó của Textarea"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"scrollHeight"}]},{type:a,value:": chiều cao tối thiểu hiển thị tất cả nội dung trong Textarea mà không cần scroll"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"=\u003E Nếu hiển thị hết nội dung trong Textarea mà không cần scroll thì scrollHeight bé hơn hoặc bằng clientHeight"},{type:b,tag:w,props:{},children:[]},{type:a,value:"\n(scrollHeight * 2 - clientHeight) = scrollHeight + (scrollHeight - clientHeight)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Tham khảo ví dụ dưới:"}]},{type:b,tag:w,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{style:"color: #607d8b;"},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"(Nếu không hiển thị kết quả trong "},{type:b,tag:d,props:{},children:[{type:a,value:"Result"}]},{type:a,value:" hãy bấm nút "},{type:b,tag:d,props:{},children:[{type:a,value:"Rerun"}]},{type:a,value:" phía dưới)"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"``"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Ftu-dong-resize-chieu-cao-textarea-bang-javascript",extension:".md",createdAt:x,updatedAt:x}}],fetch:{},mutations:[]}}("text","element","\n","strong","span","li","p","JavaScript","h5","a","true",-1,"icon","icon-link","color: #000000;","div","nuxt-content-highlight","pre","language-text","line-numbers","code","ul","br","2025-01-01T14:10:51.680Z")));