describe("Pruebas sobre el componente Barney", () => {
  test("El nombre debe ser Barney", (nombre = "barney") => {
    // 1. Inizialización
    const nombreCorrecto = "Barney";

    // 2. Estímulo
    const nombrePrueba = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    // 3. Observación del comportamiento
    expect(nombrePrueba).toBe(nombreCorrecto);
  });
});
