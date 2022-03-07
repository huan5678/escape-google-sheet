// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/all.scss';
import 'bootstrap';

document.querySelector('#app').innerHTML = `
  <form class="container p-4"
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdN0M30GB6NSQxfeAhWK0B4PSpuIPGVLnoWo4TrksqtkeKtRA/formResponse"
    method="POST"
  >
  <legend>
  <h1 class="text-center">六角西餐廳</h1>
  </legend>
  <div class="row row-cols-1 row-cols-md-2">
    <div class="col mb-3">
      <div class="form-group">
      <label for="name" class="mb-2">姓名</label>
      <input type="text" class="form-control" id="name" name="entry.104959259" placeholder="請輸入姓名">
      </div>
    </div>
  <div class="col mb-3">
    <div class="form-group">
    <label for="phone" class="mb-2">電話</label>
    <input type="text" class="form-control" id="phone" minlength="10" maxlength="10" name="entry.403616441" placeholder="請輸入電話">
    </div>
  </div>
  <div class="col mb-3 w-100">
    <div class="form-group">
    <label for="date" class="mb-2">日期</label>
    <input type="date" class="form-control" id="date" name="entry.650799372">
    </div>
  </div>
  <div class="col mb-3 w-100">
    <div class="form-group">
    <label for="person" class="mb-2">用餐人數</label>
    <select class="form-select" id="person" name="entry.1491692660">
    <option selected disabled> </option>
    ${Array.from({ length: 10 }, (_, i) => `<option>${i + 1}</option>`).join('')}
    </select>
    </div>
  </div>
  <h3 class="fs-6 fw-normal w-100">其他項目</h3>
  <div class="col mb-3">
  <div class="form-check">
    <input class="form-check-input rounded" type="checkbox" value="需要兒童座椅" name="entry.901461210" id="childChair">
    <label class="form-check-label" for="childChair">
      需要兒童座椅
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input rounded" type="checkbox" value="素食餐點" name="entry.901461210" id="vegetarian">
    <label class="form-check-label" for="vegetarian">
      素食餐點
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input rounded" type="checkbox" value="吸煙區" name="entry.901461210" id="smokeArea">
    <label class="form-check-label" for="smokeArea">
      吸煙區
    </label>
  </div>
  </div>
  <button type="submit" class="btn btn-dark w-100">送出</button>
  </div>
  </form>
`;
