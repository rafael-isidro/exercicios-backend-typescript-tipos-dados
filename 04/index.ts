const createProductLabel = (product: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const labelArray: string[] = [];

  for (let i = 1; i <= product.qtd; i++) {
    const labelLote = product.lote.toString().padStart(3, "0");
    const labelItem = i.toString().padStart(3, "0");
    
    const productLabel = `${labelLote}-${product.ano}-${labelItem}`;
    labelArray.push(productLabel);
  }

  return labelArray;
};

console.log(
  createProductLabel({
    produto: "Teclado Mecânico RGB",
    lote: 105,
    ano: 2022,
    qtd: 10,
  })
);
