__NUXT_JSONP__("/luu-y-khi-su-dung-save_post-de-luu-custom-field-trong-wordpress", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:[{article:{slug:"luu-y-khi-su-dung-save_post-de-luu-custom-field-trong-wordpress",description:"save_post là action được kích hoạt bất cứ khi nào đăng bài mới và cập nhật post theo mọi hình thức đều sẽ đi qua action này.",id:580,title:"Lưu ý khi sử dụng save_post để lưu post meta trong wordpress",date:"2019-12-03T00:00:00.000Z",author:"Ime Share",layout:"post",permalink:"\u002Fluu-y-khi-su-dung-save_post-de-luu-custom-field-trong-wordpress\u002F",post_views_count:["87"],categories:[i],tags:[h],authors:[{name:"anhkevin"}],toc:[],body:{type:"root",children:[{type:b,tag:j,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"save_post"}]},{type:a,value:" là action được kích hoạt bất cứ khi nào đăng bài mới và cập nhật post theo mọi hình thức đều sẽ đi qua action này."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{style:"font-size: 14pt;"},children:[{type:a,value:"Vậy vấn đề ở đây là gì?"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"VD:"}]},{type:a,value:" Sử dụng đoạn code phía dưới để thêm hay cập nhật dữ liệu post meta cho post type"}]},{type:a,value:e},{type:b,tag:p,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,"language-php"]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[d,"keyword"]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"function-definition",q]},children:[{type:a,value:"update_post"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"{"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F[START][CODING] - post meta"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"operator"]},children:[{type:a,value:"="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"global"]},children:[{type:a,value:"$_POST"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"'link_download'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"update_post_meta"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"'_link_download'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F[END][CODING] - post meta"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"}"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"add_action"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"'save_post'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,u]},children:[{type:a,value:"'update_post'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Khi đó mọi hình thức update đều vào action ‘save_post’ này."},{type:b,tag:L,props:{},children:[]},{type:a,value:"\nTrường hợp sử dụng chức năng khác để update dữ liệu nhưng chức năng đó không có dữ liệu custom field, chẳng hạn như sử dụng chức năng \"Quick edit\", \"Revision\" =\u003E lúc này không có dữ liệu post meta, nếu bạn chỉ get dữ liệu _POST về rồi update thì lúc này dữ liệu sẽ bị update thành dữ liệu trống"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"- Trường hợp này có nhiều cách giải quyết"}]}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:a,value:e},{type:b,tag:N,props:{},children:[{type:a,value:"Kiểm tra isset trước khi xử lý"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:p,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,"language-text"]},children:[{type:b,tag:H,props:{},children:[{type:a,value:"if(isset($_POST['link_download'])) {\n...\n}\n\n"}]}]}]},{type:a,value:e},{type:b,tag:M,props:{start:O},children:[{type:a,value:e},{type:b,tag:N,props:{},children:[{type:a,value:"Check thêm điều kiện trường hợp ở màn hình add hoặc edit mới xử lý"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"…"},{type:b,tag:L,props:{},children:[]},{type:a,value:"\ntùy vào mục đích thì sẽ có cách xử lý riêng"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"=\u003E Bài viết này chỉ là lưu ý khi sủ dụng save_post để cập nhật bất kỳ dữ liệu của post type."}]}]},{type:a,value:e},{type:b,tag:p,props:{id:"gtx-trans",style:"position: absolute; left: 150px; top: 264px;"},children:[{type:a,value:P},{type:b,tag:p,props:{className:["gtx-trans-icon"]},children:[{type:a,value:P}]},{type:a,value:e}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fluu-y-khi-su-dung-save_post-de-luu-custom-field-trong-wordpress",extension:".md",createdAt:Q,updatedAt:Q}}],fetch:{"NavRight:0":{listPost:[{tags:[C]},{tags:[n]},{tags:[n,"Smartgit"]},{tags:[v,"Apache"]},{tags:[k]},{tags:["Amazon"]},{tags:["Linux"]},{tags:[o]},{tags:[h]},{tags:[i]},{tags:[n]},{tags:[i]},{tags:[C]},{tags:[n]},{tags:[w]},{tags:[w]},{tags:[x]},{tags:["Regex"]},{tags:[v]},{tags:[x]},{tags:[h]},{tags:[o]},{tags:["MySQL"]},{tags:[h]},{tags:[i]},{tags:[i]},{tags:[k]},{tags:[i]},{tags:[h]},{tags:[k]},{tags:[o]},{tags:[i]},{tags:["VSCode"]},{tags:[v]},{tags:[o]},{tags:[h]},{tags:[x]},{tags:[w]},{tags:[k]},{tags:[l]},{tags:[l]},{tags:[l]},{tags:[l]},{tags:[l]},{tags:[k]},{tags:[h]},{tags:[h]},{tags:[h]}],listTags:[[h,8],[i,6],[k,R],[l,R],[n,S],[o,S],[v,D],[w,D],[x,D],[C,O]]}},mutations:[]}}("text","element","span","token","\n","punctuation"," ","Wordpress","PHP","p","Flutter","Vue","strong","GIT","CSS","div","function","variable","\n    ","string","single-quoted-string","Xampp","JavaScript","Htaccess","(",")",";",",","Windows",3,"nuxt-content-highlight","pre","line-numbers","code","$post_id","comment","$link_download","br","ol","li",2,"\n  ","2021-08-03T14:27:36.276Z",5,4)));