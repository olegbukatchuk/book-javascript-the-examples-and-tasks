var n=100
var k=1
var s=0
var txt="1<sup>2</sup> + 2<sup>2</sup> + ... + "
txt+=n+"<sup>2</sup> = "
while(k<=n){
    s+=k*k
    k++
}
document.write(txt+s)