var n=100,k=1,s=0
var txt="1<sup>2</sup> + 2<sup>2</sup> + ... + "
txt+=n+"<sup>2</sup> = "
do {
    s+=k*k
    k++
} while(k<=n)
document.write(txt+s)