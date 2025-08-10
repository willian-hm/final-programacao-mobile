export function calcularParcela(valor, parcelas, taxaMensal, comJuros) {
  if (!comJuros) {
    return valor / parcelas;
  } else {
    // juros simples mensal
    const totalJuros = valor * (taxaMensal / 100) * parcelas;
    const total = valor + totalJuros;
    return total / parcelas;
  }
}

export function calcularTotalJuros(valor, parcelas, taxaMensal, comJuros) {
  if (!comJuros) return 0;
  return valor * (taxaMensal / 100) * parcelas;
}

export function calcularTotalPago(valor, parcelas, taxaMensal, comJuros) {
  if (!comJuros) return valor;
  return valor + calcularTotalJuros(valor, parcelas, taxaMensal, comJuros);
}
a