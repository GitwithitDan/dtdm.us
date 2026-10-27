(function(){
  var c=document.getElementById("rain");if(!c)return;
  if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){c.style.display="none";return;}
  var x=c.getContext("2d"),chars="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789".split(""),fs=16,cols,drops;
  function size(){c.width=innerWidth;c.height=innerHeight;cols=Math.floor(c.width/fs);drops=[];for(var i=0;i<cols;i++)drops[i]=Math.random()*c.height/fs;}
  size();addEventListener("resize",size);
  setInterval(function(){
    x.fillStyle="rgba(5,13,24,.08)";x.fillRect(0,0,c.width,c.height);
    x.fillStyle="#0088ff";x.font=fs+"px 'Share Tech Mono',monospace";
    for(var i=0;i<drops.length;i++){x.fillText(chars[Math.floor(Math.random()*chars.length)],i*fs,drops[i]*fs);
      if(drops[i]*fs>c.height&&Math.random()>.975)drops[i]=0;drops[i]++;}
  },60);
})();
