const trans = [
    { ja:"ありがとう", en:"Thanks" },
    { ja:"日本語", en:"Japanese" },
    { ja:"英語", en:"English" },
    { ja:"こんにちは", en:"Hello" }
];

function transration(ja){
    const names = trans.map(el => el.name);
    console.log(trans[names.indexOf(ja)+2].en);
    console.log(trans[0].en);
};

transration("ありがとう");