<template>
    <div class="row">
        <div v-for="article of articles" :key="article.slug" class="col-md-4 mb-3">
            <div class="card blog-post-card">
                <div class="card-body">
                    <h5 class="card-title"><a class="theme-link" :href="setUrlPost(article.slug)">{{ article.title }}</a></h5>
                    <p class="card-text">{{ article.description }}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
                        {{ formatDateByLocale(article.date) }}</small>
                    <nuxt-link :to="{ path: '/tags/' + article.tags[0] + '/'}" class="box-tags">
                        <span class="badge bg-light text-dark">{{article.tags[0]}}</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        articles: {
            type: Array,
            required: true
        }
    },
    methods: {
        formatDateByLocale(d) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(d).toLocaleDateString('en', options)
        },
        setUrlPost(path) {
            if (!path) {
                return path;
            }
            const url = "/" + path + "/"
            return url;
        }
    },
}
</script>