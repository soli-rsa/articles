import { createApp, reactive } from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/dist/petite-vue.es.js";

function Header() {
    return {
        $template : '#header-template',
        type : Object,
        name : 'Blog',
        description : 'A collection of articles by Soli Tsaagane',
        // 
        headline(){
            return `📌 ${this.name}`
        }
    }
}

function Main() {
    return {
        $template : '#main-template',
        type : [],
        tags : [],
        components : {
            sections : [],
            section : {
                id : String,
                className : [],
                data : {}
            }
        }, 
        createSection(id) {
            const sect = Object.assign({}, this.section)
                sect.id = id
                
            return sect
        }
        
    }
}

function Footer() {
    return {
        $template : '#footer-template',
        message : 'Copyright Reserved ©️ Soli Tsaagane',
    }
}

createApp({ 
    Header,
    Main,
    Footer 
}).mount()