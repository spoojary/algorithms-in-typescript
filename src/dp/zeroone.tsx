
//AXS0L0J0X000
//AXS1L0J0X001
//AXS1L0J0X010
//AXS1L0J0X011
//AXS1L0J0X100


//0000
//0001
//0010
//0011
//0100
//0101
//0110
//0111

//0
//00
//000
//0000
//0001

//asked at google interview
export const increment = (text)  => {
    if(text.length === 0) return [""]; 
    const firstChar = text.substr(0,1);
    if(firstChar === '0') {
        return [
            ...increment(text.substr(1)).map(x=>'0' + x), 
            ...increment(text.substr(1)).map(x=>'1' + x)] ;
    }
    else {
        return [
            ...increment(text.substr(1)).map(x=>firstChar + x)]        
    }
}

console.log(increment("AB00CD00"));

