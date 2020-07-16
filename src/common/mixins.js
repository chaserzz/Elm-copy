import { debounce } from './utils.js'
export const itemImgLoad = {
    data() {
        return {
            itemImgLoad: null
        }
    },
    mounted() {
        //上面引入了debounce函数
        const refresh = debounce(this.$refs.scroll.refresh, 5);
        //监听item中的Img加载完成
        this.itemImgLoad = () => {
            refresh();
        };
        this.$bus.$on('imgLoad', this.itemImgLoad);
    }
}