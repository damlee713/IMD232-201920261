alert('안녕하세요');
let usern;
usern = prompt('당신의 이름은?', '홍길동');
let confirmVal = confirm('당신의 이름이 ' + usern + ' 이/가 맞습니까?');
if (confirmVal == true) {
  alert('환영합니다. ' + usern + '님');
} else {
  usern = prompt('당신의 이름은?', '홍길동');
}
