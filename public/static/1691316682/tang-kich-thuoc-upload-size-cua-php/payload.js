__NUXT_JSONP__("/tang-kich-thuoc-upload-size-cua-php", (function(a,b,c,d,e,f,g,h,i,j,k,l){return {data:[{article:{slug:"tang-kich-thuoc-upload-size-cua-php",description:"Khi tôi up 1 file lớn hơn 30MB thì nó không báo lỗi gì cả và refresh lại trang nhưng không lưu vào database. Vấn đề là gì và do đâu?",id:274,title:"Tăng kích thước upload size của PHP",date:"2019-10-12T00:00:00.000Z",author:"Ime Share",layout:"post",permalink:"\u002Ftang-kich-thuoc-upload-size-cua-php\u002F",post_views_count:["53"],categories:[h],tags:[h],authors:[{name:"anhkevin"}],toc:[],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:b,tag:i,props:{style:j},children:[{type:a,value:"Tôi từng gặp lỗi liên quan đến thiết lập max_size trên php như sau:"}]}]}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Khi tôi up 1 file lớn hơn 30MB thì nó không báo lỗi gì cả và refresh lại trang nhưng không lưu vào database"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Sau đó tôi up 1 file tầm 26MB thì nó lại báo lỗi \"Do bạn up file lớn hơn quy định …. gì gì đó\""}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Nhưng tôi up 1 file dưới 18MB thì OK"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"=\u003E Lúc đầu không hiểu 26MB và 30MB thì liên quan gì nhau?"},{type:b,tag:g,props:{},children:[]},{type:a,value:"\nSau đó tôi tìm hiểu ra vấn đề là do thiết lập giới hạn max_size trên php.ini như sau:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"upload_max_filesize = 20M\npost_max_size = 30M\n\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Do trên code đã check nếu upload file lớn hơn thiết lập "},{type:b,tag:d,props:{},children:[{type:a,value:"upload_max_filesize"}]},{type:a,value:" trên php.ini thì báo lỗi, nhưng khi "},{type:b,tag:d,props:{},children:[{type:a,value:"$_POST"}]},{type:a,value:" vượt quá thiết lập "},{type:b,tag:d,props:{},children:[{type:a,value:"post_max_size"}]},{type:a,value:" trên php.ini thì lúc này "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" lại bằng 0"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:b,tag:i,props:{style:j},children:[{type:a,value:"Cách giải quyết:"}]}]},{type:b,tag:g,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cách 1:"}]},{type:a,value:" Có thể thiết lập lại "},{type:b,tag:d,props:{},children:[{type:a,value:"php.ini"}]},{type:a,value:" trên server cho 2 thông số này bằng nhau"},{type:b,tag:g,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cách 2:"}]},{type:a,value:" Nếu "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" = 0 thì thông báo ABC gì đó"}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Ftang-kich-thuoc-upload-size-cua-php",extension:".md",createdAt:l,updatedAt:l}}],fetch:{},mutations:[]}}("text","element","\n","strong","p","li","br","PHP","span","font-size: 13pt;","count($_POST)","2023-08-06T10:10:09.351Z")));