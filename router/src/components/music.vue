<template>

<div>
    <ul>
   
        <li>
              <router-link :to="{path:'/fei/music'}"><i class='iconfont icon-tianmao1'></i><span>历史</span></router-link>
        </li>
        <li>
            <router-link to='history'><i class='iconfont icon-tianmao1'></i><span>历史</span></router-link>
        </li>         
        <li>
            <router-link to='qing'><i class='iconfont icon-tianmao1'></i><span>情感生活</span></router-link>
        </li>
        <li>
            <router-link to='ren'><i class='iconfont icon-tianmao1'></i><span>人文</span></router-link>
        </li>
        <li>
            <router-link to='music'><i class='iconfont icon-tianmao1'></i><span>音乐</span></router-link>
        </li>
        <li>
            <router-link to='history'><i class='iconfont icon-tianmao1'></i><span>历史</span></router-link>
        </li>         
        <li>
            <router-link to='qing'><i class='iconfont icon-tianmao1'></i><span>情感生活</span></router-link>
        </li>
        <li>
            <router-link to='ren'><i class='iconfont icon-tianmao1'></i><span>人文</span></router-link>
        </li>
                  
    </ul>
     <router-view></router-view>  
</div>
     
</template>
<script>
export default {
    data(){
        return {
            name:'zs'
        }
    }
}  
</script>