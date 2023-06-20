const jwt = require('jsonwebtoken');

const PayloadData = {
    myPayloadData: 1234,
};

// jwt 생성
const token = jwt.sign({ PayloadData: 1234 }, 'mysecretkey');
console.log(token);

// jwt의 payload 데이터를 복호화
const decodedValue = jwt.decode(token);
console.log('복호화한 토큰 입니다.', decodedValue); // { myPayloadData: 1234, iat: 1667561440 }

// jwt 를 만들었을 때, 사용한 비밀키가 일치하는지 검증
const decodedValueByVerify = jwt.verify(token, 'mysecretkey');
console.log('decodedValueByVerify :', decodedValueByVerify); // { myPayloadData: 1234, iat: 1667561440 }

// jwt 를 만들었을 때, 사용한 비밀키가 일치하는지 검증하지만 에러 발생
const decodedValueByVerifyToError = jwt.verify(token, '비밀키를 다르게 입력해봄');
console.log('decodedValueByVerifyToError :', decodedValueByVerifyToError); // { myPayloadData: 1234, iat: 1667561440 }
