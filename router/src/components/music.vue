<template>

<div>
     <ul >
           <li v-for='i in msg'>{{i}}</li>  
     </ul>
    <!-- <ul>
        <li>
              <router-link :to="{name:'music'}"><i class='iconfont icon-tianmao1'></i><span>历史</span></router-link>
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
                  
    </ul> -->
     <router-view></router-view>  
</div>
     
</template>
<script>
    export default {
        data() {
            return {
                name: 'zs',
                msg: '',
                state: false,
                id: ''


            }
        },

        beforeRouteEnter: (to, from, next) => {
                next(vm => {
                    vm.axios.get('/fei').then(data => {
                        vm.msg = data.data;
                        console.log(data.data)
                    })
                })
            }
            // mounted() {
            //     this.state = true;
            //     var _this = this;
            //     if (this.state) {
            //         this.axios.get('/fei').then(function(data) {
            //             _this.msg = data.data;
            //             console.log(data.data)
            //         })
            //     }

        // }
    }
</script>