<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref,reactive } from "vue";
const router = useRouter();
const route = useRoute()

console.log(router.options.routes);
const navlist =router.options.routes

//导航列表点击样式控制
let navActive=ref(-1)

let down=ref(-1)

//鼠标经过导航列表
const navPass=function(index:any){
    down.value=index

    // console.log(down.value);
    
}

const navActiveC=function(index:any,index2:any){
    
            navActive.value=(index+index2)
            console.log(navActive.value);
            

}
</script>

<template>
    <div>
        <header>
            <nav class="blog-nav">

                <div class="nav-left">


                    <div class="blog-logo">
                        <img src="@/assets/images/1.jpg" alt="">
                    </div>
                    <ul class="nav-conter">
                        <!-- <li>

                            <RouterLink to="/">
                                <svg-icon iconName="icon-shouye1" class="sous-icon" color="#000"></svg-icon>
                                首页
                            </RouterLink>
                        </li> -->
                        <!-- <li>

                            <RouterLink to="/article"><svg-icon iconName="icon-shouye1" class="sous-icon"
                                    color="#000"></svg-icon>
                                文章列表
                            </RouterLink>
                        </li> -->
                        <li class="blog-list" v-for="(item,index) in navlist" :key="index" @click="navActiveC(index,0)"  @mouseenter="navPass(index)" @mouseleave="down=-1">
                            <RouterLink :to="item.path"  :class="{'active':navActive==index}"> <svg-icon iconName="icon-shouye1" class="sous-icon"
                                
                                    color="#000"></svg-icon>
                                {{item.meta.title}}
                                <svg-icon iconName="icon-arrow-down" v-if="item.children" class="down-icon" :class="{'down-cut':down==index}" color="#fff"></svg-icon>

                            </RouterLink>

                            <div class="blog-list-l" v-if="item.children&&down==index" >
                                    <ul>
                                        <li :class="{'blog-list-active':navActive==(index+index2)}" @click.stop="navActiveC(index,index2)" v-for="(item2,index2) in item.children" :key="index2">
                                            {{item2.name}}
                                        </li>
                                      
                                    </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="nav-right">
                    <ul>
                        <li>
                            <svg-icon iconName="icon-search" class="sous-icon" color="#fff"></svg-icon>
                        </li>
                        <li>
                            <svg-icon iconName="icon-user" class="sous-icon" color="#fff"></svg-icon>
                        </li>
                        <li>
                            <svg-icon iconName="icon-taiyang_sun61" class="sous-icon" color="#fff"></svg-icon>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>



<style scoped lang="scss">

header {
    position: fixed;
    left: 0;
    right: 0;
    max-width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);

    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);

    z-index: 10;


}
.active{
    color: var(--theme-color) !important;
}

.blog-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;


    max-width: 96%;
    margin: 0 auto;
    color: #fff;
    font-size: 15px;


    .blog-logo {
        max-width: 96%;
        padding-right: 20px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    .nav-left {
        display: flex;
        align-items: center;

        .nav-conter {
            display: flex;

            >li {
                cursor: pointer;
                height: 60px;
                line-height: 60px;
                margin-left: 20px;

                a {
                    color: #fff;
                    display: flex;
                    align-items: center;
                    transition: .3s;

                    .svg-icon {
                        margin-right: 6px;
                        font-size: 18px;
                    }

                    .down-icon{
                        margin-left: 6px;
                        font-size: 16px;
                        transition: .3s;
                    }
                }
            }
        }

    }


}

.nav-right {
    ul {
        display: flex;

        li {
            padding: 0 10px;

            .svg-icon {
                font-size: 20px;
                font-weight: 900;

            }
        }
    }
}

.blog-list-l{
    

    ul{
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0 0 10px #000;
    padding: 10px 0;
    li{
        width: 100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        transition: all .5s;
    }
    }
}
.blog-list-active{
    background: rgba($color: #000000, $alpha: 0.1);
    color: var(--theme-color);
}

.down-cut{
    transform: rotate(-180deg);
}
</style>

