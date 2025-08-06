## 🧠 **Nome do Projeto**

**ParcelaJá – Simulador Inteligente de Parcelamentos**

---

## 🎯 **Objetivo**

Permitir que o usuário simule o parcelamento de uma compra com ou sem juros, entendendo o impacto financeiro da decisão. O app ajuda a visualizar o custo total da dívida e incentiva escolhas mais conscientes com gráficos, comparações, histórico e dicas.

---

## 🛠️ **Funcionalidades Mínimas**

1. **Entrada de Dados:**

   * Valor da compra (R\$)
   * Número de parcelas (1 a 24)
   * Taxa de juros mensal (%)
   * Tipo de juros: **com ou sem juros**

2. **Cálculos:**

   * Valor de cada parcela
   * Total pago ao final
   * Total de juros pagos

3. **Saída:**

   * Resumo financeiro da simulação
   * Gráfico comparativo: **à vista x parcelado**

---

## 🔧 **Funcionalidades Extras (para deixar mais completo que os outros temas)**

### 📊 Gráficos e Visualizações

* Evolução do pagamento mensal com destaque para o valor de juros.
* Comparação visual entre diferentes números de parcelas.
* Gráfico de pizza: proporção do valor da compra vs juros.

### 🧠 Educação Financeira (Gamificação)

* Explicações interativas sobre:

  * Juros simples vs compostos
  * Como o parcelamento afeta o orçamento
  * Dicas para fugir do crédito rotativo
* "⚠️ Alerta de decisão": se o total de juros for > 20% do valor da compra, exibe aviso.

### 📁 Histórico de Simulações (com AsyncStorage)

* Permite salvar, nomear e consultar simulações anteriores.
* Ícone de estrela para destacar simulações favoritas.

### 🔄 Comparador de Simulações

* Comparar **duas opções de parcelamento diferentes lado a lado**.
* Exemplo: 6x com 2% vs 12x com 1%.

### 📆 Planejador de Orçamento

* O usuário informa sua renda mensal.
* O app alerta se a parcela exceder **30% da renda líquida**.

### ☁️ Integração com API (extra hard)

* Buscar taxa média de juros atual no Brasil (ex: Banco Central via API).

---

## 🧪 Exemplos de Casos de Uso

* "Quero comprar um celular de R\$ 2.500. Parcelar em 12x com 3% ao mês vale a pena?"
* "É melhor parcelar em 6x com juros ou em 10x sem juros?"
* "Quanto de juros estou pagando no final?"

---

## 📱 Telas Sugeridas

1. Tela Splash
2. **Tela Inicial** – Botão “Nova Simulação” + Lista de Simulações Salvas
3. **Simulação** – Formulário com inputs e botão calcular
4. **Resultado** – Exibe valores, gráficos e alertas
5. **Comparador** – Tela para comparar duas simulações
6. **Educação Financeira** – Tela com explicações, dicas e mitos
7. **Configurações** – Preferências de idioma, tema, alertas

