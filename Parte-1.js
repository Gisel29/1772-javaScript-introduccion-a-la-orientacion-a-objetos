class Cliente
{
  nombreCliente;
  dniCliente;
  numeroCuenta;
  saldoCuenta;
  rutCliente;
}
class CuentaCorriente
{
  numero;
  saldo;
  agencia;

  depositoEnCuenta(valor){
    this.saldo += valor;
  }
}
const cliente1 = new Cliente();

cliente1.nombreCliente = "Leonardo";
cliente1.dniCliente = "12875678";
cliente1.rutCliente = "1234";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "192518";
cuentaCorriente1.saldo = "2000";
cuentaCorriente1.agencia = 1020;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "12875678";
cliente2.rutCliente = "1234";

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "192518";
cuentaCorriente2.saldo = "5000";
cuentaCorriente1.agencia = 1030;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);

//console.log(cliente1);
//console.log(cuentaCorriente1);
//console.log(cliente2);
//console.log(cuentaCorriente2);
