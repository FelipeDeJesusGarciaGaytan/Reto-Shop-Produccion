useEffect(() => {
    const cargarPosts = async () => {
        try {
            setCargando(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    };
    cargarPosts();
}, []);
