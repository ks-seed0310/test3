class _dvsp{
    #main
    #defle
    constructor(bs,def_is_le=true){
        const ta=ArrayBuffer.isView(bs)?bs:new Uint8Array(bs)
        this.#main=new DataView(ta.buffer,ta.byteOffset,ta.byteLength)
        this.#defle=def_is_le
    }
    
    u8(i){return this.#main.getUint8(i)}
    i8(i){return this.#main.getInt8(i)}
    
    u16(i){return this.#defle?this.u16le(i):this.u16be(i)}
    u16le(i){return this.#main.getUint16(i,true)}
    u16be(i){return this.#main.getUint16(i,false)}
    i16(i){return this.#defle?this.i16le(i):this.i16be(i)}
    i16le(i){return this.#main.getInt16(i,true)}
    i16be(i){return this.#main.getInt16(i,false)}

    u32(i){return this.#defle?this.u32le(i):this.u32be(i)}
    u32le(i){return this.#main.getUint32(i,true)}
    u32be(i){return this.#main.getUint32(i,false)}
    i32(i){return this.#defle?this.i32le(i):this.i32be(i)}
    i32le(i){return this.#main.getInt32(i,true)}
    i32be(i){return this.#main.getInt32(i,false)}

    bu64(i){return this.#defle?this.bu64le(i):this.bu64be(i)}
    bu64le(i){return this.#main.getBigUint64(i,true)}
    bu64be(i){return this.#main.getBigUint64(i,false)}
    bi64(i){return this.#defle?this.bi64le(i):this.bi64be(i)}
    bi64le(i){return this.#main.getBigInt64(i,true)}
    bi64be(i){return this.#main.getBigInt64(i,false)}

    su8(i,v){return this.#main.setUint8(i,v)}
    si8(i,v){return this.#main.setInt8(i,v)}
    
    su16(i,v){return this.#defle?this.su16le(i,v):this.su16be(i,v)}
    su16le(i,v){return this.#main.setUint16(i,v,true)}
    su16be(i,v){return this.#main.setUint16(i,v,false)}
    si16(i,v){return this.#defle?this.si16le(i,v):this.si16be(i,v)}
    si16le(i,v){return this.#main.setInt16(i,v,true)}
    si16be(i,v){return this.#main.setInt16(i,v,false)}

    su32(i,v){return this.#defle?this.su32le(i,v):this.su32be(i,v)}
    su32le(i,v){return this.#main.setUint32(i,v,true)}
    su32be(i,v){return this.#main.setUint32(i,v,false)}
    si32(i,v){return this.#defle?this.si32le(i,v):this.si32be(i,v)}
    si32le(i,v){return this.#main.setInt32(i,v,true)}
    si32be(i,v){return this.#main.setInt32(i,v,false)}

    sbu64(i,v){return this.#defle?this.sbu64le(i,v):this.sbu64be(i,v)}
    sbu64le(i,v){return this.#main.setBigUint64(i,v,true)}
    sbu64be(i,v){return this.#main.setBigUint64(i,v,false)}
    sbi64(i,v){return this.#defle?this.sbi64le(i,v):this.sbi64be(i,v)}
    sbi64le(i,v){return this.#main.setBigInt64(i,v,true)}
    sbi64be(i,v){return this.#main.setBigInt64(i,v,false)}

    get buffer(){return this.#main.buffer}
    get byteOffset(){return this.#main.byteOffset}
    get byteLength(){return this.#main.byteLength}
}
class ShaAlgo{
    #constant={
        sha1_160:{
            h0:0x67452301,
            h1:0xefcdab89,
            h2:0x98badcfe,
            h3:0x10325476,
            h4:0xc3d2e1f0
        },
        sha2_256:{
            h0:0x6a09e667,
            h1:0xbb67ae85,
            h2:0x3c6ef372,
            h3:0xa54ff53a,
            h4:0x510e527f,
            h5:0x9b05688c,
            h6:0x1f83d9ab,
            h7:0x5be0cd19,
            k256:[
                0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
                0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
                0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
                0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
                0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
                0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
                0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
                0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
            ],
            k256_i32:[],
        },
        sha2_384:{
            h0h:0xcbbb9d5d,
            h0l:0xc1059ed8,
            h1h:0x629a292a,
            h1l:0x367cd507,
            h2h:0x9159015a,
            h2l:0x3070dd17,
            h3h:0x152fecd8,
            h3l:0xf70e5939,
            h4h:0x67332667,
            h4l:0xffc00b31,
            h5h:0x8eb44a87,
            h5l:0x68581511,
            h6h:0xdb0c2e0d,
            h6l:0x64f98fa7,
            h7h:0x47b5481d,
            h7l:0xbefa4fa4,
            k384:[0x428a2f98,0xd728ae22,0x71374491,0x23ef65cd,0xb5c0fbcf,0xec4d3b2f,0xe9b5dba5,0x8189dbbc,0x3956c25b,0xf348b538,0x59f111f1,0xb605d019,0x923f82a4,0xaf194f9b,0xab1c5ed5,0xda6d8118,0xd807aa98,0xa3030242,0x12835b01,0x45706fbe,0x243185be,0x4ee4b28c,0x550c7dc3,0xd5ffb4e2,0x72be5d74,0xf27b896f,0x80deb1fe,0x3b1696b1,0x9bdc06a7,0x25c71235,0xc19bf174,0xcf692694,0xe49b69c1,0x9ef14ad2,0xefbe4786,0x384f25e3,0xfc19dc6,0x8b8cd5b5,0x240ca1cc,0x77ac9c65,0x2de92c6f,0x592b0275,0x4a7484aa,0x6ea6e483,0x5cb0a9dc,0xbd41fbd4,0x76f988da,0x831153b5,0x983e5152,0xee66dfab,0xa831c66d,0x2db43210,0xb00327c8,0x98fb213f,0xbf597fc7,0xbeef0ee4,0xc6e00bf3,0x3da88fc2,0xd5a79147,0x930aa725,0x6ca6351,0xe003826f,0x14292967,0xa0e6e70,0x27b70a85,0x46d22ffc,0x2e1b2138,0x5c26c926,0x4d2c6dfc,0x5ac42aed,0x53380d13,0x9d95b3df,0x650a7354,0x8baf63de,0x766a0abb,0x3c77b2a8,0x81c2c92e,0x47edaee6,0x92722c85,0x1482353b,0xa2bfe8a1,0x4cf10364,0xa81a664b,0xbc423001,0xc24b8b70,0xd0f89791,0xc76c51a3,0x654be30,0xd192e819,0xd6ef5218,0xd6990624,0x5565a910,0xf40e3585,0x5771202a,0x106aa070,0x32bbd1b8,0x19a4c116,0xb8d2d0c8,0x1e376c08,0x5141ab53,0x2748774c,0xdf8eeb99,0x34b0bcb5,0xe19b48a8,0x391c0cb3,0xc5c95a63,0x4ed8aa4a,0xe3418acb,0x5b9cca4f,0x7763e373,0x682e6ff3,0xd6b2b8a3,0x748f82ee,0x5defb2fc,0x78a5636f,0x43172f60,0x84c87814,0xa1f0ab72,0x8cc70208,0x1a6439ec,0x90befffa,0x23631e28,0xa4506ceb,0xde82bde9,0xbef9a3f7,0xb2c67915,0xc67178f2,0xe372532b,0xca273ece,0xea26619c,0xd186b8c7,0x21c0c207,0xeada7dd6,0xcde0eb1e,0xf57d4f7f,0xee6ed178,0x6f067aa,0x72176fba,0xa637dc5,0xa2c898a6,0x113f9804,0xbef90dae,0x1b710b35,0x131c471b,0x28db77f5,0x23047d84,0x32caab7b,0x40c72493,0x3c9ebe0a,0x15c9bebc,0x431d67c4,0x9c100d4c,0x4cc5d4be,0xcb3e42b6,0x597f299c,0xfc657e2a,0x5fcb6fab,0x3ad6faec,0x6c44198c,0x4a475817],
            k384_i32:[],
        },
        sha2_512:{
            h0h:0x6A09E667,
            h0l:0xF3BCC908,
            h1h:0xBB67AE85,
            h1l:0x84CAA73B,
            h2h:0x3C6EF372,
            h2l:0xFE94F82B,
            h3h:0xA54FF53A,
            h3l:0x5F1D36F1,
            h4h:0x510E527F,
            h4l:0xADE682D1,
            h5h:0x9B05688C,
            h5l:0x2B3E6C1F,
            h6h:0x1F83D9AB,
            h6l:0xFB41BD6B,
            h7h:0x5BE0CD19,
            h7l:0x137E2179,
            k512:[0x428a2f98,0xd728ae22,0x71374491,0x23ef65cd,0xb5c0fbcf,0xec4d3b2f,0xe9b5dba5,0x8189dbbc,0x3956c25b,0xf348b538,0x59f111f1,0xb605d019,0x923f82a4,0xaf194f9b,0xab1c5ed5,0xda6d8118,0xd807aa98,0xa3030242,0x12835b01,0x45706fbe,0x243185be,0x4ee4b28c,0x550c7dc3,0xd5ffb4e2,0x72be5d74,0xf27b896f,0x80deb1fe,0x3b1696b1,0x9bdc06a7,0x25c71235,0xc19bf174,0xcf692694,0xe49b69c1,0x9ef14ad2,0xefbe4786,0x384f25e3,0xfc19dc6,0x8b8cd5b5,0x240ca1cc,0x77ac9c65,0x2de92c6f,0x592b0275,0x4a7484aa,0x6ea6e483,0x5cb0a9dc,0xbd41fbd4,0x76f988da,0x831153b5,0x983e5152,0xee66dfab,0xa831c66d,0x2db43210,0xb00327c8,0x98fb213f,0xbf597fc7,0xbeef0ee4,0xc6e00bf3,0x3da88fc2,0xd5a79147,0x930aa725,0x6ca6351,0xe003826f,0x14292967,0xa0e6e70,0x27b70a85,0x46d22ffc,0x2e1b2138,0x5c26c926,0x4d2c6dfc,0x5ac42aed,0x53380d13,0x9d95b3df,0x650a7354,0x8baf63de,0x766a0abb,0x3c77b2a8,0x81c2c92e,0x47edaee6,0x92722c85,0x1482353b,0xa2bfe8a1,0x4cf10364,0xa81a664b,0xbc423001,0xc24b8b70,0xd0f89791,0xc76c51a3,0x654be30,0xd192e819,0xd6ef5218,0xd6990624,0x5565a910,0xf40e3585,0x5771202a,0x106aa070,0x32bbd1b8,0x19a4c116,0xb8d2d0c8,0x1e376c08,0x5141ab53,0x2748774c,0xdf8eeb99,0x34b0bcb5,0xe19b48a8,0x391c0cb3,0xc5c95a63,0x4ed8aa4a,0xe3418acb,0x5b9cca4f,0x7763e373,0x682e6ff3,0xd6b2b8a3,0x748f82ee,0x5defb2fc,0x78a5636f,0x43172f60,0x84c87814,0xa1f0ab72,0x8cc70208,0x1a6439ec,0x90befffa,0x23631e28,0xa4506ceb,0xde82bde9,0xbef9a3f7,0xb2c67915,0xc67178f2,0xe372532b,0xca273ece,0xea26619c,0xd186b8c7,0x21c0c207,0xeada7dd6,0xcde0eb1e,0xf57d4f7f,0xee6ed178,0x6f067aa,0x72176fba,0xa637dc5,0xa2c898a6,0x113f9804,0xbef90dae,0x1b710b35,0x131c471b,0x28db77f5,0x23047d84,0x32caab7b,0x40c72493,0x3c9ebe0a,0x15c9bebc,0x431d67c4,0x9c100d4c,0x4cc5d4be,0xcb3e42b6,0x597f299c,0xfc657e2a,0x5fcb6fab,0x3ad6faec,0x6c44198c,0x4a475817],
            k512_i32:[],
        }
    }
    #memorystack={
        sha1_160:{
            w:new Int32Array(80),
        },
        sha2_256:{
            w:new Int32Array(64),
        },
        sha2_384:{
            w:new Int32Array(160),
        },
        sha2_512:{
            w:new Int32Array(160),
        }
    }
    constructor(){
        const sha2_256=this.#constant.sha2_256
        const sha2_384=this.#constant.sha2_384
        const sha2_512=this.#constant.sha2_512
        sha2_256.k256_i32=new Int32Array(sha2_256.k256)
        sha2_384.k384_i32=new Int32Array(sha2_384.k384)
        sha2_512.k512_i32=new Int32Array(sha2_512.k512)
    }
    _cs(v,s){
        return (v<<s)|(v>>>(32-s))
    }
    _b32(v){
        return v&0xffffffff
    }
    sha1_160(bufferSource){
        const cs=(v,s)=>(v<<s)|(v>>>(32-s));
        const byte=bufferSource.byteLength
        const plen=Math.ceil((byte+1+8)/64)*64
        const pad=new Uint8Array(plen)
        pad.set(bufferSource,0)
        pad[byte]=0x80
        const dv=new _dvsp(pad,true)
        dv.sbu64be(plen-8,BigInt(byte*8))

        let h0=this.#constant.sha1_160.h0
        let h1=this.#constant.sha1_160.h1
        let h2=this.#constant.sha1_160.h2
        let h3=this.#constant.sha1_160.h3
        let h4=this.#constant.sha1_160.h4

        const w=this.#memorystack.sha1_160.w
        w.fill(0)
        for(let o=0;o<plen;o+=64){
            for(let t=0;t<16;t++){
                w[t]=dv.i32be(o+(t*4))
            }
            for(let t=16;t<80;t++){
                w[t]=cs(w[t-3]^w[t-8]^w[t-14]^w[t-16],1)
            }
            let a=h0
            let b=h1
            let c=h2
            let d=h3
            let e=h4
            for(let t=0;t<20;t++){
                const f=(b&c)|((~b)&d)
                const k=0x5a827999
                const tm=(cs(a,5)+f+e+k+w[t])|0
                e=d
                d=c
                c=cs(b,30)
                b=a
                a=tm
            }
            for(let t=20;t<40;t++){
                const f=b^c^d
                const k=0x6ed9eba1
                const tm=(cs(a,5)+f+e+k+w[t])|0
                e=d
                d=c
                c=cs(b,30)
                b=a
                a=tm
            }
            for(let t=40;t<60;t++){
                const f=(b&c)|(b&d)|(c&d)
                const k=0x8f1bbcdc
                const tm=(cs(a,5)+f+e+k+w[t])|0
                e=d
                d=c
                c=cs(b,30)
                b=a
                a=tm
            }
            for(let t=60;t<80;t++){
                const f=b^c^d
                const k=0xca62c1d6
                const tm=(cs(a,5)+f+e+k+w[t])|0
                e=d
                d=c
                c=cs(b,30)
                b=a
                a=tm
            }
            h0=(h0+a)|0
            h1=(h1+b)|0
            h2=(h2+c)|0
            h3=(h3+d)|0
            h4=(h4+e)|0
        }
        const res=new _dvsp(new ArrayBuffer(20),false)
        res.si32be(0,h0)
        res.si32be(4,h1)
        res.si32be(8,h2)
        res.si32be(12,h3)
        res.si32be(16,h4)
        return res.buffer
    }
    sha2_256(bufferSource){
        //const lotr=(v,s)=>((v<<s)|(v>>>(32-s)))
        //const rotr=(v,s)=>((v>>>s)|(v<<(32-s)))
        //const shr=(v,s)=>v>>>s
        //const sigma0s=v=>(((v>>>7)|(v<<25))^((v>>>18)|(v<<14))^(v>>>3))|0
        //const sigma1s=v=>(((v>>>17)|(v<<15))^((v>>>19)|(v<<13))^(v>>>10))|0
        //const sigma0b=v=>(((v>>>2)|(v<<30))^((v>>>13)|(v<<19))^((v>>>22)|(v<<10)))|0
        //const sigma1b=v=>(((v>>>6)|(v<<26))^((v>>>11)|(v<<21))^((v>>>25)|(v<<7)))|0
        //const choose=(e,f,g)=>(e&f)^(~e&g)
        //const majority=(a,b,c)=>(a&b)^(a&c)^(b&c)
        const byte=bufferSource.byteLength
        const plen=Math.ceil((byte+1+8)/64)*64
        const pad=new Uint8Array(plen)
        pad.set(bufferSource,0)
        pad[byte]=0x80
        const dv=new _dvsp(pad,true)
        dv.sbu64be(plen-8,BigInt(byte*8))

        let h0=this.#constant.sha2_256.h0
        let h1=this.#constant.sha2_256.h1
        let h2=this.#constant.sha2_256.h2
        let h3=this.#constant.sha2_256.h3
        let h4=this.#constant.sha2_256.h4
        let h5=this.#constant.sha2_256.h5
        let h6=this.#constant.sha2_256.h6
        let h7=this.#constant.sha2_256.h7

        const w=this.#memorystack.sha2_256.w
        w.fill(0)
        const k=this.#constant.sha2_256.k256_i32
        for(let o=0;o<plen;o+=64){
            for(let t=0;t<16;t++){
                w[t]=dv.i32be(o+(t*4))
            }
            for(let t=16;t<64;t++){
                //w[t]=sigma1s(w[t-2])+w[t-7]+sigma0s(w[t-15])+w[t-16]|0
                const wt2=w[t-2]
                const wt7=w[t-7]
                const wt15=w[t-15]
                const wt16=w[t-16]
                const sigma1s_r=(((wt2>>>17)|(wt2<<15))^((wt2>>>19)|(wt2<<13))^(wt2>>>10))|0
                const sigma0s_r=(((wt15>>>7)|(wt15<<25))^((wt15>>>18)|(wt15<<14))^(wt15>>>3))|0
                w[t]=sigma1s_r+wt7+sigma0s_r+wt16
            }
            let a=h0
            let b=h1
            let c=h2
            let d=h3
            let e=h4
            let f=h5
            let g=h6
            let h=h7
            for(let t=0;t<64;t++){
                //const t1=(h+sigma1b(e)+choose(e,f,g)+k[t]+w[t])|0
                //const t2=(sigma0b(a)+majority(a,b,c))|0
                const t1=(
                    h+
                    ((((e>>>6)|(e<<26))^((e>>>11)|(e<<21))^((e>>>25)|(e<<7)))|0)+
                    ((e&f)^(~e&g))+
                    k[t]+
                    w[t]
                )|0
                const t2=(
                    ((((a>>>2)|(a<<30))^((a>>>13)|(a<<19))^((a>>>22)|(a<<10)))|0)+
                    ((a&b)^(a&c)^(b&c))
                )|0
                h=g
                g=f
                f=e
                e=(d+t1)|0
                d=c
                c=b
                b=a
                a=(t1+t2)|0
            }
            h0=(h0+a)|0
            h1=(h1+b)|0
            h2=(h2+c)|0
            h3=(h3+d)|0
            h4=(h4+e)|0
            h5=(h5+f)|0
            h6=(h6+g)|0
            h7=(h7+h)|0
        }
        const res=new _dvsp(new ArrayBuffer(32),false)
        res.si32be(0,h0)
        res.si32be(4,h1)
        res.si32be(8,h2)
        res.si32be(12,h3)
        res.si32be(16,h4)
        res.si32be(20,h5)
        res.si32be(24,h6)
        res.si32be(28,h7)
        return res.buffer
    }
    sha2_384(bufferSource){
        //const rotr64lt32=(h,l,s)=>[((h>>>s)|(l<<(32-s)))>>>0,((l>>>s)|(h<<(32-s)))>>>0]
        //const rotr64eq32=(h,l)=>[l>>>0,h>>>0]
        //const rotr64gt32=(h,l,s)=>[((l>>>(s-32))|(h<<(64-s)))>>>0,((h>>>(s-32))|(l<<(64-s)))>>>0]
        //const shr64lt32=(h,l,s)=>[(h>>>s)>>>0,((l>>>s)|(h<<(32-s)))>>>0]
        //const shr64eq32=(h,l,s)=>[0,h>>>0]
        //const shr64gt32=(h,l,s)=>[0,(h>>>(s-32))>>>0]
        //const choose=(eh,el,fh,fl,gh,gl)=>[(eh&fh)^(~eh&gh),(el&fl)^(~el&gl)]
        //const majority=(ah,al,bh,bl,ch,cl)=>[(ah&bh)^(ah&ch)^(bh&ch),(al&bl)^(al&cl)^(bl&cl)]
        const sigma0s=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,1)
            //const [g2h,g2l]=rotr64lt32(h,l,8)
            //const [g3h,g3l]=shr64lt32(h,l,7)
            const g1h=((h>>>1)|(l<<31))
            const g1l=((l>>>1)|(h<<31))
            const g2h=((h>>>8)|(l<<24))
            const g2l=((l>>>8)|(h<<24))
            const g3h=(h>>>7)
            const g3l=((l>>>7)|(h<<25))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const sigma1s=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,19)
            //const [g2h,g2l]=rotr64gt32(h,l,61)
            //const [g3h,g3l]=shr64lt32(h,l,6)
            const g1h=((h>>>19)|(l<<13))
            const g1l=((l>>>19)|(h<<13))
            const g2h=((l>>>29)|(h<<3))
            const g2l=((h>>>29)|(l<<3))
            const g3h=(h>>>6)
            const g3l=((l>>>6)|(h<<26))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const sigma0b=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,28)
            //const [g2h,g2l]=rotr64gt32(h,l,34)
            //const [g3h,g3l]=rotr64gt32(h,l,39)
            const g1h=((h>>>28)|(l<<4))
            const g1l=((l>>>28)|(h<<4))
            const g2h=((l>>>2)|(h<<30))
            const g2l=((h>>>2)|(l<<30))
            const g3h=((l>>>7)|(h<<25))
            const g3l=((h>>>7)|(l<<25))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const sigma1b=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,14)
            //const [g2h,g2l]=rotr64lt32(h,l,18)
            //const [g3h,g3l]=rotr64gt32(h,l,41)
            const g1h=((h>>>14)|(l<<18))
            const g1l=((l>>>14)|(h<<18))
            const g2h=((h>>>18)|(l<<14))
            const g2l=((l>>>18)|(h<<14))
            const g3h=((l>>>9)|(h<<23))
            const g3l=((h>>>9)|(l<<23))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const add=(h1,l1,h2,l2)=>{
            const suml=(l1>>>0)+(l2>>>0)
            return [(h1+h2+(suml>0xffffffff))>>>0,suml>>>0]
        }
        
        const byte=bufferSource.byteLength
        const plen=Math.ceil((byte+1+16)/128)*128
        const pad=new Uint8Array(plen)
        pad.set(bufferSource,0)
        pad[byte]=0x80
        const dv=new _dvsp(pad,true)
        dv.sbu64be(plen-16,0n)
        dv.sbu64be(plen-8,BigInt(byte*8))

        let h0h=this.#constant.sha2_384.h0h
        let h1h=this.#constant.sha2_384.h1h
        let h2h=this.#constant.sha2_384.h2h
        let h3h=this.#constant.sha2_384.h3h
        let h4h=this.#constant.sha2_384.h4h
        let h5h=this.#constant.sha2_384.h5h
        let h6h=this.#constant.sha2_384.h6h
        let h7h=this.#constant.sha2_384.h7h
        let h0l=this.#constant.sha2_384.h0l
        let h1l=this.#constant.sha2_384.h1l
        let h2l=this.#constant.sha2_384.h2l
        let h3l=this.#constant.sha2_384.h3l
        let h4l=this.#constant.sha2_384.h4l
        let h5l=this.#constant.sha2_384.h5l
        let h6l=this.#constant.sha2_384.h6l
        let h7l=this.#constant.sha2_384.h7l

        const w=this.#memorystack.sha2_384.w
        w.fill(0)
        const k=this.#constant.sha2_384.k384_i32
        for(let o=0;o<plen;o+=128){
            for(let t=0;t<16;t++){
                w[t*2]=dv.i32be(o+(t*8))
                w[t*2+1]=dv.i32be(o+(t*8)+4)
            }
            for(let t=16;t<80;t++){
                const [s1rh,s1rl]=sigma1s(w[(t-2)*2],w[(t-2)*2+1])
                const [s0rh,s0rl]=sigma0s(w[(t-15)*2],w[(t-15)*2+1])
                const w7h=w[(t-7)*2]
                const w7l=w[(t-7)*2+1]
                const w16h=w[(t-16)*2]
                const w16l=w[(t-16)*2+1]
                const [sol1h,sol1l]=add(s1rh,s1rl,s0rh,s0rl)
                const [sol2h,sol2l]=add(w7h,w7l,w16h,w16l)
                const [solh,soll]=add(sol1h,sol1l,sol2h,sol2l)
                w[t*2]=solh
                w[t*2+1]=soll
            }
            let ah=h0h
            let bh=h1h
            let ch=h2h
            let dh=h3h
            let eh=h4h
            let fh=h5h
            let gh=h6h
            let hh=h7h
            let al=h0l
            let bl=h1l
            let cl=h2l
            let dl=h3l
            let el=h4l
            let fl=h5l
            let gl=h6l
            let hl=h7l
            for(let t=0;t<80;t++){
                const [s0rh,s0rl]=sigma1b(eh,el)
                //const [s1rh,s1rl]=choose(eh,el,fh,fl,gh,gl)
                const s1rh=(eh&fh)^(~eh&gh)
                const s1rl=(el&fl)^(~el&gl)
                const [s2rh,s2rl]=sigma0b(ah,al)
                //const [s3rh,s3rl]=majority(ah,al,bh,bl,ch,cl)
                const s3rh=(ah&bh)^(ah&ch)^(bh&ch)
                const s3rl=(al&bl)^(al&cl)^(bl&cl)
                const [t1rh,t1rl]=add(hh,hl,s0rh,s0rl)
                const [t2rh,t2rl]=add(s1rh,s1rl,k[t*2],k[t*2+1])
                const [t3rh,t3rl]=add(t1rh,t1rl,t2rh,t2rl)
                const [t1h,t1l]=add(w[t*2],w[t*2+1],t3rh,t3rl)
                const [t2h,t2l]=add(s2rh,s2rl,s3rh,s3rl)
                const [nweh,nwel]=add(dh,dl,t1h,t1l)
                const [nwah,nwal]=add(t1h,t1l,t2h,t2l)
                hh=gh
                hl=gl
                gh=fh
                gl=fl
                fh=eh
                fl=el
                eh=nweh
                el=nwel
                dh=ch
                dl=cl
                ch=bh
                cl=bl
                bh=ah
                bl=al
                ah=nwah
                al=nwal
            }
            [h0h,h0l]=add(h0h,h0l,ah,al);
            [h1h,h1l]=add(h1h,h1l,bh,bl);
            [h2h,h2l]=add(h2h,h2l,ch,cl);
            [h3h,h3l]=add(h3h,h3l,dh,dl);
            [h4h,h4l]=add(h4h,h4l,eh,el);
            [h5h,h5l]=add(h5h,h5l,fh,fl);
            [h6h,h6l]=add(h6h,h6l,gh,gl);
            [h7h,h7l]=add(h7h,h7l,hh,hl);
        }
        const res=new _dvsp(new ArrayBuffer(48),false)
        res.si32be(0,h0h)
        res.si32be(4,h0l)
        res.si32be(8,h1h)
        res.si32be(12,h1l)
        res.si32be(16,h2h)
        res.si32be(20,h2l)
        res.si32be(24,h3h)
        res.si32be(28,h3l)
        res.si32be(32,h4h)
        res.si32be(36,h4l)
        res.si32be(40,h5h)
        res.si32be(44,h5l)
        return res.buffer
    }
    sha2_512(bufferSource){
        //const rotr64lt32=(h,l,s)=>[((h>>>s)|(l<<(32-s)))>>>0,((l>>>s)|(h<<(32-s)))>>>0]
        //const rotr64eq32=(h,l)=>[l>>>0,h>>>0]
        //const rotr64gt32=(h,l,s)=>[((l>>>(s-32))|(h<<(64-s)))>>>0,((h>>>(s-32))|(l<<(64-s)))>>>0]
        //const shr64lt32=(h,l,s)=>[(h>>>s)>>>0,((l>>>s)|(h<<(32-s)))>>>0]
        //const shr64eq32=(h,l,s)=>[0,h>>>0]
        //const shr64gt32=(h,l,s)=>[0,(h>>>(s-32))>>>0]
        //const choose=(eh,el,fh,fl,gh,gl)=>[(eh&fh)^(~eh&gh),(el&fl)^(~el&gl)]
        //const majority=(ah,al,bh,bl,ch,cl)=>[(ah&bh)^(ah&ch)^(bh&ch),(al&bl)^(al&cl)^(bl&cl)]
        const sigma0s=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,1)
            //const [g2h,g2l]=rotr64lt32(h,l,8)
            //const [g3h,g3l]=shr64lt32(h,l,7)
            const g1h=((h>>>1)|(l<<31))
            const g1l=((l>>>1)|(h<<31))
            const g2h=((h>>>8)|(l<<24))
            const g2l=((l>>>8)|(h<<24))
            const g3h=(h>>>7)
            const g3l=((l>>>7)|(h<<25))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const sigma1s=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,19)
            //const [g2h,g2l]=rotr64gt32(h,l,61)
            //const [g3h,g3l]=shr64lt32(h,l,6)
            const g1h=((h>>>19)|(l<<13))
            const g1l=((l>>>19)|(h<<13))
            const g2h=((l>>>29)|(h<<3))
            const g2l=((h>>>29)|(l<<3))
            const g3h=(h>>>6)
            const g3l=((l>>>6)|(h<<26))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const sigma0b=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,28)
            //const [g2h,g2l]=rotr64gt32(h,l,34)
            //const [g3h,g3l]=rotr64gt32(h,l,39)
            const g1h=((h>>>28)|(l<<4))
            const g1l=((l>>>28)|(h<<4))
            const g2h=((l>>>2)|(h<<30))
            const g2l=((h>>>2)|(l<<30))
            const g3h=((l>>>7)|(h<<25))
            const g3l=((h>>>7)|(l<<25))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const sigma1b=(h,l)=>{
            //const [g1h,g1l]=rotr64lt32(h,l,14)
            //const [g2h,g2l]=rotr64lt32(h,l,18)
            //const [g3h,g3l]=rotr64gt32(h,l,41)
            const g1h=((h>>>14)|(l<<18))
            const g1l=((l>>>14)|(h<<18))
            const g2h=((h>>>18)|(l<<14))
            const g2l=((l>>>18)|(h<<14))
            const g3h=((l>>>9)|(h<<23))
            const g3l=((h>>>9)|(l<<23))
            return [g1h^g2h^g3h,g1l^g2l^g3l]
        }
        const add=(h1,l1,h2,l2)=>{
            const suml=(l1>>>0)+(l2>>>0)
            return [(h1+h2+(suml>0xffffffff))>>>0,suml>>>0]
        }
        
        const byte=bufferSource.byteLength
        const plen=Math.ceil((byte+1+16)/128)*128
        const pad=new Uint8Array(plen)
        pad.set(bufferSource,0)
        pad[byte]=0x80
        const dv=new _dvsp(pad,true)
        dv.sbu64be(plen-16,0n)
        dv.sbu64be(plen-8,BigInt(byte*8))

        let h0h=this.#constant.sha2_512.h0h
        let h1h=this.#constant.sha2_512.h1h
        let h2h=this.#constant.sha2_512.h2h
        let h3h=this.#constant.sha2_512.h3h
        let h4h=this.#constant.sha2_512.h4h
        let h5h=this.#constant.sha2_512.h5h
        let h6h=this.#constant.sha2_512.h6h
        let h7h=this.#constant.sha2_512.h7h
        let h0l=this.#constant.sha2_512.h0l
        let h1l=this.#constant.sha2_512.h1l
        let h2l=this.#constant.sha2_512.h2l
        let h3l=this.#constant.sha2_512.h3l
        let h4l=this.#constant.sha2_512.h4l
        let h5l=this.#constant.sha2_512.h5l
        let h6l=this.#constant.sha2_512.h6l
        let h7l=this.#constant.sha2_512.h7l

        const w=this.#memorystack.sha2_512.w
        w.fill(0)
        const k=this.#constant.sha2_512.k512_i32
        for(let o=0;o<plen;o+=128){
            for(let t=0;t<16;t++){
                w[t*2]=dv.i32be(o+(t*8))
                w[t*2+1]=dv.i32be(o+(t*8)+4)
            }
            for(let t=16;t<80;t++){
                const [s1rh,s1rl]=sigma1s(w[(t-2)*2],w[(t-2)*2+1])
                const [s0rh,s0rl]=sigma0s(w[(t-15)*2],w[(t-15)*2+1])
                const w7h=w[(t-7)*2]
                const w7l=w[(t-7)*2+1]
                const w16h=w[(t-16)*2]
                const w16l=w[(t-16)*2+1]
                const [sol1h,sol1l]=add(s1rh,s1rl,s0rh,s0rl)
                const [sol2h,sol2l]=add(w7h,w7l,w16h,w16l)
                const [solh,soll]=add(sol1h,sol1l,sol2h,sol2l)
                w[t*2]=solh
                w[t*2+1]=soll
            }
            let ah=h0h
            let bh=h1h
            let ch=h2h
            let dh=h3h
            let eh=h4h
            let fh=h5h
            let gh=h6h
            let hh=h7h
            let al=h0l
            let bl=h1l
            let cl=h2l
            let dl=h3l
            let el=h4l
            let fl=h5l
            let gl=h6l
            let hl=h7l
            for(let t=0;t<80;t++){
                const [s0rh,s0rl]=sigma1b(eh,el)
                //const [s1rh,s1rl]=choose(eh,el,fh,fl,gh,gl)
                const s1rh=(eh&fh)^(~eh&gh)
                const s1rl=(el&fl)^(~el&gl)
                const [s2rh,s2rl]=sigma0b(ah,al)
                //const [s3rh,s3rl]=majority(ah,al,bh,bl,ch,cl)
                const s3rh=(ah&bh)^(ah&ch)^(bh&ch)
                const s3rl=(al&bl)^(al&cl)^(bl&cl)
                const [t1rh,t1rl]=add(hh,hl,s0rh,s0rl)
                const [t2rh,t2rl]=add(s1rh,s1rl,k[t*2],k[t*2+1])
                const [t3rh,t3rl]=add(t1rh,t1rl,t2rh,t2rl)
                const [t1h,t1l]=add(w[t*2],w[t*2+1],t3rh,t3rl)
                const [t2h,t2l]=add(s2rh,s2rl,s3rh,s3rl)
                const [nweh,nwel]=add(dh,dl,t1h,t1l)
                const [nwah,nwal]=add(t1h,t1l,t2h,t2l)
                hh=gh
                hl=gl
                gh=fh
                gl=fl
                fh=eh
                fl=el
                eh=nweh
                el=nwel
                dh=ch
                dl=cl
                ch=bh
                cl=bl
                bh=ah
                bl=al
                ah=nwah
                al=nwal
            }
            [h0h,h0l]=add(h0h,h0l,ah,al);
            [h1h,h1l]=add(h1h,h1l,bh,bl);
            [h2h,h2l]=add(h2h,h2l,ch,cl);
            [h3h,h3l]=add(h3h,h3l,dh,dl);
            [h4h,h4l]=add(h4h,h4l,eh,el);
            [h5h,h5l]=add(h5h,h5l,fh,fl);
            [h6h,h6l]=add(h6h,h6l,gh,gl);
            [h7h,h7l]=add(h7h,h7l,hh,hl);
        }
        const res=new _dvsp(new ArrayBuffer(64),false)
        res.si32be(0,h0h)
        res.si32be(4,h0l)
        res.si32be(8,h1h)
        res.si32be(12,h1l)
        res.si32be(16,h2h)
        res.si32be(20,h2l)
        res.si32be(24,h3h)
        res.si32be(28,h3l)
        res.si32be(32,h4h)
        res.si32be(36,h4l)
        res.si32be(40,h5h)
        res.si32be(44,h5l)
        res.si32be(48,h6h)
        res.si32be(52,h6l)
        res.si32be(56,h7h)
        res.si32be(60,h7l)
        return res.buffer
    }
}
