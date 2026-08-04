useEffect(() => {
    const controller = new AbortController();
 
    fetch('/api/data', { signal: controller.signal })   // le pasamos la señal
        .then((r) => r.json())
        .then(setData)
        .catch((err) => {
            // si cancelamos, NO es un error real: lo ignoramos
            if (err.name !== 'AbortError') setError(err.message);
        });
 
    return () => controller.abort();
}, []);
