import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('general');
    const [pais, setPais] = useState('ar');
    const [palabra, setPalabra] = useState('');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);
    
    useEffect(() => {
        const consultarAPI = async () => {
            let url;
            if (palabra.length > 0) {
                url = `https://newsapi.org/v2/top-headlines?q=${palabra}&apiKey=${import.meta.env.VITE_API_KEY}`;
            } else {
                url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            }
            
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            setPagina(1);
        }
        consultarAPI();
    }, [categoria, pais, palabra]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${pais}&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
        }
        consultarAPI();
    }, [pagina]);

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
        setPalabra('');
    }

    const handleChangePais = (e) => {
        setPais(e.target.value);
        setPalabra('');
    }

    const hanldeChangePagina = (e, valor) => {
        setPagina(valor);
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                hanldeChangePagina,
                pagina,
                handleChangePais,
                pais,
                setPalabra
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export { NoticiasProvider }

export default NoticiasContext