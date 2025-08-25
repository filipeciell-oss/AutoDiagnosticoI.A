function runDiagnostic() {
  const result = document.getElementById("result");
  result.value = "🔎 Analisando arquivo enviado...\n(Exemplo de integração com sua IA e ELM327)";
  setTimeout(() => {
    result.value += "\n✅ Diagnóstico: Possível desgaste no rolamento da roda dianteira.";
  }, 2000);
}
