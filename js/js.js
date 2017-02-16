// //Выполнить команды в консоли по очередно:
// tests.generatePage
// tests.question
// tests.result

var tests = {
  generatePage: function() {
    body = document.querySelector('body');
    body.style.font = 'Verdana';
    testPage = document.createElement('div');
    testPage.className = 'wrapper';
    testPage.style.width ='700px';
    testPage.style.height = '400px';
    testPage.style.border = '1px solid #000';
    testPage.style.margin = '20px auto';
    header = document.createElement('h2');
    header.innerHTML = 'Тест по программированию';
    header.style.fontSize = '24px';
    header.style.textAlign = 'center';
    header.style.marginTop = '20px';
    body.appendChild(testPage);
    testPage.appendChild(header);
    form = document.createElement('form');
    testPage.appendChild(form);
  },
  questions: function() {
    var num = 0;
    for( var z = 1; z < 4; z++) {
    question = document.createElement('h3');
    question.style.margin = "10px 0 5px 10px";
    question.innerHTML = z + '. Вопрос №' + z;
    form.appendChild(question);
    for(var i = 1; i < 4; i++) {
      num++;
      variantWrap = document.createElement('div');
      variantWrap.style.margin = "0 0 5px 20px";
      form.appendChild(variantWrap);
      box = document.createElement('input');
      box.setAttribute('type', 'checkbox');
      label = document.createElement('label');
      variantWrap.appendChild(box);
      box.setAttribute('id', num);
      variantWrap.appendChild(label);
      label.innerHTML = 'Вариант ответа № ' + i;
      label.setAttribute('for', num);
      }
    }
  },
  result: function () {
    result = document.createElement('div');
    result.style.margin = '10px auto';
    result.style.width = '230px';
    result.style.border = '2px solid #000';
    result.style.background = '#33adff';
    result.style.textAlign = 'center';
    form.appendChild(result);
    link = document.createElement('a');
    link.setAttribute('href', "#");
    link.style.color = '#000';
    link.style.textDecoration = "none";
    link.style.padding = '5px 10px';
    link.style.display = 'block';
    link.innerHTML = 'Посмотреть мои результаты';
    result.appendChild(link);
  }
};
