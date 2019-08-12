/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-09 12:13:23
 * @LastEditTime: 2019-08-09 13:00:28
 * @LastEditors: 陈佳
 */
export const draw = (canvas,src) => {
    if (canvas) {
        //获取canvas上下文
        let ctx = canvas.getContext('2d');
 
        //创建video标签，并且设置相关属性
        let video = document.createElement('video');
 
        video.preload = true;
        video.autoplay = true;
        video.src=src;
        //document.body.appendChild(video);
 
        //监听video的play事件，一旦开始，就把video逐帧绘制到canvas上
        video.addEventListener('play',() => {
            let play = () => {
                ctx.drawImage(video,0,0);
                requestAnimationFrame(play);
            };
 
            play();
        },false)
 
        //暂停/播放视频
        canvas.addEventListener('click',() => {
            if (!video.paused) {
                video.pause();
            } else {
                video.play();
            }
        },false);
    }
}