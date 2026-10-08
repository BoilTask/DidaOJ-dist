function o(t){return t?Math.floor(t/1e9):0}function e(t){if(t<=0)return"0 秒 ";let r="";const i=Math.floor(t/3600);i>0&&(r+=`${i} 小时 `);const f=Math.floor(t%3600/60);return(f>0||i>0)&&(i>0&&f<10&&(r+="0"),r+=`${f} 分钟 `),t=t%60,(t>0||f>0||i>0)&&((i>0||f>0)&&t<10&&(r+="0"),r+=`${t.toFixed(0)} 秒`),r}export{e as G,o as a};
//# sourceMappingURL=library-B-yn7JJl.js.map
