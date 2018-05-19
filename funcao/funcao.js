function validateForm() {
  var name = document.forms["trabalho"]["nome"].value;

  if (name == null || name == "") {
    alert("O nome deve ser preenchido");
    return false;
  }

  var email = document.forms["trabalho"]["email"].value;

  if (email == null || email == "") {
    alert("O E-mail deve ser preenchido");
    return false;
  }

  var phone = document.forms["trabalho"]["phone"].value;

  if (phone == null || phone == "") {
    alert("O Telefone deve ser preenchido");
    return false;
  }

  var curriculo = document.forms["trabalho"]["curriculo"].value;

  if (curriculo == null || curriculo == "") {
    alert("O Currículo não foi recebido");
    return false;
  } else {
    alert("Dados preenchidos");
  }
}

function validatePedido() {
  var ped = document.forms["pedido"]["form"].value;
  if (ped == null || ped == "") {
    alert("Está faltando alguma coisa");
    return false;
  } else {
    alert("Dados preenchidos");
  }
}

function imprimir() {
  window.print();
}

function salvar() {
  confirm("Deseja salvar o Pedido?");

  alert("Pedido salvo com sucesso");
}

function pedir() {
  confirm("Deseja confirmar seu pedido?");

  alert("Pedido Realizado com sucesso");
}

function enviar() {
  confirm("Deseja salvar o Currículo?");

  alert("Currículo enviado com sucesso");
}

function contato() {
  confirm("Deseja Enviar?");

  alert("Mensagem enviada com sucesso");
}
