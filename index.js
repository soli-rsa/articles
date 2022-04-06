import { createApp, reactive } from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/dist/petite-vue.es.js";

function Header() {
    return {
        // Resource Properties 
        $template : '#header-template',
        type : Object,
        // Properties - WebSite 
        name : '{soli:blog}',
        description : 'A collection of articles by Soli Tsaagane',
        headline(){
            return `📝 ${this.name}`
        }
    }
}

function Main() {
    return {
        $template : '#main-template',
        type : Object        
    }
}



function Footer() {
    return {
        $template : '#footer-template',
        type : Object,
        message : '©️ Copyright Reserved | Soli Tsaagane',
        wikiLink : 'https://en.wikipedia.org/wiki/South_Africa'
    }
}

createApp({ 
    tags : ['articles','blog'],
    paths : {
        articles : {
            type : Object,
            route : '/articles',
            get : {
            response : {
                statusCode : 200,
                "collection" : {
                    type : Array,
                    items : {
                        type : Object
                    }
                }
            }
            }
        }
    },
    components : {
        Article : {
            "@context": "https://schema.org",
            "@type": "Article",
            
            "headline": "Hello World!",
            "description": "String",
            "image": "urlString",
            "datePublished": new Date('04-06-2022').toDateString(),
            "dateModified": "modificationDate",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": ""
            },  
            "author": {
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Soli Tsaagane",
                "url": "https://soli-rsa.github.io/",
                "image": "https://avatars.githubusercontent.com/u/51553394?s=400&u=39d6a76ff3643b5d8c00323148c91a65cd790fd2&v=4",
                "sameAs":  [
                    "https://facebook.com/soli.rsa",
                    "https://twitter.com/soli_rsa",
                    "https://instagram.com/soli_rsa",
                    "https://www.youtube.com/channel/UCwHY2KT-yxqkEUiaQgi7wNQ",
                    "https://www.linkedin.com/in/solitsaagane",
                    "https://pinterest.com/soli_rsa",
                    "https://soundcloud.com/soli_rsa",
                    "https://github.com/soli-rsa",
                    "https://soli-rsa.github.io/"
                ],
                "jobTitle": "Audio Technician, Web Developer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Eland.io"
                }
            },  
            "publisher": {
                "@type": "Organization",
                "name": "authorUrl",
                "logo": {
                "@type": "ImageObject",
                "url": "logoUrl"
                }
            }
        }
    },
    Header,
    Main,
    Footer 
}).mount()